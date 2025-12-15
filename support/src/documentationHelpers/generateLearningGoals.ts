#!/usr/bin/env node
/**
 * Generate learning goals markdown based on a specific course from programStructure.json,
 * and update the relevant course's README.md.
 *
 * The course argument must match the name key in the JSON file exactly.
 *
 * Usage:
 *   npm run generate:learning-goals <course-name>
 */

import { readFile, stat } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import process from "process";
import updateFileSection from "./updateFileSection.js";

import programStructure from "./programStructure.json" with { type: "json" };
import type { Course, ProgramStructure } from "./programStructure.js";

const scriptDir = dirname(fileURLToPath(import.meta.url));

function extractLearningGoals(content: string): {
  readonly found: boolean;
  readonly goals: readonly string[];
} {
  const sectionRegex =
    /#+\s*(?:Module\s+)?Learning goals\s*\n([\s\S]*?)(?=\n#+\s|$)/i;
  const match = content.match(sectionRegex);

  if (!match) return { found: false, goals: [] };

  const section = match[1];
  const lines = section.split("\n");
  const bullets = lines.filter((line) => /^\s*[-*+]\s+.+/.test(line));

  return {
    found: true,
    goals: bullets.map((b) => b.replace(/^\s*/, (match) => match)),
  };
}

async function processCourse(course: Course): Promise<string> {
  const outputLines: string[] = [];

  for (const module of course.modules) {
    outputLines.push(`### [${module.name}](/${module.location})\n`);

    const modulePath = join(scriptDir, "../../../", module.location);
    const readmePath = join(modulePath, "README.md");

    // Check if module directory exists
    try {
      const moduleStats = await stat(modulePath);
      if (!moduleStats.isDirectory()) {
        outputLines.push(
          `> ❌ Module path is not a directory: \`${module.location}\`\n`,
        );
        continue;
      }
    } catch {
      outputLines.push(
        `> ❌ Module directory not found at \`${module.location}\`\n`,
      );
      continue;
    }

    // Try reading README
    let content;
    try {
      content = await readFile(readmePath, "utf-8");
    } catch {
      outputLines.push(
        `> ❌ Missing README.md in module directory \`${module.location}\`\n`,
      );
      continue;
    }

    const { found, goals } = extractLearningGoals(content);
    if (!found) {
      outputLines.push(
        `> ❌ "Learning goals" section not found in \`${module.location}\`\n`,
      );
    } else if (goals.length === 0) {
      outputLines.push(
        `> ⚠️ "Learning goals" section is empty in \`${module.location}\`\n`,
      );
    } else {
      goals.forEach((goal) => outputLines.push(`${goal}`));
    }

    outputLines.push("");
  }

  return outputLines.join("\n");
}

const courseName = process.argv.slice(2)[0];
if (!courseName) {
  console.log(
    "Please provide a course name as an argument. It should appear in programStructure.json.",
  );
  process.exit(1);
}

const course = (programStructure as ProgramStructure).courses.find(
  (c) => c.name === courseName,
);

if (!course) {
  console.log(
    "Course not found in json. Please provide one of:",
    programStructure.courses.map((c) => c.name).join(", "),
  );
  process.exit(1);
}

const markdown = await processCourse(course);

const patt = /❌|⚠️/;
const errorsAndWarnings = markdown.split(/\n/).filter((t) => patt.exec(t));
if (errorsAndWarnings.length > 0) {
  console.log(errorsAndWarnings.join("\n"));
}

await updateFileSection(
  markdown,
  `${course.location}/README.md`,
  "generate:learning-goals",
);

if (errorsAndWarnings.length > 0) process.exit(1);

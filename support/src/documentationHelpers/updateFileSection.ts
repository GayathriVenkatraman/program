import * as fs from "node:fs/promises";

export default async function updateFileSection(
  contentToInsert: string,
  filename: string,
  markerName: string,
): Promise<void> {
  const oldContent = await fs.readFile(filename, "utf-8");

  const pattern = new RegExp(
    `(<!-- BEGIN ${markerName} -->).*?(<!-- END ${markerName} -->)`,
    "gs",
  );

  const matches = [...oldContent.matchAll(pattern)];

  if (matches.length !== 1)
    throw new Error(
      `Expected to find 1 BEGIN/END pair, found ${matches.length}`,
    );

  const newContent = [
    oldContent.substring(0, matches[0].index),
    matches[0][1],
    `\n\n${contentToInsert.trim()}\n\n`,
    matches[0][2],
    oldContent.substring(matches[0].index + matches[0][0].length),
  ].join("");

  if (newContent === oldContent) {
    console.log(`${filename} is already up-to-date, no changes made`);
  } else {
    const tmpFile = filename + ".tmp";
    await fs.unlink(tmpFile).catch(() => undefined);
    await fs.writeFile(tmpFile, newContent, "utf-8");
    await fs.rename(tmpFile, filename);
    console.log(`${filename} updated`);
  }
}

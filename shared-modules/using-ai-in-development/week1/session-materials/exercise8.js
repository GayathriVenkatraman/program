// String formatting utilities

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function main() {
  console.log("--- capitalize ---");
  console.log(capitalize("hello"));
  console.log(capitalize("WORLD"));
  console.log(capitalize("javaScript"));
}

main();

export { capitalize };

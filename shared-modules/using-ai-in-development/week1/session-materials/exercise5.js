// A function to add two numbers

function add(x, y) {
  return x + y;
}

function main() {
  console.log("--- add ---");
  console.log(add(2, 3));
  console.log(add(2, "3"));
  console.log(add("2", "3"));
  console.log(add("2", 3));
  console.log(add(2, 3.0));
}

main();

export { add };

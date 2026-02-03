// A utility module for data processing

function prc(arr, fn) {
  const res = [];
  const seen = new Map();
  for (let i = 0; i < arr.length; i++) {
    const key = fn(arr[i]);
    if (!seen.has(key)) {
      seen.set(key, true);
      res.push(arr[i]);
    }
  }
  return res;
}

function tfm(data, specs) {
  return data.reduce((acc, item) => {
    const group = specs.groupBy(item);
    if (!acc[group]) {
      acc[group] = { items: [], total: 0 };
    }
    acc[group].items.push(specs.transform(item));
    acc[group].total += specs.getValue(item);
    return acc;
  }, {});
}

function vld(obj, rules) {
  const errors = [];
  for (const [field, checks] of Object.entries(rules)) {
    const value = obj[field];
    for (const check of checks) {
      if (!check.test(value)) {
        errors.push({ field, message: check.message });
      }
    }
  }
  return errors.length === 0 ? { valid: true } : { valid: false, errors };
}

function main() {
  const orders = [
    { id: 1, customer: "Alice", product: "Book", amount: 25 },
    { id: 2, customer: "Bob", product: "Pen", amount: 5 },
    { id: 3, customer: "Alice", product: "Notebook", amount: 15 },
    { id: 4, customer: "Alice", product: "Book", amount: 25 },
    { id: 5, customer: "Bob", product: "Pencil", amount: 3 },
  ];

  console.log("--- input ---");
  console.log(orders);

  console.log("\n--- prc ---");
  const unique = prc(orders, (o) => o.customer + o.product);
  console.log(unique);

  console.log("\n--- tfm ---");
  const grouped = tfm(orders, {
    groupBy: (o) => o.customer,
    transform: (o) => o.product,
    getValue: (o) => o.amount,
  });
  console.log(grouped);

  console.log("\n--- vld ---");
  const newOrder = { id: 6, customer: "", product: "Eraser", amount: -2 };
  const result = vld(newOrder, {
    customer: [{ test: (v) => v && v.length > 0, message: "required" }],
    amount: [{ test: (v) => v > 0, message: "must be positive" }],
  });
  console.log(result);
}

main();

export { prc, tfm, vld };

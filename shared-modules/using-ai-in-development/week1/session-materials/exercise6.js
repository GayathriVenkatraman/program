// A utility module for data processing

function deduplicateBy(array, getKey) {
  const uniqueItems = [];
  const seenKeys = new Map();

  for (const item of array) {
    const key = getKey(item);
    if (!seenKeys.has(key)) {
      seenKeys.set(key, true);
      uniqueItems.push(item);
    }
  }

  return uniqueItems;
}

function groupAndAggregate(data, options) {
  return data.reduce((groups, item) => {
    const groupName = options.groupBy(item);

    if (!groups[groupName]) {
      groups[groupName] = { items: [], total: 0 };
    }

    groups[groupName].items.push(options.transform(item));
    groups[groupName].total += options.getValue(item);

    return groups;
  }, {});
}

function validate(object, validationRules) {
  const errors = [];

  for (const [fieldName, rules] of Object.entries(validationRules)) {
    const fieldValue = object[fieldName];

    for (const rule of rules) {
      if (!rule.test(fieldValue)) {
        errors.push({ field: fieldName, message: rule.message });
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

  console.log("\n--- deduplicateBy ---");
  const uniqueOrders = deduplicateBy(
    orders,
    (order) => order.customer + order.product,
  );
  console.log(uniqueOrders);

  console.log("\n--- groupAndAggregate ---");
  const ordersByCustomer = groupAndAggregate(orders, {
    groupBy: (order) => order.customer,
    transform: (order) => order.product,
    getValue: (order) => order.amount,
  });
  console.log(ordersByCustomer);

  console.log("\n--- validate ---");
  const newOrder = { id: 6, customer: "", product: "Eraser", amount: -2 };
  const validationResult = validate(newOrder, {
    customer: [
      { test: (value) => value && value.length > 0, message: "required" },
    ],
    amount: [{ test: (value) => value > 0, message: "must be positive" }],
  });
  console.log(validationResult);
}

main();

export { deduplicateBy, groupAndAggregate, validate };

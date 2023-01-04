const items = [
  {
    price: 4,
    weight: 12,
  },
  {
    price: 2,
    weight: 2,
  },
  {
    price: 1,
    weight: 2,
  },
  {
    price: 1,
    weight: 1,
  },
  {
    price: 10,
    weight: 4,
  },
];

const KnapsackProblem = (objects, weightLimit) => {
  const items = objects.sort((a, b) => b.price - a.price);
  const container = [];

  let weight = 0;

  for (let i = 0; i < items.length + 1; i++) {
    if (items.length === 1 && weight + items[0].weight <= weightLimit) {
        weight += items[0].weight;
        container.push(items[0]);
        items.splice(0, 1);
    }
    for (let j = i + 1; j < items.length; j++) {
      if (weight + items[i].weight + items[j].weight <= weightLimit) {
        weight += items[i].weight + items[j].weight;
        container.push(items[i], items[j]);
        const itemJ = items[j];
        items.splice(i, 1);
        items.splice(items.indexOf(itemJ), 1);
        i = 0;
      }
    }
  }
  return container
};

console.log(KnapsackProblem(items, 15));

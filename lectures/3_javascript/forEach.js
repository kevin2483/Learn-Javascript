const animals = [
  { name: 'lion', size: 'big', isAggressive: true, weight: 200 },
  { name: 'monkey', size: 'medium', isAggressive: true, weight: 30 },
  { name: 'cat', size: 'small', isAggressive: false, weight: 5 },
  { name: 'rat', size: 'small', isAggressive: false, weight: 2 },
];

//forEach
animals.forEach(function (animal, index) {
  console.log(animal.name);
});

//map
const animalsNames = animals.map(function (animal) {
  return `${animal.name}`;
});

console.log(animalsNames);

//filter
const smallAnimals = animals.filter(function (animal) {
  return animal.size === 'small';
});

console.log(smallAnimals);

//reduce
const totalWeight = animals.reduce(function (acc, cur) {
  return acc + cur.weight;
}, 0); //0으로 초기화를 해야한다!
console.log(totalWeight);

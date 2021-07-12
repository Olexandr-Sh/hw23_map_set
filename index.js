
let firstUser = [
  ['name', 'Olexandr'],
  ['age', 26],
  ['city', 'Dnipro'],
  ['lawyer', true],
];
let secondUser = [
  ['name', 'Oleg'],
  ['age', 20],
  ['city', 'Kyiv'],
  ['student', true],
];
let thirdUser = [
  ['name', 'Olexiy'],
  ['age', 27],
  ['city', ' Odessa'],
  ['surgeon', false],
];

let users = [
  [firstUser],
  [secondUser],
  [thirdUser],
]

let map = new Map(users);
console.log(map);

for (let [key, value] of map) {
  console.log(key + ' = ' + value);
};

for (let [key, value] of map.entries()) {
  console.log(key + ' = ' + value);
};

for (let key of map.keys()) {
  console.log(key);
};

for (let value of map.values()) {
  console.log(value);
}

console.log(map.size);

//інший приклад, в якому буде більш зрозуміло результати

let secondMap = new Map();
secondMap.set('name', 'Olexandr');
secondMap.set('age', 20);
secondMap.set('city', ' Odessa');
for (let [key, value] of secondMap) {
  console.log(key + ' = ' + value);
};

for (let key of secondMap.keys()) {
  console.log(key);
};

for (let value of secondMap.values()) {
  console.log(value);
}

console.log(secondMap.size);

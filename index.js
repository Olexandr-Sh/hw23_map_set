
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
  [firstUser, 'info about first user'],
  [secondUser, 'info about second user'],
  [thirdUser, 'info about third user'],
]

let map = new Map(users);
console.log(map);

for (let [key, value] of map) {
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

let arr = [];
while (arr.length < 10) {
  let numbersList = Math.floor(Math.random() * 100)+1;
  arr[arr.length] = numbersList;
}

// while (arr.length < 10) {
  // let arrSet = new Set(arr);
  // 
// }
// console.log(arr);

let mySet = new Set(arr);
console.log(mySet);

let evenNumSet = new Set(arr.filter(x => x % 2 === 0));
console.log(evenNumSet);

// let sumNumSet = evenNumSet.sum();
// console.log(sumNumSet);


// function setSum(evenNumSet) {
  // let sum = 0;
  // for (let i = 0; i < evenNumSet.length; i++) {
    // sum += evenNumSet[i];
  // } return sum;
// };
// console.log(setSum(evenNumSet));

// for (let i = 0, sum = 0; i < evenNumSet.length; sum += evenNumSet[i++]);
// console.log(sum);

let sum = 0;
for (let element of evenNumSet) {
  sum += element;
}
console.log(sum);










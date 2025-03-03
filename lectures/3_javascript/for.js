let person = {
  name: '홍길동',
  age: 25,
  job: '개발자',
};

let keys = Object.keys(person);
console.log(keys);

for (let key in person) {
  console.log(person[key]);
}

console.log('-----');

let fruits = ['사과', '배', '바나나', '포도', '딸기'];
for (let fruit of fruits) {
  console.log(fruit);
}

'use strict';

// const fruits = ['사과', '바나나', '딸기', '가', '나', '파인애플'];
// console.log('fruits', fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// fruits[2] = '포도';
// console.log(fruits[2]);

// console.log(fruits.length);
// console.log('마지막 값:', fruits[fruits.length - 1]);

// //push()
// fruits.push('귤');
// console.log(fruits);

// //forEach()
// fruits.forEach(function (item, index) {
//   console.log(index, item);
// });

// // // pop() 뒤에서 제거
// // fruits.pop();
// // fruits.pop();
// // fruits.pop();
// // let removedItem = fruits.pop();
// // console.log(removedItem);
// // console.log(fruits);

// //shift() 앞에서 제거
// fruits;
// fruits.shift();
// console.log(fruits);

// //unshift()
// fruits.unshift('수박');
// console.log(fruits);

// //indexOf()
// const index = fruits.indexOf('파인애플');
// console.log(index);

// //splice()
// fruits.splice(2, 1);
// console.log(fruits);

// console.log(fruits);
// fruits.splice(1, 2);
// console.log(fruits);

// 3 구조 분해 할당
// let fruits = ['사과', '바나나', '딸기'];

// let [apple, banana, strawberry, ...others] = [
//   '사과',
//   '바나나',
//   '딸기',
//   'a',
//   'b',
//   'c',
// ];
// console.log(apple);
// console.log(others);

//4 전개 구문
let fruits = ['사과', '바나나', '딸기'];
let item = [...fruits];
console.log(item);

let fruits1 = ['사과', '바나나', '딸기'];
let fruits2 = ['파인애플', '수박'];
let items = [...fruits1, ...fruits2];
console.log(items);

//5 rest parameter
print('a', 'b', 'c');

function print(value1, value2, value3) {
  console.log(value1);
  console.log(value2);
  console.log(value3);
}

function print(...values) {
  console.log(values);
}

// 얉은 복사
// let source = ['사과', '바나나', '딸기'];
// let target = source;
// target[0] = '파인애플';
// console.log('source', source);
// console.log('target', target);

//깊은 복사
let source = ['사과', '바나나', '딸기'];
// let target = [...source];
// let target = Array.from(source);
let target = source.slice();
target[0] = '파인애플';
console.log('source', source);
console.log('target', target);

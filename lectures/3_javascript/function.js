'use strict ';

// function sayHello() {
//   console.log('이름과 나이를 출력해주세요');
//   console.log('이름: 홍길동, 나이: 24살');
// }

const sayHello = function (name, age) {
  console.log(`이름:${name}, 나이:${age}`);
};

sayHello('홍길동', 24);

//

// function sum(num1, num2) {
//   return num1 + num2;
// }

const sum = (num1, num2) => num1 + num2;

let result = sum(5, 3);
console.log(result);

const hello = (name) => {
  console.log(`안녕 ${name}`);
};
hello('반가워');

let fruits = ['사과', '바나나', '딸기'];
fruits.forEach((item, index) => {});

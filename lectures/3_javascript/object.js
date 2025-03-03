'use strict';

// //객체 리터럴 문법
// const person = {
//   name: '가나다',
//   age: 15,
// };
// person.job = '개발자';
// console.log(person);

// //객체 생성자 문법
// const person1 = new Object();
// person1.name = '홍길동';
// person1.age = 25;
// console.log(person1);

// //구조 분해 할당
function printPerson({ hobby, name, age }) {
  console.log(
    `제 이름은 ${name}이며, 나이는 ${age}살 입니다. 그리고 취미는 ${hobby}입니다.`
  );
}
const person = {
  name: '홍길동',
  age: 10,
  hobby: '헬스',
};
printPerson(person);


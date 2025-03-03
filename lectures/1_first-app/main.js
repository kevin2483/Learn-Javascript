console.log('hello!!!');
console.log('안녕', '뭐해');

// alert('hello javascript');

let str = 'hello';
let number = 30;
console.log(str);
console.log(number);

function sayHello() {
  console.log('hello1');
  console.log('hello1');
  console.log('hello1');
}

sayHello();

let obj = {
  number: 30, // 프로퍼티
  sayHello: function () {
    console.log('hello');
    console.log('hello');
  },
};

console.log(obj.number);
obj.sayHello();

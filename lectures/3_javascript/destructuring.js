let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;

console.log(user1); //Mike
console.log(user2); //Tom
console.log(user3); // Jane

let [user4, , user5] = ['Mike', 'Tom', 'Jane', 'Tony'];
console.log(user4); //Mike
console.log(user5); //Jaen

//객체 구조 분해
let user = { name: 'Mike', age: 30 };
let { name, age } = user;

console.log(name); //Mike
console.log(age); //30

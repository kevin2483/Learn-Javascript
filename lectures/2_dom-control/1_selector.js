let title = document.getElementById('title');
console.log(title);
title.textContent = '3대 운동';

let items = document.getElementsByClassName('item');
console.log(items);

console.log(items[1]);

let lilist = document.getElementsByTagName('li');
console.log(lilist);

let h2 = document.querySelector('#title');
console.log(h2);

let item = document.querySelector('.itme');
console.log(item);

let itemAll = document.querySelectorAll('.item');
console.log(itemAll);
console.log(itemAll[0]);
console.log(itemAll[2]);

h2.innerHTML = '<span>운동@@@</span>';

let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력');

input.setAttribute('required', '');
input.removeAttribute('placeholder');
input.removeAttribute('required');

let hello = document.querySelector('.hello');
console.log('hello:', hello);
// hello.style.color = 'blue';
// hello.style.backgroundColor = 'black';

hello.classList.add('dark', 'one');
// hello.classList.remove('dark');

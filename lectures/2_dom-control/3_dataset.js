let h2 = document.querySelector('h2');
h2.dataset.test = '안녕!';
console.log(h2.dataset.test);

let img = document.querySelector('img');

let liList = document.querySelectorAll('li');
console.log(liList);

liList[0].addEventListener('click', function (event) {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
});

liList[1].addEventListener('click', function (event) {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
});

liList[2].addEventListener('click', function (event) {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
});

let selectedItem = document.querySelector('.selected-item');

let addBtn = document.getElementById('button');
let inputBox = document.querySelector('input');
let addBefore = document.getElementById('before');
let removeTargetBtn = document.querySelector('#target-remove');
let removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  button.setAttribute('class', 'remove-btn');
  li.appendChild(button);
  ul.appendChild(li);
  inputBox.value = '';
  inputBox.focus();
});

addBefore.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');
  console.log(targetLi);
  li.textContent = inputBox.value;
  ul.insertBefore(li, targetLi);
});

removeTargetBtn.addEventListener('click', function () {
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});

removeBtn.addEventListener('click', function (event) {
  console.log(event.target.parentNode);
  event.target.parentNode.remove();
});

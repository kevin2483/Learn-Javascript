let inputBox = document.querySelector('#input-box');

// inputBox.addEventListener('keypress', function (event) {
//   console.log('keypress');
// });

inputBox.addEventListener('keyup', function (event) {
  console.log('event.key:', event.key);
});

let img = document.querySelector('img');
img.addEventListener('error', function () {
  console.log('error');
});

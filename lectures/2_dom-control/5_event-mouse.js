let rectangle = document.querySelector('#rectangle');

// rectangle.addEventListener('mousedown', function (event) {
//   console.log('mousedown');
// });

// rectangle.addEventListener('mouseup', function (event) {
//   console.log('mousedown');
// });

// rectangle.addEventListener('mouseenter', function (event) {
//   console.log('mouseenter');
// });

// rectangle.addEventListener('mouseleave', function (event) {
//   console.log('mouseleave');
// });

// rectangle.addEventListener('mousemove', function (event) {
//   console.log('mousemove');
// });

let body = document.querySelector('body');
body.addEventListener('click', function (event) {
  console.log(event.pageX, event.pageY);
  let div = document.createElement('div');
  div.classList.add('circle');
  div.style.left = event.pageX - 25 + 'px';
  div.style.right = event.pageY - 25 + 'px';
  body.append(div);
});

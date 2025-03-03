let btn = document.querySelector('#btn');

let emailEL = document.querySelector('[name=email]');
let passwordEL = document.querySelector('[name=password]');

btn.addEventListener('click', function () {
  let email = emailEL.value;
  let password = passwordEL.value;
  console.log('email:', email);
  console.log('password:', password);

  if (email === '' || email.includes('@') === false) {
    alert('이메일이 유효하지 않습니다');
  } else {
    alert('로그인 성공!');
  }
});

let number = 19;
let message = number % 2 === 1 ? '홀수 입니다' : '짝수 입니다.';
console.log(message);

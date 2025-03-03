let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn1.onclick = function () {
  alert('프로퍼티 리스너 방법');
};

btn2.addEventListener('click', function () {
  alert('에드이벤트 리스너 방법');
});
btn2.addEventListener('click', function () {
  alert('에드이벤트 리스너 방법 두번쨰');
});

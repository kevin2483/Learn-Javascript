'use strict';

// let number = 110;
// if (number > 100) {
//   console.log('참 입니다');
// } else {
//   console.log('거짓입니다');
// }

let score = prompt('수학 점수를 입력해주세요');
console.log('scroe:', score);

if (score >= 90) {
  console.log('등급은 A입니다');
} else if (score >= 80) {
  console.log('등급은 B입니다');
} else if (score >= 70) {
  console.log('등급은 C입니다');
} else if (score >= 60) {
  console.log('등급은 D입니다');
} else {
  console.log('등급은 F입니다');
}

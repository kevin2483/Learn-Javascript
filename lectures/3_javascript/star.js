'use strict';

window.onload = function () {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      document.write('*');
    }
    document.write('<br>');
  }

  document.write('<hr>');

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
};

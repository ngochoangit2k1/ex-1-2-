const inputNum = document.querySelector('#Num');
const btn = document.querySelector('button');
const textMuted = document.querySelector('.text-muted');

var num = 0;
inputNum.onchange = function (e) {
  num = Number(e.target.value);
};
btn.onclick = function () {
  var chan = 1;
  var le = 1;
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      chan *= i;
      textMuted.innerHTML = chan;
      console.log(i);
    } else {
      le *= i;
      textMuted.innerHTML = le;
      console.log(i);
    }
  }
};

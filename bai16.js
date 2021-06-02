const inputNum = document.querySelector('#Num');
const btn = document.querySelector('button');
const textMuted = document.querySelector('.text-muted');

var num = 0;
inputNum.onchange = function (e) {
  num = e.target.value;
};
btn.onclick = function () {
  if (num) {
    arrValue = num.split('');
    arrValue.reverse();
    textMuted.innerHTML = arrValue.join(' - ');
  } else {
    alert('bạn chưa nhập giá trị ?');
  }
};

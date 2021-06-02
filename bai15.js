const valueElement = document.querySelector('#valueInp');
const helpIdMes = document.querySelector('#helpId');
const btn = document.querySelectorAll('button');
const textMuted = document.querySelector('.text-muted');

var arrVal = [];
var valueInp = 0;

valueElement.onchange = function (e) {
  valueInp = Number(e.target.value);
};

function addArrValues(arrVal, valueInp) {
  arrVal.push(valueInp);
  return arrVal;
}

btn[0].onclick = function () {
  addArrValues(arrVal, valueInp);
  helpIdMes.innerHTML = arrVal.join('-') + '';
};

btn[1].onclick = function () {
  console.log(arrVal);

  var arrSoChinhPhuong = [];
  if (arrVal.length > 0) {
    for (var i = 0; i < arrVal.length; i++) {
      arrSoChinhPhuong.push(Math.pow(arrVal[i], 2));
    }
    textMuted.innerHTML = `Số chính phương là số: ${arrSoChinhPhuong.join(
      ' - '
    )}`;
    arrSoChinhPhuong.splice(0);
    arrVal.splice(0);
  } else {
    alert('Bạn Chưa nhập phần tử mảng ?');
  }
};

function alertMes(message) {
  alert(message);
}

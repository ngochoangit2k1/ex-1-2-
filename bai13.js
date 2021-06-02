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

  var arrSoNguyenTo = [];
  if (arrVal.length > 0) {
    for (var i = 0; i < arrVal.length; i++) {
      if (arrVal[i] > 2) {
        for (var j = 2; j < arrVal[i]; j++) {
          console.log(j);

          if (arrVal[i] % j != 0) {
            arrSoNguyenTo.push(arrVal[i]);
            break;
          } else {
            break;
          }
        }
      } else if (arrVal[i] == 2) {
        arrSoNguyenTo.push(arrVal[i]);
      }
    }
    if (arrSoNguyenTo.length < 0) {
      alert('Không có số nguyên tố nào ?');
    }
    textMuted.innerHTML = `Số nguyên tố là số: ${arrSoNguyenTo.join(' - ')}`;
    arrSoNguyenTo.splice(0);
    arrVal.splice(0);
  } else {
    alert('Bạn Chưa nhập phần tử mảng ?');
  }
};

function alertMes(message) {
  alert(message);
}

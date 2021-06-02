document.addEventListener(
  'DOMContentLoaded',
  () => {
    const input = document.querySelector('input');
    const result = document.querySelector('#helpId');

    var arrNum = [];
    input.onchange = (e) => {
      const valueInp = e.target.value;
      if (valueInp < 9) {
        alert('Gia tri phai >= 15');
      } else {
        checkValueArr(valueInp);
      }
    };

    checkValueArr = (val) => {
      for (let i = 1; i <= val; i++) {
        if (i % 5 == 0) {
          arrNum.push(i);
        }
      }
      result.innerHTML = arrNum.join(' - ');
      arrNum.splice(0);
    };
  },
  false
);

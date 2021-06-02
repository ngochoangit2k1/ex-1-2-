document.addEventListener(
  'DOMContentLoaded',
  () => {
    const inputValue = document.querySelectorAll('input');
    const resultValue = document.querySelector('#helpId');
    const btn = document.querySelector('button');

    var n = 0;
    var x = 0;
    var result;
    inputValue[0].onchange = (e) => {
      n = Number(e.target.value);
      console.log(n);
    };

    inputValue[1].onchange = (e) => {
      x = Number(e.target.value);
      console.log(x);
    };
    btn.onclick = () => {
      if (n) {
        var sum = 1 + x;
        for (let i = 1; i <= n; i++) {
          if (i > 1) {
            result = Math.pow(x, i) / i;
          }
          if (result) {
            sum += result;
          }
        }
        sum = sum.toFixed(2);
      }
      resultValue.innerText = `Đáp án là: ${sum}`;
    };
  },
  false
);

const $btn = document.querySelector('#btn');
const $num = document.querySelector('#num');
const $result = document.querySelector('#result');

$btn.addEventListener('click', () => {
  let number = parseInt($num.value);
  let gugu = '';
  if (isNaN(number)) {
    alert('숫자를 입력해주세요');
  } else {
    for (let i = 1; i < 10; i++) {
      gugu += `${number} x ${i} = ${number * i}<br>`;
    }
    $result.innerHTML = gugu;
  }
});

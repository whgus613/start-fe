const resultEl = document.getElementById('result');

const id = 'hello';
const pw = 'world';

const loginForm = document.querySelector('form');
const idInput = loginForm.querySelector('input[name="id"]');
const pwInput = loginForm.querySelector('input[name="pw"]');

function handleSubmit(event) {
  event.preventDefault();

  const enteredId = idInput.value;
  const enteredPw = pwInput.value;

  if (enteredId === id && enteredPw === pw) {
    resultEl.textContent = 'success';
    resultEl.classList.add('success');
    resultEl.classList.remove('error');
  } else {
    resultEl.textContent = 'error';
    resultEl.classList.add('error');
    resultEl.classList.remove('success');
  }
}

loginForm.addEventListener('submit', handleSubmit);

import { openModal } from './modal.js';

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  openModal({
    text: '안녕하세요',
  });
});

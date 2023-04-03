const $board = document.querySelector('#board');
const boardLength = 4;

let isWhite = false;
let className = '';
let str = '';

for (let i = 0; i < boardLength; i++) {
  for (let j = 0; j < boardLength; j++) {
    if (isWhite) className = 'white';
    else className = 'black';

    str += `<span class="` + className + `"></span>`;
    isWhite = !isWhite;
  }
  isWhite = !isWhite;
}

$board.innerHTML = str;

let $click = null;

function clickBoard(event) {
  if ($click) {
    $click.className = $click.className.replace(' red', '');
  }

  var element = event.currentTarget;
  element.className += ' red';
  $click = element;
}

function addEvent() {
  const $boards = document.querySelectorAll('span');
  const boardsLength = $boards.length;

  for (let i = 0; i < boardsLength; i++) {
    $boards[i].addEventListener('click', clickBoard);
  }
}

addEvent();

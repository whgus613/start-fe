let currentBox = null;
let xOffset = 0;
let yOffset = 0;

function startDrag(event) {
  currentBox = this;
  xOffset = event.clientX - currentBox.offsetLeft;
  yOffset = event.clientY - currentBox.offsetTop;
}

function drag(event) {
  event.preventDefault();
  if (currentBox) {
    currentBox.style.left = event.clientX - xOffset + 'px';
    currentBox.style.top = event.clientY - yOffset + 'px';
  }
}

function endDrag(event) {
  currentBox = null;
}

let boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
  box.addEventListener('mousedown', startDrag);
  box.addEventListener('mousemove', drag);
  box.addEventListener('mouseup', endDrag);
});

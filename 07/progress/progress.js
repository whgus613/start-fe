const progress = document.getElementById('progress');

let width = 0;
let direction = 1;

setInterval(() => {
  width += direction;
  if (width >= 100) {
    direction = -1;
  } else if (width <= 0) {
    direction = 1;
  }
  progress.style.width = `${width}%`;
}, 30);

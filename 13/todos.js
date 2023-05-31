function removeTask() {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

function addTask(event) {
  event.preventDefault();

  var input = document.querySelector('input[name="text"]');
  var text = input.value.trim();

  if (text !== '') {
    var listItem = createTaskElement(text);

    var ul = document.querySelector('ul');
    ul.appendChild(listItem);

    input.value = '';

    listItem.addEventListener('change', function () {
      ul.prepend(listItem);
    });
  }
}

function createTaskElement(text) {
  var listItem = document.createElement('li');

  var deleteButton = document.createElement('button');
  deleteButton.className = 'delete';
  deleteButton.innerText = '×';
  deleteButton.addEventListener('click', removeTask);
  listItem.appendChild(deleteButton);

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'toggle-checked';
  listItem.appendChild(checkbox);

  var taskText = document.createElement('span');
  taskText.className = 'text';
  taskText.innerText = text;
  listItem.appendChild(taskText);

  return listItem;
}

var form = document.querySelector('.new-task');
form.addEventListener('submit', addTask);

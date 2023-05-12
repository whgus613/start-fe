const createModal = () => {
  const modalDiv = document.createElement('div');
  modalDiv.innerHTML = `
      <div class="body">
        <div class="close">X</div>
        <div class="content"></div>
      </div>
    `;
  modalDiv.classList.add('modal');

  const modalStyle = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.25);
      display: none;
      justify-content: center;
      align-items: center;
    `;
  modalDiv.style.cssText = modalStyle;

  const modalBody = modalDiv.querySelector('.body');
  const bodyStyle = `
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
  modalBody.style.cssText = bodyStyle;

  const closeBtn = modalDiv.querySelector('.close');
  closeBtn.textContent = 'X';
  const closeBtnStyle = `
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    `;
  closeBtn.style.cssText = closeBtnStyle;

  const contentDiv = modalDiv.querySelector('.content');
  const contentStyle = `
      width: 300px;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: center;
      align-items: center;
    `;
  contentDiv.style.cssText = contentStyle;

  return {
    modalDiv,
    modalClose: closeBtn,
    modalContent: contentDiv,
  };
};

let modal = null;

const openModal = (options) => {
  if (!modal) {
    modal = createModal();
    document.body.appendChild(modal.modalDiv);
  }

  modal.modalContent.textContent = options.text;
  modal.modalDiv.style.display = 'flex';

  modal.modalClose.addEventListener('click', closeModal);
  window.addEventListener('keydown', handleKeyDown);
};

const closeModal = () => {
  if (modal) {
    modal.modalDiv.style.display = 'none';

    modal.modalClose.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', handleKeyDown);
  }
};

const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

export { openModal, closeModal };

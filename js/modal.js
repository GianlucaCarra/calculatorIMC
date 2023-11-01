export const modalList = {
  
  modal: document.querySelector('.modal-wrapper'),
  btnClose: document.querySelector('.modal button'),

  open() {
    modalList.modal.classList.add('open');
  },
  close() {
    modalList.modal.classList.remove('open');
  },
};

modalList.btnClose.onclick = () => {
  modalList.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(e) {
  if(e.key === 'Escape') {
    modalList.close()
  }
}

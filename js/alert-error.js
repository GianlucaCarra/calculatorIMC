export const error = {
  element: document.querySelector('.alert-error'),

  open() {
  error.element.classList.add('open')
  },
  close() {
  error.element.classList.remove('open')
  },
}




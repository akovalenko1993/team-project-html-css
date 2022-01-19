(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-about]'),
    closeModalBtn: document.querySelector('[data-modal-close-about]'),
    modal: document.querySelector('[data-modal-about]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalReadMore);
  refs.closeModalBtn.addEventListener('click', toggleModalReadMore);

  function toggleModalReadMore() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
export const modals = ({ openButton, closeButton, backdrop }) => {
    backdrop.classList.add('backdrop');
    closeButton.classList.add('.modal__close');
    closeButton.querySelector('use').classList.add('modal__icon');
    closeButton.querySelector('svg').classList.add('modal__icon-wrapper');


  const closeModal = e => {
    backdrop.classList.remove('is-open');
    
  };

  const onEscClick = e => {
    if (e.key !== 'Escape') return;
    closeAuthModal();
    document.removeEventListener('keydown', onEscClick);
  };

  const openModal = e => {
    backdrop.classList.add('is-open');
    document.addEventListener('keydown', onEscClick);
  };
  openButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
};
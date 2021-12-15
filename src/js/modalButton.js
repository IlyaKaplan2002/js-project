const refs = {
    openModalBtn: document.querySelector('[data-action = "open-modal"]'),
    closeModalBtn: document.querySelector('[data-action = "close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
    document.body.classList.add('show-modal');
    window.addEventListener('keydown', onEscKeyPress)
}

function onCloseModal() {
    document.body.classList.remove('show-modal');
    window.removeEventListener('keydown', onEscKeyPress)
}

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        onCloseModal()
    }
}

function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';

    if (event.code === ESC_KEY_CODE) {
        onCloseModal();
    }
}
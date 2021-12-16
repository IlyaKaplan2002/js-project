import '../sass/main.scss';

const refs = 
{
    openModal: document.querySelector('.footer__button'),
    closeModal: document.querySelector('.closeModal'),
    backdropStudents: document.querySelector('.js-backdropStudents'),
}

refs.openModal.addEventListener('click',onOpenModalStudents);
refs.closeModal.addEventListener('click',onCloseModalStudents);
refs.backdropStudents.addEventListener('click',onBackdropModalStudentsClick);

function onOpenModalStudents()
{
    document.addEventListener('keypress',onEscKeypress);
    document.body.classList.add('show-modalStudents');   
}

function onCloseModalStudents()
{
    document.removeEventListener('keypress',onEscKeypress);
    document.body.classList.remove('show-modalStudents');
}

function onBackdropModalStudentsClick(e)
{
    if (e.currentTarget===e.target)
    {onCloseModalStudents()}
}

function onEscKeypress(e)
{
    if(e.key === 'Escape')    
    {onCloseModalStudents()}    
}

export { onOpenModalStudents };
export { onCloseModalStudents };
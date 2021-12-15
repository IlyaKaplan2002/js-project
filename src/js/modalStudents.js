import '../sass/main.scss';
// import modalStudents from '../handlebars/modalStudents.hbs';


const refs = 
{
    openModal: document.querySelector('.footer__button'),
    closeModal: document.querySelector('.closeModal'),
    backdropStudents: document.querySelector('.js-backdropStudents'),
}


refs.openModal.addEventListener('click',onOpenModalStudents);
refs.closeModal.addEventListener('click',onCloseModalStudents);
refs.backdropStudents.addEventListener('click',onBackdropModalStudentsClick);

// function renderModalStudents()
// {
//   const markupModalStudents = `<div class="backdrop-students js-backdropStudents">
//   <div class= "modal-students">
//   <button type="button" class="closeModal">Close</button>
//   <h2 class="modal-title">Our team</h2>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo natus quasi nostrum, amet accusantium fugiat repellendus autem nulla fuga voluptatibus consequuntur blanditiis vitae obcaecati alias sunt incidunt dolores eius soluta!</p>
//   <ul class="list-team">
     
//       <li class="coder team-lead">
//           <img src="" alt="Our Team Lead" class="photo"></img>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis quia esse laboriosam deleniti tempora rem similique voluptatibus pariatur aliquam id perferendis, distinctio cupiditate vero eligendi tempore. Ex, iure reiciendis!</p>
//       </li>
//       <li class="coder scrum-master">
//           <img src="" alt="Our Scrum Master" class="photo"></img>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis quia esse laboriosam deleniti tempora rem similique voluptatibus pariatur aliquam id perferendis, distinctio cupiditate vero eligendi tempore. Ex, iure reiciendis!</p>
//       </li>
//       <li class="coder">
//           <img src="" alt="Our js developer" class="photo"></img>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis quia esse laboriosam deleniti tempora rem similique voluptatibus pariatur aliquam id perferendis, distinctio cupiditate vero eligendi tempore. Ex, iure reiciendis!</p>
//       </li>
//       <li class="coder">
//           <img src="" alt="Our js developer" class="photo"></img>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis quia esse laboriosam deleniti tempora rem similique voluptatibus pariatur aliquam id perferendis, distinctio cupiditate vero eligendi tempore. Ex, iure reiciendis!</p>
//       </li>
//       <li class="coder">
//           <img src="" alt="Our js developer" class="photo"></img>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis quia esse laboriosam deleniti tempora rem similique voluptatibus pariatur aliquam id perferendis, distinctio cupiditate vero eligendi tempore. Ex, iure reiciendis!</p>
//       </li>
//       <li class="coder">
//           <img src="" alt="Our js developer" class="photo"></img>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis quia esse laboriosam deleniti tempora rem similique voluptatibus pariatur aliquam id perferendis, distinctio cupiditate vero eligendi tempore. Ex, iure reiciendis!</p>
//       </li>
//       <li class="coder">
//           <img src="" alt="Our js developer" class="photo"></img>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis quia esse laboriosam deleniti tempora rem similique voluptatibus pariatur aliquam id perferendis, distinctio cupiditate vero eligendi tempore. Ex, iure reiciendis!</p>
//       </li>
//       <li class="coder">
//           <img src="" alt="Our js developer" class="photo"></img>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis quia esse laboriosam deleniti tempora rem similique voluptatibus pariatur aliquam id perferendis, distinctio cupiditate vero eligendi tempore. Ex, iure reiciendis!</p>
//       </li>       
//   </ul>
//   </div>
// </div>`;
// //   body.insertAdjacentHTML('beforeend',markupModalStudents );
// document.querySelector('body').innerHTML = markupModalStudents;
// }

function onOpenModalStudents()
{
    window.addEventListener('keypress',onEscKeypress);
    document.body.classList.add('show-modalStudents');
    // renderModalStudents();
}

function onCloseModalStudents()
{
    window.removeEventListener('keypress',onEscKeypress);
    document.body.classList.remove('show-modalStudents');
}

function onBackdropModalStudentsClick(e)
{
    if (e.currentTarget===e.target)
    {onCloseModalStudents()}
}

function onEscKeypress(e)
{
    if(e.code==='Escape')
    {onCloseModalStudents()}
}

export { onOpenModalStudents };
export { onCloseModalStudents };
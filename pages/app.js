// button to open modal
const openModal = document.querySelector('.profile__info-btn')

//close modal
const closeBtn = document.querySelector('.modal__close')

//modal selector
const modal = document.querySelector('.modal')
// selecting form
const form = document.querySelector('.modal__form')

const save = document.querySelector('.modal__save-button');

// values that need changing
const nameInput = document.querySelector('.modal__form-name')
const professionInput = document.querySelector('.modal__form-profession')
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession')

const formSubmitHandler = (e) =>{
  e.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;  
}

save.addEventListener('click', modalCloseHandler );

form.addEventListener('submit', formSubmitHandler);

openModal.addEventListener('click', ()=>{
  modal.classList.toggle("show-modal")
})

closeBtn.addEventListener('click', modalCloseHandler)

// const modalCloseHandler = (event) => {
//   if (
//     (event.target == closeBtn || event.target === save) &&
//     modal.classList.toggle("show-modal")
//   ) {
//     modal.classList.toggle("show-modal")
//   }
// };

//! ? can you explain why the above function does not work the same
// as the below one? 

function modalCloseHandler(event) {

  if 
    (event.target == closeBtn || event.target === save)
    modal.classList.toggle("show-modal")
  
}

// close modal by pressing esc 
// document.addEventListener('keyup', function(e){
// const key = event.key || event.keyCode;

// if (key === 'Escape' || key === 'Esc' || key === 27) {
//    modal.style.display="none"
// }
// })

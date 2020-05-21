// button to open modal
const openModal = document.querySelector('.profile__info-btn')

//close modal
const closeBtn = document.querySelector('.modal__close')

//modal selector
const modal = document.querySelector('.modal')
// selecting form
const form = document.querySelector('.modal__form')

const save = document.querySelector('.modal__save-button');

const formSubmitHandler = (e)=>{
  e.preventDefault();
  let nameInput = document.querySelector('.modal__form-name')
  let professionInput = document.querySelector('.modal__form-profession')
  let name = document.querySelector('.profile__name');
  let profession = document.querySelector('.profile__profession')
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;  
}

save.addEventListener('click', modalCloseHandler );

form.addEventListener('submit', formSubmitHandler);

openModal.addEventListener('click', ()=>{
  modal.style.display = "block"
})

closeBtn.addEventListener('click', modalCloseHandler)

function modalCloseHandler(event) {
  if (
    (event.target == closeBtn || event.target === save) &&
    modal.style.display == "block"
  ) {
    modal.style.display = "none";
  }
}

// close modal by pressing esc 
// document.addEventListener('keyup', function(e){
// let key = event.key || event.keyCode;

// if (key === 'Escape' || key === 'Esc' || key === 27) {
//    modal.style.display="none"
// }
// })

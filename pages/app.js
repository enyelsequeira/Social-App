// button to open modal
const openModal = document.querySelector('.profile__info-btn')

//close modal
const closeBtn = document.querySelector('.modal__close')

//modal selector
const modal = document.querySelector('.modal')
// selecting form
const form = document.querySelector('.modal__form')

const save = document.querySelector('.modal__save-button');
// Open second modal
const addBtn = document.querySelector('.profile__button-add')
//selecting second modal
const modalAdd = document.querySelector('.modal__card')

addBtn.addEventListener('click', ()=>{
  modalAdd.classList.toggle("show-modal")
})


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


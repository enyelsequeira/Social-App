// button to open modal
const openModal = document.querySelector('.profile__info-btn')

//close modal
const closeBtn = document.querySelector('.modal__close')

//modal selector
const modal = document.querySelector('.modal')
// selecting form
const form = document.querySelector('.modal__form')

let save = document.querySelector('.modal__save-button');

const formSubmitHandler = (e)=>{
  e.preventDefault();
  let nameInput = document.querySelector('.modal__form-name')
  let professionInput = document.querySelector('.modal__form-profession')
  let name = document.querySelector('.profile__name');
  let profession = document.querySelector('.profile__profession')
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;  
}

save.addEventListener('click', () => {
  modal.style.display="none"
});

form.addEventListener('submit', formSubmitHandler);

openModal.addEventListener('click', ()=>{
  modal.style.display = "block"
})

closeBtn.addEventListener('click', ()=>{
  modal.style.display="none"
})

// close modal by pressing esc 
// document.addEventListener('keyup', function(e){
// let key = event.key || event.keyCode;

// if (key === 'Escape' || key === 'Esc' || key === 27) {
//    modal.style.display="none"
// }
// })

// button to open modal
const openModal = document.querySelector('.profile__info-btn')
console.log(openModal)

//modal selector
const modal = document.querySelector('.modal')
console.log(modal)

//close modal
const closeBtn = document.querySelector('.button-close')


openModal.addEventListener('click', ()=>{
  modal.style.display = "block"
})

closeBtn.addEventListener('click', ()=>{
  modal.style.display="none"
})


document.addEventListener('keyup', function(e){
let key = event.key || event.keyCode;

if (key === 'Escape' || key === 'Esc' || key === 27) {
   modal.style.display="none"
}
})

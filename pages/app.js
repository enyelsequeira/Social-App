// button to open modal
const openModal = document.querySelector('.profile__info-btn')

//close modal
const closeBtn = document.querySelector('.modal__close')
//close second modal Card
const closeAddCard = document.querySelector('.modal__card-close');
// adding create button card
const createCard = document.querySelector('.modal__card-create-button')


//modal selector
const modal = document.querySelector('.modal')
// selecting form
const form = document.querySelector('.modal__form')

const save = document.querySelector('.modal__save-button');
// Open second modal
const addBtn = document.querySelector('.profile__button-add')
//selecting second modal
const modalAdd = document.querySelector('.modal__card')
//selecting modal to add cards
const modalCard = document.querySelector('.modal__card')


addBtn.addEventListener('click', ()=>{
  modalAdd.classList.toggle("show-modal")
})

//selecting the trash button
const ul = document.querySelector('.elements__list')

document.querySelectorAll('.elements__trash').forEach(item =>{
  item.addEventListener('click', function(e){
    this.parentElement.remove(e.target)

  })
})



// Adding element to the page



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
// closeBtn.forEach(function(elem) {
//   elem.addEventListener("click", modalCloseHandler)
// });
closeAddCard.addEventListener('click', closeModalCard)



function modalCloseHandler(event) {

  if 
    (event.target == closeBtn || event.target === save)
    modal.classList.toggle("show-modal")    
}
//? closing modalCard is this needed? 
function closeModalCard(event) {
  if(event.target == closeAddCard || event.target === createCard)
  modalCard.classList.toggle("show-modal")

}

//getting the class for background images to insert
const link = document.querySelector('.modal__card-form-link')
console.log(link.value)

//get the title from the form

const placeName = document.querySelector('.modal__card-form-title')
console.log(placeName.value)

// link.innerHTML = 'https://unsplash.com/photos/T41noNW7esg'
  // newElement.innerHTML = `
  //   <li class="elements__item" style="background-image:url(${newBackGround});">
  //     <button class="elements__trash">  </button>
  //     <div class="elements__info">
  //         <h3 class="elements__title">${placeName.value}</h3>
  //         <button class="elements__image-heart">  </button>
  //         <!-- <button class="elements__image-heart" src="./images/heart.png" alt="heart"> -->
  //     </div>
  //   </li>`
  // ;

//creating a new card 
const createNewCard = (e) =>{
  e.preventDefault()
  // newElement = document.createElement('li')
  // let newBackGround = link.value
  // console.log(newElement)
  // newElement.innerHTML = `
  //   <li class="elements__item" style="background-image:url(${newBackGround});">
  //     <button class="elements__trash">  </button>
  //     <div class="elements__info">
  //         <h3 class="elements__title">${placeName.value}</h3>
  //         <button class="elements__image-heart">  </button>
  //     </div>
  //   </li>`
  // ;

  //   ul.appendChild(newElement);

    // document.querySelectorAll('.elements__trash').forEach(item =>{
    //   item.addEventListener('click', function(e){
    //     this.parentElement.remove(e.target)
    
    //   })
    // })

  
  let newElement = document.createElement('li')
  newElement.classList.add('elements__item')
  let newBackGround = link.value
  console.log( 'testt', newBackGround)
  newElement.style.backgroundImage = `url('${newBackGround}')`
  let info = document.createElement('div')
  info.classList.add('elements__info')

  let title = document.createElement('h3')
  title.innerText = placeName.value
  title.classList.add('elements__title')

  let button = document.createElement('button')
  button.classList.add('elements__image-heart')

  let trashBtn = document.createElement('button')
  trashBtn.classList.add('elements__trash')


  info.append(title, button,)

  newElement.append(info, trashBtn)
  
  ul.appendChild(newElement);
  console.log(newElement)
  document.querySelectorAll('.elements__trash').forEach(item =>{
    item.addEventListener('click', function(e){
      this.parentElement.remove(e.target)
  
    })
  })
  
  if(event.target == closeAddCard || event.target === createCard)
  modalCard.classList.toggle("show-modal")
}
createCard.addEventListener('click', createNewCard)
// console.log(createCard)

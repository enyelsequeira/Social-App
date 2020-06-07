// button to open modal
const openModal = document.querySelector('.profile__info-btn')
//close modal
const closeBtn = document.querySelector('.modal__close')
//close second modal Card
const closeAddCard = document.querySelector('.modal__card-close');
// adding create button card
const createCard = document.querySelector('.modal__card-create-button')
console.log(createCard)

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

//selecting heart button
document.querySelectorAll('.elements__image-heart').forEach(item =>{
  item.addEventListener('click', function(e){
    e.target.classList.toggle('elements__image-heart_active')
  } )
})

addBtn.addEventListener('click', ()=>{
  modalAdd.classList.toggle("show-modal")
})

closeAddCard.addEventListener('click', ()=>{
  modalAdd.classList.toggle("show-modal")
})

//selecting the trash button
// document.querySelectorAll('.elements__trash').forEach(item =>{
//   item.addEventListener('click', function(e){
//     this.parentElement.remove(e.target)

//   })
// })


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

// closeAddCard.addEventListener('click', closeModalCard)




function modalCloseHandler(event) {
  if 
    (event.target == closeBtn || event.target === save)
    modal.classList.toggle("show-modal")    
}
//? closing modalCard is this needed? 
// function closeModalCard(event) {
//   if(event.target == closeAddCard || event.target === createCard)
//   modalCard.classList.toggle("show-modal")

// }


//selecting the elements ul
const ul = document.querySelector('.elements__list')

ul.addEventListener('click', function(e){
  e.target.closest('.elements__trash').parentElement.remove()
})

// todo creating a new  card keep working on this
const createNewCard = ( imageValue, titleValue) =>{
  const pictureTemplate = document.querySelector('.elements__template').content;
  pictureTemplate.querySelector('.elements__item').style.backgroundImage = `url('${imageValue}')`;
  pictureTemplate.querySelector('.elements__title').textContent = titleValue

  // pictureTemplate.querySelectorAll('.elements__item').forEach(item =>{
  //   item.style.backgroundImage = `url('${imageValue}')`
  // })

  // pictureTemplate.querySelectorAll('.elements__title').forEach(item =>{
  //   item.textContent =` ${titleValue}`
  //   console.log(item)
  // })

  // pictureTemplate.querySelectorAll('.elements__trash').forEach(item =>{
  //   item.addEventListener('click', function(e){
  //     this.parentElement.remove(e.target)
  
  //   })
  // })

  
  ul.prepend(pictureTemplate);

}
//create card button
createCard.addEventListener('click', function(e){
  e.preventDefault()
  if( e.target === createCard)
  modalCard.classList.toggle("show-modal")
  const title = document.querySelector('.modal__card-form-title');
  const image = document.querySelector('.modal__card-form-link');
  createNewCard(image.value, title.value)
  image.value = "";
  title.value = "";
  

})


// createCard.addEventListener('click', createNewCard)
// console.log(createCard)
//making the button go black

//! old code

// let newElement = document.createElement('li')
//   newElement.classList.add('elements__item')
//   let newBackGround = link.value
//   console.log( 'testt', newBackGround)
//   newElement.style.backgroundImage = `url('${newBackGround}')`
//   let info = document.createElement('div')
//   info.classList.add('elements__info')

//   let title = document.createElement('h3')
//   title.innerText = placeName.value
//   title.classList.add('elements__title')

//   let button = document.createElement('button')
//   button.classList.add('elements__image-heart')
//   console.log(button)

//   let trashBtn = document.createElement('button')
//   trashBtn.classList.add('elements__trash')


//   info.append(title, button,)

//   newElement.append(info, trashBtn)
  
//   ul.appendChild(newElement);
//   console.log(newElement)
//   document.querySelectorAll('.elements__trash').forEach(item =>{
//     item.addEventListener('click', function(e){
//       this.parentElement.remove(e.target)
  
//     })
//   })

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

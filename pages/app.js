// button to open modal information
const openModal = document.querySelector('.profile__info-btn')
//close modal infomation
const closeBtn = document.querySelector('.modal__close')
//close second modal Card
const closeAddCard = document.querySelector('.modal__card-close');
// adding create button card
// const createCard = document.querySelector('.modal__card-create-button')

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
const modalCardBtn = document.querySelector('.modal__card-create-button')
// console.log(modalAdd, modalCardBtn)

// values that need changing
const nameInput = document.querySelector('.modal__form-name')
const professionInput = document.querySelector('.modal__form-profession')
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession')

function toggleModalWindow(modal){
  modal.classList.toggle('show-modal')
}

const formSubmitHandler = (e) =>{
  e.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;  
  toggleModalWindow(modal)
}

// save.addEventListener('click', modalCloseHandler );

form.addEventListener('submit', formSubmitHandler);
openModal.addEventListener('click', ()=>{
  toggleModalWindow(modal)
});
closeBtn.addEventListener('click', ()=>{
  toggleModalWindow(modal)

})

//add card button modal
addBtn.addEventListener('click', ()=>{
  toggleModalWindow(modalAdd)
})
closeAddCard.addEventListener('click', ()=>{
  toggleModalWindow(modalAdd)
})

//image modal close
const imageClose = document.querySelector('.figure__exit');

imageClose.addEventListener('click', ()=>{
  toggleModalWindow(modalImageView)
} )

const initialCards = [
  {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
      name: "Vanois National Park",
      link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

//modalImage
const modalImageView = document.querySelector('.figure')
console.log(modalImageView)
//image
let image = document.querySelector('.figure__image')
let caption = document.querySelector('.figure__caption')


const cardTemplate = document.querySelector('.elements__template').content.querySelector('.elements__item');
const createCard = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.elements__title')
  const cardImage = cardElement.querySelector('.elements__image')
  const cardLikeButton = cardElement.querySelector('.elements__image-heart')
  const cardRemoveButton = cardElement.querySelector('.elements__trash')
  cardTitle.textContent = data.name; 
  cardImage.style.backgroundImage = `url(${data.link})`;
  

 

  cardImage.addEventListener('click', ()=>{
    image.src = `${data.link}`;
  caption.textContent = data.name
  console.log(image)
  toggleModalWindow(modalImageView)
  })
  cardLikeButton.addEventListener('click', ()=>{
    cardLikeButton.classList.toggle('elements__image-heart_active')
  })
  cardRemoveButton.addEventListener('click', ()=>{
    cardRemoveButton.parentElement.remove()
  })
  
  return cardElement
}

const ul = document.querySelector('.elements__list')
const renderCard = (data) =>{
  ul.prepend(createCard(data))
}
initialCards.forEach((data) =>{
  renderCard(data)
})

const newCard = (e)=>{
e.preventDefault()
const imageName = document.querySelector('.modal__card-form-title');
const cardElement = cardTemplate.cloneNode(true);
let cardTitle = cardElement.querySelector('.elements__title')
let cardImage = cardElement.querySelector('.elements__image')
cardTitle.textContent = imageName.value;
console.log(cardTitle)
const imageLink = document.querySelector('.modal__card-form-link')
cardImage.style.backgroundImage = `url(${imageLink.value})`;
console.log(cardElement)
ul.prepend(cardElement)
toggleModalWindow(modalAdd)
const cardLikeButton = cardElement.querySelector('.elements__image-heart')
const cardRemoveButton = cardElement.querySelector('.elements__trash')


cardImage.addEventListener('click', (e)=>{
  image.src = imageLink.value;
caption.textContent =  imageName.value
console.log(image)
console.log(caption)
toggleModalWindow(modalImageView)
})
cardLikeButton.addEventListener('click', ()=>{
  cardLikeButton.classList.toggle('elements__image-heart_active')
})
cardRemoveButton.addEventListener('click', ()=>{
  cardRemoveButton.parentElement.remove()
})

}

modalCardBtn.addEventListener('click', newCard)



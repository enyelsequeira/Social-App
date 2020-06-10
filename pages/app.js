// button to open modal information
const openModal = document.querySelector('.profile__info-btn');
//close modal infomation
const closeBtn = document.querySelector('.modal__close');
//close second modal Card
const closeAddCard = document.querySelector('.modal__card-close');

//modal selector
const modalEdit = document.querySelector('.modal');
// selecting form
const form = document.querySelector('.modal__form')

// Open second modal
const addBtn = document.querySelector('.profile__button-add');
//selecting second modal
const modalAdd = document.querySelector('.modal__card');
//selecting modal to add cards
const modalCardBtn = document.querySelector('.modal__form-create');


// values that need changing
const nameInput = document.querySelector('.modal__form-name');
const professionInput = document.querySelector('.modal__form-profession');
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');

//function to toggle the modals
function toggleModalWindow(modal){
  modal.classList.toggle('show-modal')
}

//functions for the submission to prevent the default
const formSubmitHandler = (e) =>{
  e.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;  
  toggleModalWindow(modal)
}

//first form
form.addEventListener('submit', formSubmitHandler);
openModal.addEventListener('click', ()=>{
  toggleModalWindow(modalEdit)
});
closeBtn.addEventListener('click', ()=>{
  toggleModalWindow(modalEdit)
})


//add card button modal
addBtn.addEventListener('click', ()=>{
  toggleModalWindow(modalAdd)
})
closeAddCard.addEventListener('click', ()=>{
  toggleModalWindow(modalAdd)
})


//image modal close
const imageClose = document.querySelector('.modal__figure-exit');
//modalImage
const modalImageView = document.querySelector('.figure')
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


//image and caption
const image = document.querySelector('.modal__figure-image')
const caption = document.querySelector('.modal__figure-caption')


const cardTemplate = document.querySelector('.elements__template').content.querySelector('.elements__item');
//creating cards from the giving array
const createCard = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.elements__title')
  const cardImage = cardElement.querySelector('.elements__image')
  const cardLikeButton = cardElement.querySelector('.elements__image-heart')
  const cardRemoveButton = cardElement.querySelector('.elements__trash')
  cardTitle.textContent = data.name; 
  cardImage.style.backgroundImage = `url(${data.link})`;
  
  // this opens the image modal Window to see the image bigger
  cardImage.addEventListener('click', ()=>{
    image.src = `${data.link}`;
    image.alt = data.name
  caption.textContent = data.name
  toggleModalWindow(modalImageView)
  })

  //deleting and like buttons
  cardLikeButton.addEventListener('click', ()=>{
    cardLikeButton.classList.toggle('elements__image-heart_active')
  })
  cardRemoveButton.addEventListener('click', ()=>{
    cardRemoveButton.parentElement.remove()
  })
  
  //we need to return the elements
  return cardElement
}

const ul = document.querySelector('.elements__list')
//this render the cards
const renderCard = (data) =>{
  ul.prepend(createCard(data))
}
//for each data we do this to render cards
initialCards.forEach((data) =>{
  renderCard(data)
})

//creating new Cards
const newCard = (e)=>{
e.preventDefault()
const imageName = document.querySelector('.modal__form-title');
const cardElement = cardTemplate.cloneNode(true);
let cardTitle = cardElement.querySelector('.elements__title')
let cardImage = cardElement.querySelector('.elements__image')
cardTitle.textContent = imageName.value;
const imageLink = document.querySelector('.modal__form-link')
cardImage.style.backgroundImage = `url(${imageLink.value})`;
ul.prepend(cardElement)
toggleModalWindow(modalAdd)
const cardLikeButton = cardElement.querySelector('.elements__image-heart')
const cardRemoveButton = cardElement.querySelector('.elements__trash')

cardImage.addEventListener('click', (e)=>{
  image.src = imageLink.value;
  image.alt = imageName.value
caption.textContent =  imageName.value
console.log(image.alt)
toggleModalWindow(modalImageView)
})
cardLikeButton.addEventListener('click', ()=>{
  cardLikeButton.classList.toggle('elements__image-heart_active')
})
cardRemoveButton.addEventListener('click', ()=>{
  cardRemoveButton.parentElement.remove()
})
}
//save button to add new card 
modalCardBtn.addEventListener('click', newCard)



// button to open modal information
const openModal = document.querySelector('.profile__info-btn');
//close modal infomation
const closeBtn = document.querySelector('.modal__close');
//close second modal Card
const closeAddCard = document.querySelector('.modal__card-close');

//modal selector
const modalEdit = document.querySelector('.modal');
// selecting form
const form = document.querySelector('.modal__form');

// Open second modal
const addBtn = document.querySelector('.profile__button-add');
//selecting second modal
const modalAdd = document.querySelector('.modal__card');
//selecting modal to add cards
const modalCardBtn = document.querySelector('.modal__form-create');


// values that need changing first modal
const nameInput = document.querySelector('.modal__form-name');
const professionInput = document.querySelector('.modal__form-profession');
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');

const errorForm = document.querySelector('.error')
 
//function to toggle the modals
function toggleModalWindow(modal){
  modal.classList.toggle('modal_active')  
 
}

function closeOverlay(e){
  toggleModalWindow(e.target.closest(".modal"))
  e.target.removeEventListener("click", closeOverlay)
}

function escKey(e){
  if(e.keyCode === 27){
    toggleModalWindow(document.querySelector('.modal_active'));
  }
  e.target.removeEventListener('keyup', escKey)
};

const closingModal =() =>{
  const modals = Array.from(document.querySelectorAll('.modal'));

  modals.forEach((modal)=>{
    modal.addEventListener("click", closeOverlay)
  });

  modals.forEach(()=>{
    document.addEventListener('keyup', escKey)
  })
}
closingModal()



//functions for the submission to prevent the default
const formSubmitHandler = (e) =>{
  e.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;  
  toggleModalWindow(modalEdit);
};

//first form
form.addEventListener('submit', formSubmitHandler);
openModal.addEventListener('click', ()=>{
  toggleModalWindow(modalEdit);
});
closeBtn.addEventListener('click', ()=>{
  toggleModalWindow(modalEdit);
});


//add card button modal
addBtn.addEventListener('click', ()=>{
  toggleModalWindow(modalAdd);
});
closeAddCard.addEventListener('click', ()=>{
  toggleModalWindow(modalAdd);
});


//image modal close
const imageClose = document.querySelector('.modal__figure-exit');
//modalImage
const modalImageView = document.querySelector('.figure');
imageClose.addEventListener('click', ()=>{
  toggleModalWindow(modalImageView);
} );


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
const image = document.querySelector('.modal__figure-image');
const caption = document.querySelector('.modal__figure-caption');


const cardTemplate = document.querySelector('.elements__template').content.querySelector('.elements__item');
//creating cards from the giving array
const createCard = (placeTitle, placeLink) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.elements__title');
  const cardImage = cardElement.querySelector('.elements__image');
  const cardLikeButton = cardElement.querySelector('.elements__image-heart');
  const cardRemoveButton = cardElement.querySelector('.elements__trash');
  cardTitle.textContent = placeTitle; 
  cardImage.style.backgroundImage = `url(${placeLink})`;
  // this opens the image modal Window to see the image bigger
  cardImage.addEventListener('click', ()=>{
    image.src = placeLink;
    image.alt = placeTitle;
  caption.textContent = placeTitle;
  toggleModalWindow(modalImageView);
  });
  //deleting and like buttons
  cardLikeButton.addEventListener('click', ()=>{
    cardLikeButton.classList.toggle('elements__image-heart_active');
  });
  cardRemoveButton.addEventListener('click', ()=>{
    cardRemoveButton.parentElement.remove();
  });
  //we need to return the elements
  return cardElement;
};

const ul = document.querySelector('.elements__list')
//this render the cards
const renderCard = (placeTitle, placeLink) =>{
  ul.prepend(createCard(placeTitle, placeLink));
};
//for each data we do this to render cards
initialCards.forEach((card) =>{
  renderCard(card.name, card.link);
});

const placeTitle = document.querySelector('.modal__form-title');
const placeLink = document.querySelector('.modal__form-link');
function newCard(e){
  e.preventDefault();
  renderCard(placeTitle.value, placeLink.value);
  toggleModalWindow(modalAdd);
}

modalCardBtn.addEventListener('click', newCard);


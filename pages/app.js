import FormValidator from './FormValidator.js';
import Card from './Card.js';

const defaultConfig = {
  // formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-button',
  inactiveButtonClass: 'modal__save-disabled',
  inputErrorClass: 'modal__form-error',
  errorClass: 'modal__form-error_visible',
};
const modalEdit = document.querySelector('.modal');
const modalAdd = document.querySelector('.modal__card');

const addCardForm = modalAdd.querySelector('.modal__form');
const editProfileForm = modalEdit.querySelector('.modal__form');

const editProfileValidation = new FormValidator(defaultConfig, editProfileForm);
const addCardValidation = new FormValidator(defaultConfig, addCardForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

const initialCards = [
  {
    name: 'Yosemite Valley',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
  },
  {
    name: 'Lake Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
  },
  {
    name: 'Bald Mountains',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
  },
  {
    name: 'Vanois National Park',
    link: 'https://code.s3.yandex.net/web-code/vanois.jpg',
  },
  {
    name: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg',
  },
];

// function to toggle the modals
function toggleModalWindow(modal) {
  modal.classList.toggle('modal_active');
}
// button to open modal information
const openModal = document.querySelector('.profile__info-btn');
// close modal infomation
const closeBtn = document.querySelector('.modal__close');
// close second modal Card
const closeAddCard = document.querySelector('.modal__card-close');

// modal selector

// selecting form
const form = document.querySelector('.modal__form');
// Open second modal
const addBtn = document.querySelector('.profile__button-add');
// selecting second modal
// selecting modal to add cards
const modalCardBtn = document.querySelector('.modal__form-create');

// values that need changing first modal
const nameInput = document.querySelector('.modal__form-name');
const professionInput = document.querySelector('.modal__form-profession');
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');

// functions for the submission to prevent the default
const formSubmitHandler = e => {
  e.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;
  toggleModalWindow(modalEdit);
};

// first form
form.addEventListener('submit', formSubmitHandler);
openModal.addEventListener('click', () => {
  toggleModalWindow(modalEdit);
});
closeBtn.addEventListener('click', () => {
  toggleModalWindow(modalEdit);
});

// add card button modal
addBtn.addEventListener('click', () => {
  toggleModalWindow(modalAdd);
});
closeAddCard.addEventListener('click', () => {
  toggleModalWindow(modalAdd);
});

// image modal close
const imageClose = document.querySelector('.modal__figure-exit');
// modalImage
const modalImageView = document.querySelector('.figure');
imageClose.addEventListener('click', () => {
  toggleModalWindow(modalImageView);
});

const ul = document.querySelector('.elements__list');
// this render the cards
const cardTemplateselector = '.elements__template';

const renderCard = data => {
  const card = new Card(data, cardTemplateselector);

  ul.prepend(card.generateCard());
};
// for each data we do this to render cards
initialCards.forEach(data => {
  renderCard(data);
});

const placeTitle = document.querySelector('.modal__form-title');
const placeLink = document.querySelector('.modal__form-link');
function newCard(e) {
  e.preventDefault();
  renderCard({ name: placeTitle.value, link: placeLink.value });
  toggleModalWindow(modalAdd);
}
modalCardBtn.addEventListener('click', newCard);

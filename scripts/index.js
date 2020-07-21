import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import { cardListSelector, initialCards } from '../utils/constants.js';
import PopUpWithImage from './PopupWithImage.js';
import Popup from './Popup.js';

const defaultConfig = {
  // formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-button',
  inactiveButtonClass: 'modal__save-disabled',
  inputErrorClass: 'modal__form-error',
  errorClass: 'modal__form-error_visible',
};
// creating a image modal?
const modalWithImage = new PopUpWithImage('.figure');

const editPopup = new Popup('.modal');
const addCardPopup = new Popup('.modal__card');

const modalEdit = document.querySelector('.modal');
const modalAdd = document.querySelector('.modal__card');

const addCardForm = modalAdd.querySelector('.modal__form');
const editProfileForm = modalEdit.querySelector('.modal__form');

const editProfileValidation = new FormValidator(defaultConfig, editProfileForm);
const addCardValidation = new FormValidator(defaultConfig, addCardForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

const handleCardClick = element => {
  console.log(element);
  modalWithImage.open(element);
};
// adding initial card to the DOM
const cardList = new Section(
  {
    data: initialCards,
    renderer: ({ name, link }) => {
      // console.log(data);
      const card = new Card(name, link, '.elements__template', handleCardClick);
      const cardElement = card.generateCard();
      cardList.setItem(cardElement);
    },
  },
  cardListSelector
);
cardList.renderItems();

const newPlaceSubmit = ({ name, link }) => {
  const place = new Card(name, link, '.elements__template', handleCardClick);
  cardList.addItem(place.generateCard());
};

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

// for each data we do this to render cards

const placeTitle = document.querySelector('.modal__form-title');
const placeLink = document.querySelector('.modal__form-link');
function newCard(e) {
  e.preventDefault();
  renderCard({ name: placeTitle.value, link: placeLink.value });
  toggleModalWindow(modalAdd);
}
modalCardBtn.addEventListener('click', newPlaceSubmit);

import FormValidator from './scripts/FormValidator.js';
import Card from './scripts/Card.js';
import Section from './scripts/Section.js';
import {
  cardListSelector,
  initialCards,
  nameInput,
  professionInput,
  editBtn,
  imageInput,
  titleInput,
  addBtn,
} from './utils/constants.js';
import PopUpWithImage from './scripts/PopupWithImage.js';
import PopupwithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';
import PopupWithForm from './scripts/PopupWithForm.js';

import './pages/index.css';

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
// console.log(modalWithImage);

const modalEdit = document.querySelector('.modal');
const modalAdd = document.querySelector('.modal__card');

const addCardForm = modalAdd.querySelector('.modal__form');
const editProfileForm = modalEdit.querySelector('.modal__form');

const editProfileValidation = new FormValidator(defaultConfig, editProfileForm);
const addCardValidation = new FormValidator(defaultConfig, addCardForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

const handleCardClick = data => {
  modalWithImage.open(data);
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

const profileForm = new PopupwithForm({
  popupSelector: '.modal__edit',
  handleSubmitForm: () => {
    const profileInfo = new UserInfo(nameInput.value, professionInput.value);
    profileInfo.setUserInfo();
    profileForm.close();
  },
});
const handleNewPlaceSubmit = () => {
  const inputName = document.querySelector('#card-title').value;
  const inputValue = document.querySelector('#card-url').value;
  const place = new Card(
    inputName,
    inputValue,
    '.elements__template',
    handleCardClick
  );
  const newCard = place.generateCard();
  cardList.addItem(newCard);
};
const imageForm = new PopupWithForm({
  popupSelector: '.modal__card',
  handleSubmitForm: () => {
    handleNewPlaceSubmit();
  },
});
// addBtn.addEventListener('click', () =>
//   imageForm.open();
// );
editBtn.addEventListener('click', () => profileForm.open());
addBtn.addEventListener('click', () => imageForm.open());

// const someCard = new Card(
//   'somename',
//   'http://somelinke',
//   elTemplate,
//   handleCardClick
// );

// // console.log(someCard.getName());

// window.onload = () => {
//   console.log(newCard.getName());
// };

// const newCard = new Card(
//   {
//     data: { name: titleInput.value, link: imageInput.value },

//     handleCardClick: data => {
//       console.log(data);
//       const imagePopup = new PopUpWithImage('.figure');
//       imagePopup.open({ data });
//     },
//   },
//   '.elements__template'
// );
// cardList.addItem(newCard.generateCard());
// imageForm.close();
// console.log(1);

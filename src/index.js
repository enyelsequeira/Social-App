import FormValidator from './scripts/FormValidator.js';
import Card from './scripts/Card.js';
import Section from './scripts/Section.js';
import {
  cardListSelector,
  initialCards,
  nameInput,
  professionInput,
  editBtn,
  addBtn,
  cardTitle,
  cardLink,
} from './utils/constants.js';
import PopUpWithImage from './scripts/PopupWithImage.js';
import UserInfo from './scripts/UserInfo.js';

import './pages/index.css';
import PopupWithForm from './scripts/PopupWithForm.js';
import Api from './scripts/Api.js';

const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-3',
  headers: {
    authorization: '9a4eb9c4-eb35-4130-9822-f1a4ffd479bc',
    'Content-Type': 'application/json',
  },
});

api.getCardList().then(res => {
  // console.log(res);
  const cardList = new Section(
    {
      data: res,
      renderer: ({ name, link }) => {
        // console.log(data);
        const card = new Card(
          name,
          link,
          '.elements__template',
          handleCardClick
        );
        const cardElement = card.generateCard();
        cardList.setItem(cardElement);
      },
    },
    cardListSelector
  );
  cardList.renderItems();
});

const profileInfo = new UserInfo(nameInput, professionInput);
api.getUserInfo().then(({ name, about }) => {
  // console.log(name, about);
  profileInfo.setUserInfo({ userName: name, userDescription: about });
});

const handlingProfileEdit = () => {
  profileInfo.setUserInfo();
};

const profileForm = new PopupWithForm({
  popupSelector: '.modal__edit',
  handleSubmitForm: () => {
    handlingProfileEdit();
    profileForm.close();
  },
});

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

const handleNewPlaceSubmit = () => {
  const inputName = cardTitle.value;
  const inputValue = cardLink.value;
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

editBtn.addEventListener('click', () => profileForm.open());
addBtn.addEventListener('click', () => imageForm.open());

import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import {
  cardListSelector,
  initialCards,
  editProfile,
  nameInput,
  professionInput,
  editBtn,
  imageInput,
  titleInput,
  addBtn,
} from '../utils/constants.js';
import PopUpWithImage from './PopupWithImage.js';
import PopupwithForm from './PopupWithForm.js';
import Popup from './Popup.js';
import UserInfo from './UserInfo.js';
import PopupWithForm from './PopupWithForm.js';

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

// const addNewPlaceSubmit = ({ name, link }) => {
//   const newPlace = new Card(name, link, 'elements__template', handleCardClick);
//   cardList.addItem(newPlace.generateCard());
// };

// const galleryForm = new PopupWithForm('.modal__card', addNewPlaceSubmit);

const profileForm = new PopupwithForm({
  popupSelector: '.modal__edit',
  handleSubmitForm: () => {
    const profileInfo = new UserInfo(nameInput.value, professionInput.value);
    profileInfo.setUserInfo();
    console.log(profileInfo);
    profileForm.close();
  },
});

const imageForm = new PopupWithForm({
  popupSelector: '.modal__card',
  handleSubmitForm: () => {
    const newCard = new Card(
      {
        data: { name: titleInput.value, link: imageInput.value },
        handleCardClick: data => {
          const imagePopup = new PopUpWithImage('.figure');
          imagePopup.open({ data });
        },
      },
      '.elements__template'
    );
    cardList.addItem(newCard.generateCard());
    addCardValidation.enableValidation();
    imageForm.close();
  },
});
// imageForm.setEventListeners();

addBtn.addEventListener('click', () => {
  imageForm.open();
});
editBtn.addEventListener('click', () => profileForm.open());

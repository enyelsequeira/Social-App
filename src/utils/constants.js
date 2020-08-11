/* eslint-disable import/prefer-default-export */
export const initialCards = [
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

export const cardListSelector = '.elements__list';

export const editProfile = document.querySelector('.modal__edit');
// console.log(editProfile);

// input for the name and job

export const nameInput = document.querySelector('.modal__form-name');
export const professionInput = document.querySelector(
  '.modal__form-profession'
);

export const editBtn = document.querySelector('.profile__info-btn');

// image form
export const imageInput = document.querySelector('.modal__form-link');
export const titleInput = document.querySelector('.modal__form-title');

// add button
export const addBtn = document.querySelector('.profile__button-add');

// image

export const cardTitle = document.querySelector('#card-title');
export const cardLink = document.querySelector('#card-url');

// modal form

export const formName = document.querySelector('.modal__form-name');
export const formProfession = document.querySelector('.modal__form-profession');

// updating variable
export const nameUpdate = document.querySelector('.profile__name');
export const professionUpdate = document.querySelector('.profile__profession');
// image profile
export const profileImage = document.querySelector('.profile__avatar-overlay');

export const trashBtn = document.querySelector('.elements__trash');

export const avatarImg = document.querySelector('.modal__form-avatar');
// console.log(avatarImg);
export const initialAvatar = document.querySelector('.profile__avatar-image');
export const myId = '439c0a82223848fceaf17d04';
export const saveButton = document.querySelector('.modal__save');

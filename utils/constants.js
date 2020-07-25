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

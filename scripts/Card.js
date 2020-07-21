function toggleModalWindow(modal) {
  modal.classList.toggle('modal_active');
}
const modalImageView = document.querySelector('.figure');
const handlingClose = e => {
  toggleModalWindow(e.target);
};

const escKey = e => {
  const key = 27;
  if (e.keyCode === key) {
    toggleModalWindow(document.querySelector('.modal_active'));
    e.target.removeEventListener('keydown', escKey);
  }
};
const toggleAlt = () => {
  const modalList = Array.from(document.querySelectorAll('.modal'));
  modalList.forEach(modal => {
    modal.addEventListener('click', handlingClose);
  });

  modalList.forEach(() => {
    document.addEventListener('keydown', escKey);
  });
};

toggleAlt();

class Card {
  constructor(name, link, cardSelector, handleCardClick) {
    this._cardElement = cardSelector;
    // getting the entire element below
    this._title = name;
    this._image = link;

    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardElement)
      .content.querySelector('.elements__item')
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    const likeButton = this._card.querySelector('.elements__image-heart');
    const deleteButton = this._card.querySelector('.elements__trash');
    this._card
      .querySelector('.elements__image')
      .addEventListener('click', () => {
        this._handleCardClick();
      });

    // console.log(cardImage);
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('elements__image-heart_active');
    });
    deleteButton.addEventListener('click', () => {
      deleteButton.parentElement.remove();
    });

    // cardImage.addEventListener('click', () => {
    //   const cardCaption = document.querySelector('.modal__figure-caption');
    //   const cardImg = document.querySelector('.modal__figure-image');
    //   cardCaption.textContent = this._title;
    //   cardImg.src = this._image;
    //   toggleModalWindow(modalImageView);
    // });
  }

  generateCard() {
    const element = this._getTemplate();

    this._card = element;
    this._card.querySelector(
      '.elements__image'
    ).style.backgroundImage = `url(${this._image})`;
    this._card.querySelector('.elements__title').textContent = this._title;
    this._card.querySelector('.elements__image').alt = this._title;
    this._setEventListeners();

    return this._card;
  }
}
export default Card;

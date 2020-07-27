class Card {
  constructor(name, link, cardSelector, handleCardClick) {
    this._cardElement = cardSelector;
    // getting the entire element below
    this._title = name;
    this._image = link;
    // console.log(this._title);

    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardElement)
      .content.querySelector('.elements__item')
      .cloneNode(true);
    return cardElement;
  }

  getName() {
    return this._title;
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

  _setEventListeners() {
    const likeButton = this._card.querySelector('.elements__image-heart');
    const deleteButton = this._card.querySelector('.elements__trash');
    this._card
      .querySelector('.elements__image')
      .addEventListener('click', () => {
        this._handleCardClick({ name: this._title, link: this._image });
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
}
export default Card;

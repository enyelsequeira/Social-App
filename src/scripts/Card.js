class Card {
  constructor(
    name,
    link,
    id,
    owner,
    cardSelector,
    handleCardClick,
    handleDeleteClick,
    test
  ) {
    this._cardElement = cardSelector;
    // console.log(this._cardElement);
    // getting the entire element below
    this._title = name;
    this._image = link;
    this._id = id;
    this._owner = owner;
    // console.log(this._id);
    this._handleDeleteClick = handleDeleteClick;

    this._handleCardClick = handleCardClick;
    this._test = test;
  }

  id() {
    // console.log(this._id);
    return this._id;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardElement)
      .content.querySelector('.elements__item')
      .cloneNode(true);
    return cardElement;
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
    // console.log(deleteButton);
    const myId = '439c0a82223848fceaf17d04';

    // console.log(this._owner._id);

    if (this._owner._id !== myId) {
      deleteButton.style.display = 'none';
    }
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
      // console.log('2');
      // this._test();
      this._handleDeleteClick(this.id());

      // deleteButton.parentElement.remove();
    });
  }
}
export default Card;

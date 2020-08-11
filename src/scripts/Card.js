class Card {
  constructor(
    name,
    link,
    id,
    owner,
    likes,
    cardSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    handleLikeIcon
  ) {
    this._cardElement = cardSelector;
    // getting the entire element below
    this._title = name;
    this._image = link;
    this._id = id;
    this._likes = likes;
    // console.log(this._likes);
    this._owner = owner;
    this._handleDeleteClick = handleDeleteClick;

    this._handleCardClick = handleCardClick;
    this._handleLikeIcon = handleLikeIcon;
    // console.log(this._handleLikeClick);
    this._handleLikeClick = handleLikeClick;
  }

  id() {
    // console.log(this._id);
    return this._id;
  }

  _cardLikeBtn() {
    return this._card.querySelector('.elements__image-heart');
  }

  _cardLikeCount() {
    return this._card.querySelector('.elements__like-count');
  }

  wasLiked() {
    return this._cardLikeBtn().classList.contains(
      'elements__image-heart_active'
    );
  }

  like(countLike) {
    this._cardLikeBtn().classList.add('elements__image-heart_active');
    this._cardLikeCount().textContent = countLike;
  }

  notliked(countLike) {
    this._cardLikeBtn().classList.remove('elements__image-heart_active');
    this._cardLikeCount().textContent = countLike;
  }

  likeLoading() {
    this._cardLikeBtn.classList.add('elements__image-heart_active');
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
    if (typeof this._likes !== 'undefined') {
      this._cardLikeCount().textContent = this._likes.length;
    }

    return this._card;
  }

  removeCard() {
    console.log(4444444);
    this._card.remove();
    this._card = null;
  }

  _setEventListeners() {
    const likeButton = this._card.querySelector('.elements__image-heart');
    const deleteButton = this._card.querySelector('.elements__trash');
    const myId = '439c0a82223848fceaf17d04';
    if (this._owner._id !== myId) {
      deleteButton.style.display = 'none';
    }
    this._card
      .querySelector('.elements__image')
      .addEventListener('click', () => {
        this._handleCardClick({ name: this._title, link: this._image });
      });

    // likeButton.addEventListener('click', () => {
    //   likeButton.classList.toggle('elements__image-heart_active');
    // });

    likeButton.addEventListener('click', () => {
      this._handleLikeClick(this._id);
    });
    deleteButton.addEventListener('click', () => {
      this._handleDeleteClick(this.id());

      // deleteButton.parentElement.remove();
    });
  }
}
export default Card;

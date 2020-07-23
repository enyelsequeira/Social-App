const ESCKeyCode = 27;
export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    // console.log(this._popupElement);
  }

  open() {
    this.setEventListeners();
    this._popupElement.classList.toggle('modal_active');
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.toggle('modal_active');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.which === ESCKeyCode) {
      this.close();
    }
  }

  setEventListeners() {
    // console.log(this._popupElement.querySelector('.modal__close'));
    this._popupElement
      .querySelector('.modal__close')
      .addEventListener('click', e => {
        this.close();
      });
  }
}

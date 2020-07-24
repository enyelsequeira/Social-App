import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    console.log(
      this._popupElement
        .querySelector('.modal__form')
        .querySelectorAll('.modal__input')
    );
  }

  _getInputValues() {
    this.inputValues = Array.from(
      this._popupElement
        .querySelector('.modal__form')
        .querySelectorAll('.modal__input')
    );
    return this.inputValues;
  }

  open() {
    super.open();
    this.setEventListeners();
  }

  close() {
    this.setEventListeners();
    super.close();
  }

  setEventListeners() {
    this._popupElement
      .querySelector('.modal__form')
      .addEventListener('submit', e => {
        e.preventDefault();
        this._handleSubmitForm(this._getInputValues());
      });
    super.setEventListeners();
  }
}
export default PopupWithForm;

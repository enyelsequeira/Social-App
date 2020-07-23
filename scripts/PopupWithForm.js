import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmitForm }) {
    super(popupSelector);
    // console.log(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
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
    this.setEventListeners();
    super.open();
  }

  close() {
    this.setEventListeners();
    super.close();
  }

  setEventListeners() {
    // console.log(this._popupElement);
    this._popupElement
      .querySelector('.modal__form')
      .addEventListener('submit', e => {
        e.preventDefault();
        this.handleSubmitForm();
      });
  }
}
export default PopupWithForm;

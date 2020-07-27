import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    // console.log(this._popupElement.querySelector('.modal__form'));
    this._form = this._popupElement.querySelector('.modal__form');
  }

  _getInputValues() {
    const inputValues = Array.from(
      this._form.querySelectorAll('.modal__input')
    );
    this._formValues = {};
    inputValues.forEach(input => (this.formValues[input.name] = input.value));
    return this._formValues;
  }

  setEventListeners() {
    this._popupElement
      .querySelector('.modal__form')
      .addEventListener('submit', evt => {
        evt.preventDefault();
        this._handleSubmitForm();
        this.close();
      });
    super.setEventListeners();
  }
}
export default PopupWithForm;

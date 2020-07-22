import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    console.log(handleFormSubmit);
    console.log(popupSelector);
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupSelector = popupSelector;
  }

  _getInputValues() {
    console.log(this._popupElement.querySelector('.modal__form-name '));
    this._popupElement.querySelector('.modal__form-name ');
  }

  setEventListeners() {}

  open() {}
}

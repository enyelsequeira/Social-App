import Popup from "./Popup.js";

export default class PopUpWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    console.log(popupSelector);
  }

  open({ link, caption }) {
    this._popupElement.querySelector('.modal__figure-image').src = link;
    this._popupElement.querySelector(
      '.modal__figure-caption'
    ).textContent = caption;
  }
}

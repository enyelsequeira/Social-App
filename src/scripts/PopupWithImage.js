import Popup from "./Popup.js";

export default class PopUpWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // console.log(popupSelector);
  }

  open({ name, link }) {
    // console.log({ name, link });
    // console.log(link, caption);
    // console.log(this._popupElement);
    // console.log(this._popupElement.querySelector('.modal__figure-image'));
    this._popupElement.querySelector('.modal__figure-image').src = link;
    this._popupElement.querySelector(
      '.modal__figure-caption'
    ).textContent = name;
    super.open();
  }
}

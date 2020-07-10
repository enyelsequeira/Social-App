class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
    // console.log(this._formElement);
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    // console.log(this._buttonElement);
    this._inputList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
  }

  // look careful at this code
  _showErrorMessage(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideErrorMessage(input) {
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity() {
    this._inputList.forEach(inputElement => {
      if (!inputElement.validity.valid) {
        // console.log(inputElement);
        this._showErrorMessage(inputElement, inputElement.validationMessage);
      } else {
        this._hideErrorMessage(inputElement, inputElement.validationMessage);
      }
    });
  }

  _hasInvalidInput() {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );

    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;

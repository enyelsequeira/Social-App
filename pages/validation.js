function showErrorMessage(input, form,{errorClass, inputErrorClass,}){
    const error = document.querySelector("#" + input.id + '-error')
    error.textContent = input.validationMessage;

    error.classList.add(errorClass)
    // console.log(errorClass, error)
    input.classList.add(inputErrorClass)
}

function hideErrorMessage(input, form,{errorClass, inputErrorClass, ...rest}){
    const error = document.querySelector("#" + input.id + '-error')
    error.classList.remove(errorClass)
    input.classList.remove(inputErrorClass)
    error.textContent = '';

}


function checkInputValidity(input, form, rest){
    if(input.validity.valid){
        hideErrorMessage(input, form, rest)
    }else{
       showErrorMessage(input, form, rest)
    }

}

function toggleButtonsState(inputs, button, {inactiveButtonClass, ...rest}){
    const isValid = inputs.every((input) => input.validity.valid)

    if(isValid){
        button.classList.remove(inactiveButtonClass)
        button.setAttribute("disabled", false)
    }else{
        button.classList.add(inactiveButtonClass)
        button.setAttribute("disabled", true)
    }

}
// enabling validation by calling enableValidation()
// pass all the settings on call
function enableValidation({formSelector, inputSelector, submitButtonSelector, ...rest}){
    const forms = [...document.querySelectorAll(formSelector)]
    // console.log(forms)
    forms.forEach((form) =>{
        form.addEventListener('submit', ((e) =>{
            e.preventDefault();
        }));
        const inputs = [...form.querySelectorAll(inputSelector)]
        const button = form.querySelector(submitButtonSelector);

        inputs.forEach((input) =>{
            input.addEventListener('input', ()=>{
                checkInputValidity(input, form, rest);
                toggleButtonsState(inputs, button, rest);
            })
        })

    })
}

enableValidation({
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save-button",
    inactiveButtonClass: "modal__save-disabled",
    inputErrorClass: "modal__form-error",
    errorClass: "modal__form-error_visible"
  }); 
import FormValidator from './scripts/FormValidator.js';
import Card from './scripts/Card.js';
import Section from './scripts/Section.js';
import {
  cardListSelector,
  initialCards,
  nameInput,
  professionInput,
  editBtn,
  addBtn,
  cardTitle,
  cardLink,
  nameUpdate,
  professionUpdate,
  formName,
  formProfession,
  profileImage,
  trashBtn,
  avatarImg,
  initialAvatar,
} from './utils/constants.js';
import PopUpWithImage from './scripts/PopupWithImage.js';
import UserInfo from './scripts/UserInfo.js';

import './pages/index.css';
import PopupWithForm from './scripts/PopupWithForm.js';
import Api from './scripts/Api.js';

const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-3',
  headers: {
    authorization: '9a4eb9c4-eb35-4130-9822-f1a4ffd479bc',
    'Content-Type': 'application/json',
  },
});

const handleDeleteClick = cardId => {
  return api.removeCard(cardId);
};
const permanentDelete = new PopupWithForm({
  popupSelector: '.modal__deleteimage',
  handleSubmitForm: () => {
    handleDeleteClick();
    permanentDelete.close();
  },
});

api.getCardList().then(res => {
  // console.log(res);
  const cardList = new Section(
    {
      data: res,
      renderer: ({ name, link, _id, owner, likes }) => {
        // console.log(likes.length);
        // console.log(_id);
        const card = new Card(
          name,
          link,
          _id,
          owner,
          likes,
          '.elements__template',
          handleCardClick,
          id => {
            permanentDelete.open();
            permanentDelete.setSubmitAction(() => {
              console.log('id', id);
              console.log('before the function');
              handleDeleteClick(id).then(() => {
                // console.log(id);
                // console.log(results);
                card.removeCard();
              });
            });
          },
          handleLikeClick => cardID => {
            console.log(cardID);
            if (card.wasLiked() === false) {
              api.changeLikeCardStatus(cardID, true).then(res => {
                console.log(res.likes.length);
                const countLike = res.likes.length;
                card.like(countLike);
              });
            } else {
              api.changeLikeCardStatus(cardID, false).then(res => {
                const countLike = res.likes.length;
                card.notliked(countLike);
              });
            }
          },
          handleLikeIcon => {
            console.log(likes);
            if (likes.length > 0) {
              likes.forEach(cardLikes => {
                if (cardLikes._id) {
                  card.likeLoading();
                }
              });
            }
            console.log(1);
          }
        );
        const cardElement = card.generateCard();
        cardList.setItem(cardElement);
      },
    },
    cardListSelector
  );
  cardList.renderItems();
  // adding new place to dom
  const handleNewPlaceSubmit = () => {
    const name = cardTitle.value;
    const link = cardLink.value;

    api.addCard({ name, link }).then(res => {
      console.log(res);
      const place = new Card(
        name,
        link,
        res._id,
        res.owner,
        res.likes,
        '.elements__template',
        handleCardClick,
        id => {
          permanentDelete.open();
          permanentDelete.setSubmitAction(() => {
            console.log('id', id);
            console.log('before the function');
            handleDeleteClick(id).then(() => {
              // console.log(id);
              // console.log(results);
              place.removeCard();
            });
          });
        },
        handleLikeIcon => {
          console.log(likes);
          if (res.likes.length > 0) {
            res.likes.forEach(cardLikes => {
              if (cardLikes._id) {
                place.likeLoading();
              }
            });
          }
          console.log(1);
        },
        handleLikeClick => cardID => {
          if (place.wasLiked() === false) {
            api.changeLikeCardStatus(cardID, true).then(res => {
              console.log(res.likes.length);
              const countLike = res.likes.length;
              place.like(countLike);
            });
          } else {
            api.changeLikeCardStatus(cardID, false).then(res => {
              const countLike = res.likes.length;
              place.notliked(countLike);
            });
          }
        }
      );
      const newCard = place.generateCard();
      cardList.addItem(newCard);
    });
  };
  const imageForm = new PopupWithForm({
    popupSelector: '.modal__card',
    handleSubmitForm: data => {
      handleNewPlaceSubmit();
    },
  });
  addBtn.addEventListener('click', () => imageForm.open());
});

const profileInfo = new UserInfo({
  userNameSelector: nameUpdate,
  userDescriptionSelector: professionUpdate,
});
api.getUserInfo().then(res => {
  // console.log(res);
  profileInfo.setUserInfo({ userName: res.name, userDescription: res.about });
});

const handlingProfileEdit = () => {
  const name = formName.value;
  const about = formProfession.value;

  api.setUserInfo({ name, about }).then(res => {
    // console.log(res);
    profileInfo.setUserInfo({ userName: name, userDescription: about });
  });
};

const profileForm = new PopupWithForm({
  popupSelector: '.modal__edit',
  handleSubmitForm: () => {
    // console.log(data);
    handlingProfileEdit();
    profileForm.close();
  },
});
/// changing picture logic below?
const handleChangePic = () => {
  const avatarValue = avatarImg.value;
  console.log(avatarValue, 'testing');
  api.setUserAvatar({ avatar: avatarValue }).then(res => {
    console.log(res.avatar, 22);
    initialAvatar.src = res.avatar;
  });

  // console.log('changin pic');
};
const editProfilePic = new PopupWithForm({
  popupSelector: '.modal__addimage',
  handleSubmitForm: () => {
    handleChangePic();
    profileForm.close();
  },
});
profileImage.addEventListener('click', () => {
  editProfilePic.open();
});

const defaultConfig = {
  // formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-button',
  inactiveButtonClass: 'modal__save-disabled',
  inputErrorClass: 'modal__form-error',
  errorClass: 'modal__form-error_visible',
};
// creating a image modal?
const modalWithImage = new PopUpWithImage('.figure');
// console.log(modalWithImage);

const modalEdit = document.querySelector('.modal');
const modalAdd = document.querySelector('.modal__card');

const addCardForm = modalAdd.querySelector('.modal__form');
const editProfileForm = modalEdit.querySelector('.modal__form');

const editProfileValidation = new FormValidator(defaultConfig, editProfileForm);
const addCardValidation = new FormValidator(defaultConfig, addCardForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

// adding initial card to the DOM

editBtn.addEventListener('click', () => profileForm.open());
const handleCardClick = data => {
  modalWithImage.open(data);
};

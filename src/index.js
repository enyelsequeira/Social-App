import FormValidator from './scripts/FormValidator.js';
import Card from './scripts/Card.js';
import Section from './scripts/Section.js';
import {
  cardListSelector,
  editBtn,
  addBtn,
  cardTitle,
  cardLink,
  nameUpdate,
  professionUpdate,
  formName,
  formProfession,
  profileImage,
  initialAvatar,
  myId,
  saveButton,
  avatarImgForm,
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

// console.log(myId);
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

api.getPageInfo().then(([cards, userInfo]) => {
  const cardList = new Section(
    {
      data: cards,
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
              handleDeleteClick(id).then(() => {
                card.removeCard();
              });
            });
          },
          handleLikeClick => {
            if (card.wasLiked() === false) {
              api.changeLikeCardStatus(_id, true).then(res => {
                // console.log(res.likes.length, 'testing inside click');
                const countLike = res.likes.length;
                card.like(countLike);
              });
            } else {
              api.changeLikeCardStatus(_id, false).then(res => {
                const countLike = res.likes.length;
                card.notliked(countLike);
              });
            }
          },
          handleLikeIcon => {
            // console.log('runnin here');
            // console.log(likes, 'tesitng inse icon');
            if (likes.length > 0) {
              likes.forEach(cardLikes => {
                if (cardLikes._id === myId) {
                  card.likeLoading();
                }
              });
            }
          },
          userInfo._id
        );
        const cardElement = card.generateCard();
        cardList.setItem(cardElement);
      },
    },
    cardListSelector
  );
  cardList.renderItems();
  // adding new place to dom
  const handleNewPlaceSubmit = data => {
    // console.log(data);
    // console.log(data.Title, 4554545);
    // const name = cardTitle.value;
    // const link = cardLink.value;

    api.addCard({ name: data.Title, link: data.Imagelink }).then(res => {
      // console.log(res);
      const place = new Card(
        res.name,
        res.link,
        res._id,
        res.owner,
        res.likes,
        '.elements__template',
        handleCardClick,
        id => {
          permanentDelete.open();
          permanentDelete.setSubmitAction(() => {
            // console.log('id', id);
            // console.log('before the function');
            handleDeleteClick(id).then(() => {
              // console.log(id);
              // console.log(results);
              place.removeCard();
            });
          });
        },
        handleLikeIcon => {
          // console.log(likes);
          if (res.likes.length > 0) {
            res.likes.forEach(cardLikes => {
              if (cardLikes._id) {
                place.likeLoading();
              }
            });
          }
          // console.log(1);
        },
        handleLikeClick => cardID => {
          if (place.wasLiked() === false) {
            api.changeLikeCardStatus(cardID, true).then(results => {
              // console.log(res.likes.length);
              const countLike = results.likes.length;
              place.like(countLike);
            });
          } else {
            api.changeLikeCardStatus(cardID, false).then(results => {
              const countLike = results.likes.length;
              place.notliked(countLike);
            });
          }
        }
      );
      renderLoading(true);
      // console.log(saveButton.textContent);
      const newCard = place.generateCard();
      cardList.addItem(newCard);
    });
  };
  const imageForm = new PopupWithForm({
    popupSelector: '.modal__card',
    handleSubmitForm: data => {
      handleNewPlaceSubmit(data);
    },
  });
  addBtn.addEventListener('click', () => imageForm.open());

  const profileInfo = new UserInfo({
    userNameSelector: nameUpdate,
    userDescriptionSelector: professionUpdate,
  });

  profileInfo.setUserInfo({
    userName: userInfo.name,
    userDescription: userInfo.about,
  });
  const handlingProfileEdit = data => {
    // const name = formName.value;
    // const about = formProfession.value;
    renderLoading(false);
    api.setUserInfo({ name: data.name, about: data.job }).then(res => {
      // console.log(res);
      profileInfo.setUserInfo({
        userName: data.name,
        userDescription: data.job,
      });
      renderLoading(true);
    });
  };

  const profileForm = new PopupWithForm({
    popupSelector: '.modal__edit',
    handleSubmitForm: data => {
      // console.log(data);
      handlingProfileEdit(data);
      profileForm.close();
    },
  });
  editBtn.addEventListener('click', () => profileForm.open());
});

/// changing picture logic below?
const handleChangePic = () => {
  const avatarValue = avatarImgForm.value;
  // console.log(avatarValue, 'testing');
  renderLoading(false);
  // console.log(saveButton.textContent);

  api.setUserAvatar({ avatar: avatarValue }).then(res => {
    // console.log(res.avatar, 22);
    initialAvatar.src = res.avatar;
  });
  renderLoading(true);
  // console.log(saveButton.textContent);

  // console.log('changin pic');
};

const editProfilePic = new PopupWithForm({
  popupSelector: '.modal__addimage',
  handleSubmitForm: () => {
    handleChangePic();

    editProfilePic.close();
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

const handleCardClick = data => {
  modalWithImage.open(data);
};

const renderLoading = isLoading => {
  if (isLoading) {
    saveButton.textContent = 'Saving...';
  } else {
    saveButton.textContent = 'Save';
  }
};

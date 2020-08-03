class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    // console.log(this._baseUrl);
    this._headers = headers;
    console.log(this._headers);
  }

  // GET https://around.nomoreparties.co/v1/groupId/cards
  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then(res => {
        console.log('before res', res),
          res.ok ? res.json() : Promise.reject(`error${res.statusText}`);
      })
      .then(res => {
        console.log(2, res);
      })

      .catch(err => console.log(err));
  }

  // GET https://around.nomoreparties.co/v1/groupId/users/me
  getUserInfo() {}

  getAppInfo() {}

  // POST https://around.nomoreparties.co/v1/groupId/cards
  addCard({ name, link }) {}

  // DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
  removeCard(cardID) {}

  // PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
  // DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
  changeLikeCardStatus(cardID, like) {}

  // PATCH https://around.nomoreparties.co/v1/groupId/users/me
  setUserInfo({ name, about }) {}

  // PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
  setUserAvatar({ avatar }) {}
}

export default Api;
// const api = new Api({
//     baseUrl: "https://around.nomoreparties.co/v1/group-42",
//     headers: {
//       authorization: "9a4eb9c4-eb35-4130-9822-f1a4ffd479bc",
//       "Content-Type": "application/json"
//     }
//   });

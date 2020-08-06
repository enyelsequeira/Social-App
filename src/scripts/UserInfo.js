class UserInfo {
  constructor({ userNameSelector, userDescriptionSelector }) {
    this._userNameElement = userNameSelector;
    this._userDescriptionElement = userDescriptionSelector;
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userDescription: this._userDescriptionElement.textContent,
    };
  }

  setUserInfo({ userName, userDescription }) {
    (this._userNameElement.textContent = userName),
      (this._userDescriptionElement.textContent = userDescription);
  }
}

export default UserInfo;

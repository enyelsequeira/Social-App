class UserInfo {
  constructor(userName, userProfession) {
    this._name = userName;
    this._job = userProfession;
    // console.log(this._name);
  }

  getUserInfo() {
    this._name = document.querySelector('.modal__form-name').textContent;
    this._job = document.querySelector('.modal__form-profession').textContent;
  }

  setUserInfo() {
    document.querySelector('.profile__name').textContent = this._name;
    document.querySelector('.profile__profession').textContent = this._job;
  }
}

export default UserInfo;

import {
  formName,
  formProfession,
  nameUpdate,
  professionUpdate,
} from '../utils/constants';

class UserInfo {
  constructor(userName, userProfession) {
    this._name = userName;
    this._job = userProfession;
  }

  getUserInfo() {
    this._name = formName;
    this._job = formProfession;
  }

  setUserInfo() {
    nameUpdate.textContent = this._name;
    professionUpdate.textContent = this._job;
  }
}

export default UserInfo;

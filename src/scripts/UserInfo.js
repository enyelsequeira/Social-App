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
    // console.log(this._name);
    // console.log(this._name);
  }

  getUserInfo() {
    this._name = formName;
    this._job = formProfession;
  }

  setUserInfo({ userName, userDescription }) {
    nameUpdate.textContent = userName;
    professionUpdate.textContent = userDescription;
  }
}

export default UserInfo;

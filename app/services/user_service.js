import User from "../models/user.js";

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "");
  }

  static getInfo(user) {
    return [user.id, user.username, user.name];
  }

  static updateUsername(user, payload) {
    user.username = payload;
  }

  static getAllUsernames(userList) {
    return userList.map((user) => {
      return user.username;
    });
  }
}

export default UserService;

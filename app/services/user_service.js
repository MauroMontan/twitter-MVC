import User from "../models/user.js";

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "");
  }
}

export default UserService;

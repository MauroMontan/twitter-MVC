class User {
  constructor(id, username, name, bio) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.bio = bio;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  get getBio() {
    return this.bio;
  }
  get getCreatedDate() {
    return this.createdAt;
  }
  get getLasUppdate() {
    return this.updatedAt;
  }

  set setUsername(username) {
    this.username = username;
  }
}

export default User;

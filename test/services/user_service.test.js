import UserService from "../../app/services/user_service";

describe("Test for User service", () => {
  test("1) instancing user on user service", () => {
    const user = UserService.create(1, "MauroMontan", "Mauro");

    expect(user.username).toBe("MauroMontan");
  });

  test("2) Get all users data in a list", () => {
    const user = UserService.create(2, "MauroMontan", "Mauro");
    const userInfoList = UserService.getInfo(user);
    expect(userInfoList[0]).toBe(2);
  });

  test("3) Test for updateUsername method", () => {
    const user = UserService.create(2, "MauroMontan", "Mauro");
    UserService.updateUsername(user, "Miguel");

    expect(user.username).toBe("Miguel");
  });

  test("4) Test for getAllUsernames", () => {
    const userList = [];
    const user = UserService.create(2, "MauroMontan", "Mauro");
    userList.push(user);
    const usernames = UserService.getAllUsernames(userList);

    expect(usernames).toEqual(["MauroMontan"]);
  });
});

import UserService from "../../app/services/user_service";

describe("Test for User service", () => {
  test("1) instancing user on user service", () => {
    const user = UserService.create(1, "MauroMontan", "Mauro");

    expect(user.username).toBe("MauroMontan");
  });
});

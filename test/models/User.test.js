import User from "../../app/models/user.js";

describe("Unit test for user Model", () => {
  test("Instance of User object", () => {
    const user = new User(1, "MauroMontan", "Mauro", "Hey there!");

    expect(user.name).toBe("Mauro");
    expect(user.username).toBe("MauroMontan");
    expect(user.createdAt).not.toBeUndefined();
    expect(user.updatedAt).not.toBeUndefined();
  });

  test("Testing getters", () => {
    const user = new User(2, "MauroMontan", "Mauro", "Hey there");

    expect(user.getBio).toBe("Hey there");
    expect(user.createdAt).not.toBeUndefined();
  });

  test("Testing setters", () => {
    const user = new User(3, "MauroMontan", "Mauro", "Hey There");
    user.setUsername = "Migueeel";

    expect(user.username).toBe("Migueeel");
  });
});

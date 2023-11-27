const request = require("supertest");

describe("Post Request Example", function () {
  it("Success Create User", async () => {
    const response = request("https://petstore.swagger.io/v2")
      .post("/user")
      .send({
        id: 111,
        username: "myskill123",
        firstName: "myskill",
        lastName: "123",
        email: "myskill123",
        password: "myskill123",
        phone: "123",
        userStatus: 123,
      });
    console.log((await response).status);
    console.log((await response).body);
  });
});

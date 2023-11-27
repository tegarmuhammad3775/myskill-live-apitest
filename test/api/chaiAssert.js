const { expect } = require('chai')
const request = require("supertest")
const baseUrl = require("../../env")

describe("Chai Assert Example",() => {
    const response = request(baseUrl())
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

    it("Response status equal to 200", async() => {
        //Check response status harus sama dengan 200
        expect((await response).status).to.equal(200)
    })

    it("Response body to haveOwnProperty", async() => {
        //Expect dalam body response terdapat value 'message'
        expect((await response).body).to.haveOwnProperty('message')
    })

    it("Response body to haveOwnProperty", async() => {
        //Expect dalam body response terdapat value 'message'
        expect((await response).body).to.haveOwnProperty('not message')
    })

    //Reporting in mocha awesome


})
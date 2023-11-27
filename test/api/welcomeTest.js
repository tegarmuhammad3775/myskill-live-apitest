const assert = require("chai").assert;
const app = require("../../assert")

//Asserting
//Cara menggunakan asserting
describe("Welcome Test",function(){
    it("app should return welcome message",function(){
        assert.equal(app(), "welcome to QA course at MySkill")
    })
})
const S = require("sanctuary")
const users = require("./users.json")

const getName = S.prop("name")

const result = S.map(getName)(users)
console.log(result)

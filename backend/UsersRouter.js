const express = require('express')
const router = express.Router()
var db = require("./UsersDatabase.js")

router.get("/", (req, res) => {
    const stmt = db.prepare("SELECT * FROM userinfo").all();
    res.status(200).json(stmt);
})

router.get("/user1", (req, res) => {
    res.json({ id: 1, username: "sam" })
})

router.post('/create', (req, res) => {
    // pull stuff out of the request and make a user
    res.json({ result: 'User Successfully Created' })
})

module.exports = router
// Define app using express
const express = require('express')
// Require the md5 module
const md5 = require('md5')
const router = express.Router()
var db = require("./HistoryDatabase.js")

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Returns all information in the database
router.get("/", (req, res) => {
    const stmt = db.prepare("SELECT * FROM history").all();
    res.status(200).json(stmt);
})

router.get("/:username", (req, res) => {
    const stmt = db.prepare("SELECT * FROM history where username = ?").all(req.params.username);
    res.status(200).json(stmt);
})


// Create an interaction
// Send a username, type of interaction (log-in or out), and time
router.post('/create', (req, res) => {
    const username = req.body.username;
    const type = req.body.type;
    const time = req.body.time;
    const stmt = db.prepare("INSERT INTO history (username, type, time) VALUES (?, ?, ?)");
    stmt.run(username,type,time);
	res.json({ 
        message: req.body.username + " just " + req.body.type 
    })
})

// Export all of the above as a modeule that we can use it elsewhere.
module.exports = router
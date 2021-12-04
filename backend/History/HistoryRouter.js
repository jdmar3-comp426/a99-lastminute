const express = require('express')
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



// Returns information from specific interaction
// Send id in the URL path
router.get("/:id", (req, res) => {
    const stmt = db.prepare("SELECT * FROM history WHERE id = ?").get(req.params.id);
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

// Delete interactions
// Send id of interaction to delete
router.delete("/delete/:id", (req, res) => {	
	const stmt = db.prepare("DELETE FROM history WHERE id = ?");
	const info = stmt.run(req.params.id);
	res.status(200).json({"message": info.changes + " record deleted: ID " + req.params.id + " (200)"});
});

module.exports = router
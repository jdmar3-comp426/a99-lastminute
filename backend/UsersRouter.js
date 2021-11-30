const express = require('express')
const router = express.Router()
var db = require("./UsersDatabase.js")


router.get("/", (req, res) => {
    const stmt = db.prepare("SELECT * FROM userinfo").all();
    res.status(200).json(stmt);
})

router.get("/:id", (req, res) => {
    const stmt = db.prepare("SELECT * FROM userinfo WHERE id = ?").get(req.params.id);
	res.status(200).json(stmt);
})

router.post('/create', (req, res) => {
    // pull stuff out of the request and make a user
    const stmt = db.prepare("INSERT INTO userinfo (username, password, pizzas) VALUES (?, ?, ?)");
	const info = stmt.run(req.body.user,md5(req.body.password),0);
    res.json({ result: 'User Successfully Created' })
})

router.patch("/updateuser/:id", (req, res) => {	
	const stmt = db.prepare("UPDATE userinfo SET username = COALESCE(?,username), password = COALESCE(?,password) WHERE id = ?");
	const info = stmt.run(req.body.username, md5(req.body.password), req.params.id);
	res.status(200).json({"message": info.changes + " record updated: ID " + req.params.id + " (200)"});
});

router.patch("/setpizza/:id", (req, res) => {	
	const stmt = db.prepare("UPDATE userinfo SET pizzas = COALESCE(?,pizzas) WHERE id = ?");
	const info = stmt.run(req.body.pizzas, req.params.id);
	res.status(200).json({"message": info.changes + " record updated: ID " + req.params.id + " (200)"});
});

router.delete("/delete/:id", (req, res) => {	
	const stmt = db.prepare("DELETE FROM userinfo WHERE id = ?");
	const info = stmt.run(req.params.id);
	res.status(200).json({"message": info.changes + " record deleted: ID " + req.params.id + " (200)"});
});


module.exports = router
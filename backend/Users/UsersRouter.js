const express = require('express')
const md5 = require('md5')
const router = express.Router()
var db = require("./UsersDatabase.js")

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Returns all users in the database
router.get("/", (req, res) => {
    const stmt = db.prepare("SELECT * FROM userinfo").all();
    res.status(200).json(stmt);
})

// Returns userinfo for a given user id
// Specify id in the URL path
router.get("/:id", (req, res) => {
    const stmt = db.prepare("SELECT * FROM userinfo WHERE id = ?").get(req.params.id);
	res.status(200).json(stmt);
})

// Returns userinfo for a given username
// Specify username in the URL path
router.get("/getpizza/:username", (req, res) => {
    const stmt = db.prepare("SELECT pizzas FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.pizzas});
})

// Create a new user
// Send a usernam and password in the request body
router.post('/create', (req, res) => {
    console.log(req.body)

    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password)

    const existsStmt = db.prepare("SELECT * FROM userinfo WHERE username=?").get(username)

    if (existsStmt !== undefined) {
        res.json({ 
            result: "failure",
            message: "An account with that username already exists"
         })
         return
    }

    const stmt = db.prepare("INSERT INTO userinfo (username, password, pizzas, balance, cpp, convection, brick, conveyor, topping) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    stmt.run(username, md5(password), 0, 0.00, 0.00,  1, 0, 0, 0);

	res.json({ 
        result: 'success',
        message: 'User Successfully Created' 
    })
})

// Update user info for a user with the given id
// Send id in the URL path and username/password in request body
router.patch("/updateuser/:id", (req, res) => {	
	const stmt = db.prepare("UPDATE userinfo SET username = COALESCE(?,username), password = COALESCE(?,password) WHERE id = ?");
	const info = stmt.run(req.body.username, md5(req.body.password), req.params.id);
	res.status(200).json({"message": info.changes + " record updated: ID " + req.params.id + " (200)"});
});

// // Change Pizza Count API
// // Send new pizza count and user id, sets pizza count of that user id in database
// router.patch("/setpizza/:id", (req, res) => {	
// 	const stmt = db.prepare("UPDATE userinfo SET pizzas = COALESCE(?,pizzas) WHERE id = ?");
// 	const info = stmt.run(req.body.pizzas, req.params.id);
// 	res.status(200).json({"message": info.changes + " record updated: ID " + req.params.id + " (200)"});
// });

// Change Pizza Count API
// Send new pizza count and username, sets pizza count of that username in database
router.patch("/setpizza/:username", (req, res) => {	
	const stmt = db.prepare("UPDATE userinfo SET pizzas = COALESCE(?,pizzas) WHERE username = ?");
	const info = stmt.run(req.body.pizzas, req.params.username);
	res.status(200).json({
        "message": info.changes + " record updated: user " + req.params.username + " (200)",
        "pizzas": req.body.pizzas
    });
});

// Delete User API
// Send user id, deletes database entry with that id
router.delete("/delete/:id", (req, res) => {	
	const stmt = db.prepare("DELETE FROM userinfo WHERE id = ?");
	const info = stmt.run(req.params.id);
	res.status(200).json({"message": info.changes + " record deleted: ID " + req.params.id + " (200)"});
});

// Log-in API
// Send username and password, return success or failure. Success if username and password combination exist in databse, failure otherwise
router.post("/login", (req, res) => {	
	const stmt = db.prepare("SELECT * FROM userinfo WHERE username = ? AND password = ?");
	const info = stmt.get(req.body.username, req.body.password);
    if (info !== undefined) {
        res.status(200).json({
            "result": "success",
            "message": req.body.username + " logged-in!",
            "token": req.body.username
        });    

    } else {
        res.status(200).json({
            "result": "failure",
            "message": "This username password combination doesn't exist"
        });  
    }
});




router.get("/getbal/:username", (req, res) => {
    const stmt = db.prepare("SELECT balance FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.balance});
})
router.get("/getcpp/:username", (req, res) => {
    const stmt = db.prepare("SELECT cpp FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.cpp});
})
router.patch("/setbal/:username", (req, res) => {	
	const stmt = db.prepare("UPDATE userinfo SET balance = COALESCE(?,balance) WHERE username = ?");
	const info = stmt.run(req.body.balance, req.params.username);
	res.status(200).json({
        "message": info.changes + " record updated: user " + req.params.username + " (200)",
        "balance": req.body.balance
    });
});


module.exports = router
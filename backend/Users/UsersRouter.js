// Define app using express
const express = require('express')
// Require the md5 module
const md5 = require('md5')
const router = express.Router()
var db = require("./UsersDatabase.js")

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Returns all users in the database
router.get("/", (req, res) => {
    const stmt = db.prepare("SELECT * FROM userinfo").all();
    res.json({result: stmt});
})

// Returns userinfo for a given user id
// Specify id in the URL path
router.get("/:id", (req, res) => {
    const stmt = db.prepare("SELECT * FROM userinfo WHERE id = ?").get(req.params.id);
	res.status(200).json(stmt);
})

// Create a new user
// Send a username and password in the request body
router.post('/create', (req, res) => {
    //console.log(req.body)

    // Stores the username and password 
    const username = req.body.username;
    const password = req.body.password;

    //console.log(username, password)

    // Creates variable to look into userinfo to see if it already exists.
    // If it doesn't exists existsStmt === undefined. Else existsStmt === username.
    const existsStmt = db.prepare("SELECT * FROM userinfo WHERE username=?").get(username)

    // If username already exists tell the user that the username already exists.
    if (existsStmt !== undefined) {
        res.json({ 
            result: "failure",
            message: "An account with that username already exists"
         })
         return
    }

    // stmt is preparing to hold username, password, and the rest of the values for the game
    const stmt = db.prepare("INSERT INTO userinfo (username, password, balance, cpp, spending, revenue, pepperoni, mushroom, pepper, sausage, olive, cheese) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    // Initialize stmt to be (username, password, balance = 0, cost per pizza = 10, spending = 0, revenue = 0, pepperoni = 0, mushroom = 0, pepper = 0, sausage = 0, olive = 0, cheese = 0)
    stmt.run(username, md5(password), 0, 10, 0, 0, 0, 0, 0, 0, 0, 0);

    // Tell the user that the user was successfully created 
	res.json({ 
        result: 'success',
        message: 'User Successfully Created' 
    })
})

router.patch("/updatepass/:username", (req, res) => {	
	const stmt = db.prepare("UPDATE userinfo SET password = COALESCE(?,password) WHERE username = ?");
	const info = stmt.run(req.body.password, req.params.username);
	res.status(200).json({"message": info.changes + " record updated: user " + req.params.username + " (200)"});
});

// Delete User API
// Send user id, deletes database entry with that id
router.delete("/delete/:username", (req, res) => {	
	const stmt = db.prepare("DELETE FROM userinfo WHERE username = ?");
	const info = stmt.run(req.params.username);
	res.status(200).json({"message": info.changes + " record deleted: user " + req.params.username + " (200)"});
});

// Log-in API
// Send username and password, return success or failure. Success if username and password combination exist in databse, failure otherwise
// password is encrypted before sent to API call
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

// Selects the the specific value (balance, cpp, spending, etc) from the userinfo database.
router.get("/getbal/:username", (req, res) => {
    const stmt = db.prepare("SELECT balance FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.balance});
})
router.get("/getcpp/:username", (req, res) => {
    const stmt = db.prepare("SELECT cpp FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.cpp});
})
router.get("/getspending/:username", (req, res) => {
    const stmt = db.prepare("SELECT spending FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.spending});
})
router.get("/getrevenue/:username", (req, res) => {
    const stmt = db.prepare("SELECT revenue FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.revenue});
})
router.get("/getpepperoni/:username", (req, res) => {
    const stmt = db.prepare("SELECT pepperoni FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.pepperoni});
})
router.get("/getmushroom/:username", (req, res) => {
    const stmt = db.prepare("SELECT mushroom FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.mushroom});
})
router.get("/getpepper/:username", (req, res) => {
    const stmt = db.prepare("SELECT pepper FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.pepper});
})
router.get("/getsausage/:username", (req, res) => {
    const stmt = db.prepare("SELECT sausage FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.sausage});
})
router.get("/getolive/:username", (req, res) => {
    const stmt = db.prepare("SELECT olive FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.olive});
})
router.get("/getcheese/:username", (req, res) => {
    const stmt = db.prepare("SELECT cheese FROM userinfo WHERE username = ?").get(req.params.username);
    res.json({result: stmt.cheese});
})

// Updates the user games state and their data. 
router.patch("/setgamestate/:username", (req, res) => {	
	const stmt = db.prepare("UPDATE userinfo SET balance = COALESCE(?,balance), cpp = COALESCE(?,cpp), spending = COALESCE(?,spending), revenue = COALESCE(?,revenue), pepperoni = COALESCE(?,pepperoni), mushroom = COALESCE(?,mushroom), pepper = COALESCE(?,pepper), sausage = COALESCE(?,sausage), olive = COALESCE(?,olive), cheese = COALESCE(?,cheese) WHERE username = ?");
	const info = stmt.run(req.body.balance, req.body.cpp, req.body.spending, req.body.revenue, req.body.pepperoni, req.body.mushroom, req.body.pepper, req.body.sausage, req.body.olive, req.body.cheese, req.params.username);
	res.status(200).json({
        "message": info.changes + " record updated: user " + req.params.username + " (200)",
        "balance": req.body.balance,
        "cpp": req.body.cpp,
        "spending": req.body.spending,
        "revenue": req.body.revenue,
        "pepperoni": req.body.pepperoni,
        "mushroom": req.body.mushroom,
        "pepper": req.body.pepper,
        "sausage": req.body.sausage,
        "olive": req.body.olive,
        "cheese": req.body.cheese
    });
});

// Export all of the above as a module so that we can use it elsewhere.
module.exports = router
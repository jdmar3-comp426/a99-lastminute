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

// // Returns userinfo for a given username
// // Specify username in the URL path
// router.get("/getpizza/:username", (req, res) => {
//     const stmt = db.prepare("SELECT pizzas FROM userinfo WHERE username = ?").get(req.params.username);
//     res.json({result: stmt.pizzas});
// })

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

    const stmt = db.prepare("INSERT INTO userinfo (username, password, balance, cpp, spending, revenue, pepperoni, mushroom, pepper, sausage, olive, cheese) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    stmt.run(username, md5(password), 0, 10, 0, 0, 0, 0, 0, 0, 0, 0);

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
// // Send new pizza count and username, sets pizza count of that username in database
// router.patch("/setpizza/:username", (req, res) => {	
// 	const stmt = db.prepare("UPDATE userinfo SET pizzas = COALESCE(?,pizzas) WHERE username = ?");
// 	const info = stmt.run(req.body.pizzas, req.params.username);
// 	res.status(200).json({
//         "message": info.changes + " record updated: user " + req.params.username + " (200)",
//         "pizzas": req.body.pizzas
//     });
// });

// // Change Pizza Count API
// // Send new pizza count and username, sets pizza count of that username in database
// router.patch("/setpizza/:username", (req, res) => {	
// 	const stmt = db.prepare("UPDATE userinfo SET pizzas = COALESCE(?,pizzas) WHERE username = ?");
// 	const info = stmt.run(req.body.pizzas, req.params.username);
// 	res.status(200).json({
//         "message": info.changes + " record updated: user " + req.params.username + " (200)",
//         "pizzas": req.body.pizzas
//     });
// });

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




// router.patch("/setbal/:username", (req, res) => {	
// 	const stmt = db.prepare("UPDATE userinfo SET balance = COALESCE(?,balance) WHERE username = ?");
// 	const info = stmt.run(req.body.balance, req.params.username);
// 	res.status(200).json({
//         "message": info.changes + " record updated: user " + req.params.username + " (200)",
//         "balance": req.body.balance
//     });
// });
// router.patch("/setcpp/:username", (req, res) => {	
// 	const stmt = db.prepare("UPDATE userinfo SET cpp = COALESCE(?,cpp) WHERE username = ?");
// 	const info = stmt.run(req.body.cpp, req.params.username);
// 	res.status(200).json({
//         "message": info.changes + " record updated: user " + req.params.username + " (200)",
//         "cpp": req.body.cpp
//     });
// });
// router.patch("/setspending/:username", (req, res) => {	
// 	const stmt = db.prepare("UPDATE userinfo SET spending = COALESCE(?,spending) WHERE username = ?");
// 	const info = stmt.run(req.body.spending, req.params.username);
// 	res.status(200).json({
//         "message": info.changes + " record updated: user " + req.params.username + " (200)",
//         "spending": req.body.spending
//     });
// });
// router.patch("/setrevenue/:username", (req, res) => {	
// 	const stmt = db.prepare("UPDATE userinfo SET revenue = COALESCE(?,revenue) WHERE username = ?");
// 	const info = stmt.run(req.body.revenue, req.params.username);
// 	res.status(200).json({
//         "message": info.changes + " record updated: user " + req.params.username + " (200)",
//         "revenue": req.body.revenue
//     });
// });
// router.patch("/setpepperoni/:username", (req, res) => {	
// 	const stmt = db.prepare("UPDATE userinfo SET pepperoni = COALESCE(?,pepperoni) WHERE username = ?");
// 	const info = stmt.run(req.body.pepperoni, req.params.username);
// 	res.status(200).json({
//         "message": info.changes + " record updated: user " + req.params.username + " (200)",
//         "pepperoni": req.body.pepperoni
//     });
// });


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


module.exports = router

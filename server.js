const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const usersRouter = require('./backend/UsersRouter')
app.use("/app/users", usersRouter)

app.listen(3001, function() {
    console.log("express server is running on port 3001")
})
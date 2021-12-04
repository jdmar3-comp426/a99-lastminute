// Define the app using express
const express = require('express')
const app = express()

// Make Express use its own built-in body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const usersRouter = require('./Users/UsersRouter')
app.use("/app/users", usersRouter)

const historyRouter = require('./History/HistoryRouter')
app.use("/app/history", historyRouter)

app.listen(3001, function() {
    console.log("express server is running on port 3001")
})
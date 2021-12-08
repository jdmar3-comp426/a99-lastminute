// Define the app using express
const express = require("express");
const app = express();
const path = require('path')

// Make Express use its own built-in body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Establish users endpoints
const usersRouter = require("./Users/UsersRouter");
app.use("/app/users", usersRouter);

// Establish history endpoints
const historyRouter = require("./History/HistoryRouter");
app.use("/app/history", historyRouter);

app.get("/app", (req, res) => {
  res.json({"message": "your api works"})
})

// If we get a request on an endpoint not already handled, send React files
app.use(express.static(path.resolve(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 3001;
var ip = process.env.IP || '0.0.0.0';

app.listen(PORT, ip, function () {
  console.log("express server is running on port " + PORT);
});

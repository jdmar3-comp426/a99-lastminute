const express = require("express");
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Establish users endpoints
const usersRouter = require("./Users/UsersRouter");
app.use("/app/users", usersRouter);

// Establish history endpoints
const historyRouter = require("./History/HistoryRouter");
app.use("/app/history", historyRouter);

// If we get a request on an endpoint not already handled, send React files
app.use(express.static(path.resolve(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/public", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(3001, function () {
  console.log("express server is running on port " + PORT);
});

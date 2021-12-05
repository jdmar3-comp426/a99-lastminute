import React, { useState } from "react";
import md5 from "md5";
import PropType from "prop-types";

import pizzalogo from "../../Assets/pizzalogo2.jpeg";
import pizzastore from "../../Assets/pizzastore.jpeg";
import "./Login.css";

const pushLogin = (timestamp, username) => {
  const loginInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      type: "loggedIn",
      time: timestamp
    }),
  };  
  fetch("/app/history/create/", loginInfo)
};

async function attemptLoginUser(username, password) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: md5(password),
    }),
  };

  // Fetch the loging user endpoint from UserRouter.js
  // Return success or failure. Success if username and password combination exist in databse, failure otherwise
  return fetch("/app/users/login", requestOptions).then((response) =>
    response.json()
  );
}

export default function Login({ setUsernameToken, handleToggleCreateAccount }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    // If the event doesn't get explicitly handled, its default action should not be taken as it normally would be.
    event.preventDefault();
    console.log(username, password);

    // Calls the attemptLoginUser. 
    const json = await attemptLoginUser(username, password);

    // If it was successful then login the account else tell the user why it didn't work.
    if (json.result === "success") {
      setUsernameToken(username);
      var timestamp = Math.round(new Date() / 1000);
      pushLogin(timestamp, username);
    } else {
      alert(json.message);
    }
  };

  return (
    // HTML layout of Login
    <div className="Login">
      <header className="Login-header">
        <h1>
          Welcome to Pizza Presser /Sôst/{" "}
          <img className="photo" src={pizzalogo} alt="logo" />
        </h1>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          username:
          <input
            type="text"
            name="name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label className="label">
          password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div className="login">
          <button className="loginbut" type="submit">
            Login
          </button>
        </div>

        <p className="create">Don't have an account yet?</p>

        <div>
          <button className="create" onClick={handleToggleCreateAccount}>Create an Account</button>
        </div>
      </form>

      <div className="background">
        <img className="background-photo" src={pizzastore} alt="logo" />
      </div>
    </div>
  );
}

Login.propTypes = {
  setUsernameToken: PropType.func.isRequired,
  handleToggleCreateAccount: PropType.func.isRequired,
};

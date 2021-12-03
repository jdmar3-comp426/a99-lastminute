import React, { useState } from "react";
import md5 from "md5";
import PropType from "prop-types";

import pizzalogo from "../../Assets/pizzalogo2.jpeg";
import pizzastore from "../../Assets/pizzastore.jpeg";
import "./Login.css";

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

  return fetch("/app/users/login", requestOptions).then((response) =>
    response.json()
  );
}

export default function Login({ setUsernameToken, handleToggleCreateAccount }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username, password);

    const json = await attemptLoginUser(username, password);

    if (json.result === "success") {
      setUsernameToken(username);
    } else {
      alert(json.message);
    }
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <h1>
          Welcome to Pizza Press (Sôst){" "}
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
            type="text"
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
          <button onClick={handleToggleCreateAccount}>Create an Account</button>
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

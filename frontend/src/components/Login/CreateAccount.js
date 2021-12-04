import React, { useState } from "react";
import "./CreateAccount.css";

import pizzaimage1 from "../../Assets/pizzaimage1.jpeg";
import pizzaimage2 from "../../Assets/pizzaimage2.jpeg";

async function attemptCreateAcount(username, password) {
  // Actually try to make account
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };

  return fetch("/app/users/create", requestOptions).then((res) => res.json());
}

export default function CreateAccount({ setUsernameToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleCreateAccount = async (event) => {
    event.preventDefault();

    // check password equality
    if (password !== passwordAgain) {
      alert("Passwords do not match");
      return;
    }

    const json = await attemptCreateAcount(username, password);

    if (json.result === "success") {
      alert(json.message);
      setUsernameToken(username);
      var timestamp = Math.round(new Date() / 1000);
      const createInfo = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          type: "createAccount",
          time: timestamp
        }),
      };
      fetch("/app/history/create/", createInfo)
    } else {
      alert(json.message);
    }
  };

  return (
    <div className="full">
      <img className="border_image" src={pizzaimage1} alt="" />
      <div className="container">
        <h1 className="header">
          <p className="title">Create your Account</p>
        </h1>

        <form className="forms create_form" onSubmit={handleCreateAccount}>
          <label for="username" className="label">
            username:
            <input
              className="input_box"
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label for="password" className="label">
            password:
            <input
              className="input_box"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label for="password_again" className="label">
            Re-enter password:
            <input
              className="input_box"
              type="password"
              name="password_again"
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
          </label>

          <button type="submit" className="button1">
            Submit
          </button>
        </form>

        <img className="border_image2" src={pizzaimage2} alt="" />
      </div>
    </div>
  );
}

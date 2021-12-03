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

  return fetch("/app/users/create", requestOptions)
    .then((res) => res.json());
}

export default function CreateAccount({ setUsernameToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleCreateAccount = async (event) => {
    event.preventDefault()

    // check password equality
    if (password !== passwordAgain) {
      alert("Passwords do not match");
      return;
    }

    const json = await attemptCreateAcount(username, password)

    if (json.result === "success") {
      alert(json.message);
      setUsernameToken(username)
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

        <div className="forms">
          <div>
            <form className="create_form">
              <label className="label">
                username:
                <input
                  className="input_box"
                  type="text"
                  name="username"
                  onChange={e => setUsername(e.target.value)}
                />
              </label>
            </form>
          </div>

          <div>
            <form className="create_form">
              <label className="label">
                password:
                <input
                  className="input_box"
                  type="text"
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                />
              </label>
              <p className="pass_recs">
                *password must include at least 8 characters, a number
                character, and a special character
              </p>
            </form>
          </div>

          <div>
            <form className="create_form">
              <label className="label">
                Re-enter password:
                <input
                  className="input_box"
                  type="text"
                  name="password_again"
                  onChange={e => setPasswordAgain(e.target.value)}
                />
              </label>
            </form>
          </div>
        </div>
        <button className="button1" href="#" onClick={handleCreateAccount}>
          Submit
        </button>

        <img className="border_image2" src={pizzaimage2} alt="" />
      </div>
    </div>
  );
}
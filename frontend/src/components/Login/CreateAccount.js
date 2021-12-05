import React, { useState } from "react";
import "./CreateAccount.css";

import pizzaimage1 from "../../Assets/pizzaimage1.jpeg";
import pizzaimage2 from "../../Assets/pizzaimage2.jpeg";

async function attemptCreateAcount(username, password) {
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

<<<<<<< HEAD
=======
  // Fetch the create user endpoint from UserRouter.js 
  // If it fails to create an account result === "failure". Else result === "success"
>>>>>>> main
  return fetch("/app/users/create", requestOptions).then((res) => res.json());
}

export default function CreateAccount({ setUsernameToken }) { 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleCreateAccount = async (event) => {
<<<<<<< HEAD
=======
    // If the event doesn't get explicitly handled, its default action should not be taken as it normally would be. 
>>>>>>> main
    event.preventDefault();

    // Checks for password equality. If it doesn't match tell the user. 
    if (password !== passwordAgain) {
      alert("Passwords do not match");
      return;
    }

<<<<<<< HEAD
=======
    // Calls the attemptCreateAcount. 
>>>>>>> main
    const json = await attemptCreateAcount(username, password);

    // If it was successful then create the account else tell the user why it didn't work.
    if (json.result === "success") {
<<<<<<< HEAD
      alert(json.message);
      setUsernameToken(username);
=======
      setUsernameToken(username);
      var timestamp = Math.round(new Date() / 1000);
      const createInfo = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          type: "createdAccount",
          time: timestamp
        }),
      };
      fetch("/app/history/create/", createInfo)
>>>>>>> main
    } else {
      alert(json.message);
    }
  };

  return (
    // HTML layout of CreateAccount
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
<<<<<<< HEAD

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

=======

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

>>>>>>> main
          <button type="submit" className="button1">
            Submit
          </button>
        </form>

        <img className="border_image2" src={pizzaimage2} alt="" />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import PropTypes from "prop-types";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// From https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

async function loginUser(credentials) {
  return fetch("/app/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showCreate, setShowCreate] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault()
    const token = await loginUser({ username: username, password: password })
    console.log(token.token)
    setToken(token.token)
  }

  const handleToggleCreate = () => {
    console.log('hi')
    setShowCreate(!showCreate)
  }

  if (showCreate) {
    return <h1>Create Account</h1>
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <button onClick={handleToggleCreate}>Create Account</button>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

function MyApp() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/preferences" element={<h1>Prefernces</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyApp;

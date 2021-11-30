import "./App.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import pizzalogo from "./pizzalogo2.jpeg";
import pizzastore from "./pizzastore.jpeg";
// import account from './Account.js';
import ReactDOM from "react-dom";
import { BrowserRouter as Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Pizza Press (Sôst){" "}
          <img className="photo" src={pizzalogo} alt="logo" />
        </h1>
      </header>
      <form className="form">
        <label className="label">
          username:
          <input type="text" name="name" />
        </label>
        <label className="label">
          password:
          <input type="text" name="password" />
        </label>
        <div className="login">
          <Link
            to="/Game"
            className="loginbut"
            style={{ textDecoration: "none", color: "firebrick" }}
          >
            Login
          </Link>
        </div>

        <p className="create">Don't have an account yet?</p>
        <div>
          <Link to="/Account">Create an Account</Link>
        </div>
      </form>

      <div className="background">
        <img className="background-photo" src={pizzastore} alt="logo" />
      </div>
    </div>
  );
}

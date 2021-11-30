import React, { Component } from "react";
import "./Account.css";
import pizzaimage1 from "./pizzaimage1.jpeg";
import pizzaimage2 from "./pizzaimage2.jpeg";

class Account extends Component {
  render() {
    return (
      <div className="full">
        <img className="border_image" src={pizzaimage1} alt="image" />
        <div className="container">
          <h1 className="header">
            <p className="title">Create your Account</p>
          </h1>

          <div className="forms">
            <div>
              <form className="create_form">
                <label className="label">
                  username:
                  <input className="input_box" type="text" name="name" />
                </label>
              </form>
            </div>

            <div>
              <form className="create_form">
                <label className="label">
                  password:
                  <input className="input_box" type="text" name="password" />
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
                  <input className="input_box" type="text" name="password" />
                </label>
              </form>
            </div>
          </div>
          <button className="button1" href="#">
            Submit
          </button>

          <img className="border_image2" src={pizzaimage2} alt="image" />
        </div>
      </div>
    );
  }
}

export default Account;

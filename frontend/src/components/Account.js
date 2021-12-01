import React, { Component, TextField } from "react";
import "./Account.css";
import pizzaimage1 from "./pizzaimage1.jpeg";
import pizzaimage2 from "./pizzaimage2.jpeg";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "", passwordAgain: "" };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordAgainChange = this.handlePasswordAgainChange.bind(this);
    this.attemptCreateAcount = this.attemptCreateAcount.bind(this);
  }

  attemptCreateAcount() {
    // check password equality
    if (this.state.password !== this.state.passwordAgain) {
      alert("Passwords do not match");
      return;
    }

    // Actually try to make account
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    };

    fetch("/app/users/create", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.result === "success") {
          // TODO: go into game play
          alert(json.message);
        } else {
          alert(json.message);
        }
      });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handlePasswordAgainChange(event) {
    this.setState({ passwordAgain: event.target.value });
  }

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
                  <input
                    className="input_box"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
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
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
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
                    value={this.state.passwordAgain}
                    onChange={this.handlePasswordAgainChange}
                  />
                </label>
              </form>
            </div>
          </div>
          <button
            className="button1"
            href="#"
            onClick={this.attemptCreateAcount}
          >
            Submit
          </button>

          <img className="border_image2" src={pizzaimage2} alt="image" />
        </div>
      </div>
    );
  }
}

export default Account;

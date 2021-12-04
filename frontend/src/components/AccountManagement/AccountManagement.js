import md5 from "md5";
import React, { useState } from "react";
import "./AccountManagement.css";

export default function AccountManagement(/*{ username }*/) {
  const username = "sam";
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordAgain, setNewPasswordAgain] = useState("");

  const handleChangePassword = async (event) => {
      event.preventDefault();

      if (newPassword !== newPasswordAgain) {
          alert("New Passwords must match")
      }
      
      const loginOptions = {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: {
              username: username,
              password: md5(password)
          }
      }

      const loginJson = await fetch("/app/users/login", loginOptions).then(res => res.json())
      if (loginJson.result !== "success") {
          alert(login.message)
      }
      
      // if current password is incorrect, yell at them (maybe with login endpoint)
      // if new passwords don't match, yell at them
      // otherwise, update user info
  }

  return (
    <div class="settings_container">
      <h1>Account Settings</h1>

      <div class="settings_item row">
        <h3>Username</h3>
        <p>{username}</p>
      </div>

      <form class="settings_item column" onSubmit={handleChangePassword}>
        <h3>Change Password</h3>

          <label for="password">Current Password</label>
          <input
            class="settings_input"
            type="password" name="password" placeholder="Current Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label for="new_password">New Password</label>
          <input
            class="settings_input"
            type="password" name="new_password" placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <label for="new_password_agin">Retype New Password</label>
          <input
            class="settings_input"
            type="password" name="new_password_again" placeholder="Retype New Password"
            onChange={(e) => setNewPasswordAgain(e.target.value)}
          />

          <button type="submit">Change Password</button>
      </form>

      <div class="settings_item">
        <h3>Login History</h3>
      </div>
    </div>
  );
}

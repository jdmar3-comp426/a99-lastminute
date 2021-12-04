import React, { useState } from "react";
import "./AccountManagement.css";
import md5 from "md5";

export default function AccountManagement({ username, setUsernameToken }) {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordAgain, setNewPasswordAgain] = useState("");

  const handleChangePassword = async (event) => {
    event.preventDefault();

    if (newPassword !== newPasswordAgain) {
      alert("New Passwords must match")
      return
    }

    const loginOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: md5(password)
      }),
    };

    const loginJson = await fetch("/app/users/login", loginOptions).then(res => res.json())
    if (loginJson.result !== "success") {
      alert(loginJson.message)
    } else {
      const passOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: md5(newPassword),
        }),
      };
      fetch("/app/users/updatepass/" + username, passOptions)
        .then(alert("Password updated!"))
    }
  }

  const handleLogout = (event) => {
    setUsernameToken(undefined)
  }

  const handleDeleteAccount = (event) => {
      var answer = window.confirm("Are you sure you want to delete your account?")
      if (!answer) { return }

      // delete account
      handleLogout()
  }

  return (
    <div class="settings_container">
      <h1>Account Settings</h1>

      <div class="settings_item row">
        <h3>Username:</h3>
        <p>{username}</p>
      </div>

      <div class="settings_item row spacer">
        <h3>Log Out</h3>
        <button onClick={handleLogout}>Log Out</button>
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

      <div class="settings_item row spacer destructive">
          <h3>Delete Account</h3>
          <button onClick={handleDeleteAccount}>Delete Account</button>
      </div>

      <div class="settings_item">
        <h3>Login History</h3>
      </div>
    </div>
  );
}

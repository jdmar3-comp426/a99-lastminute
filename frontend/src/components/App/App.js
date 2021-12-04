import "./App.css";
import React, { useState } from "react";
import LoggedOutState from "../Login/LoggedOutState";
import Game from "../Game/Game";
import AccountManagement from "../AccountManagement/AccountManagement";
import pizzaLogo from "../../Assets/pizzalogo2.jpeg"

export default function App() {
  const [usernameToken, setUsernameToken] = useState();
  const [showAccount, setShowAccount] = useState(false);

  return (
    <div>
      {!usernameToken ? (
        <LoggedOutState setUsernameToken={setUsernameToken} />
      ) : (
        <div>
          <div class="ppheader">
            <div class="navbar">
              <img src={pizzaLogo}/>
              <h1>Welcome to {usernameToken}'s pizzeria</h1>
            </div>
            
            <div class="navbar">
              <button class="ppbutton" onClick={() => setShowAccount(false)}>Game</button>
              <button class="ppbutton" onClick={() => setShowAccount(true)}>Settings</button>
              <button class="ppbutton" onClick={() => setUsernameToken(undefined)}>Log Out</button>
            </div>
          </div>

          {showAccount ? (
            <AccountManagement username={usernameToken} setUsernameToken={setUsernameToken}/>
          ) : (
            <Game username={usernameToken} />
          )}
        </div>
      )}
    </div>
  );
}

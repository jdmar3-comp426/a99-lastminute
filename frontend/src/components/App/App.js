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
          <div className="ppheader">
            <div className="navbar">
              <img src={pizzaLogo} alt="Pizza Logo"/>
              <h1>Welcome to {usernameToken}'s pizzeria</h1>
            </div>
            
            <div className="navbar">
              <button className="ppbutton" onClick={() => setShowAccount(false)}>Game</button>
              <button className="ppbutton" onClick={() => setShowAccount(true)}>Settings</button>
              <button className="ppbutton" onClick={() => setUsernameToken(undefined)}>Log Out</button>
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

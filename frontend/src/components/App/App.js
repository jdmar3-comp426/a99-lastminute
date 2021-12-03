import "./App.css";
import React, { useState } from "react";
import LoggedOutState from "../Login/LoggedOutState";
import Game from "../Game/Game";

export default function App() {
  const [usernameToken, setUsernameToken] = useState();

  if (!usernameToken) {
    return <LoggedOutState setUsernameToken={setUsernameToken} />;
  } else {
    console.log("hello there", usernameToken);
    return <Game username={usernameToken} />; // inject username
  }
}
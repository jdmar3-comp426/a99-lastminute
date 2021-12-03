import "./App.css";
import React, { useState } from "react";
import LoggedOutState from "../Login/LoggedOutState";
import Game from "../Game/Game";
// import Game from "../Game/GameNew"

export default function App() {
  const [usernameToken, setUsernameToken] = useState();

  if (!usernameToken) {
    return <LoggedOutState setUsernameToken={setUsernameToken} />;
  } else {
    return <Game username={usernameToken} />;
  }
}
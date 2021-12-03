import React, { useState } from "react";
import "./Game.css";

export default function Game({ username }) {
  const [balance, setBal] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  const getBal = () => {
    fetch("/app/users/getbal/" + username)
      .then((res) => res.json())
      .then((json) => {
        setBal(json.result);
      });
  };

  const updateBal = () => {
    var requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        balance: balance + 1,
      }),
    };
    
    fetch("/app/users/setbal/" + username, requestOptions)
      .then((res) => res.json())
      .then((json) => setBal(json.balance));
  };

  if (firstLoad) {
    getBal();
    setFirstLoad(false);
  }

  return (
    <div className="gameboard">
      <div className="welcome">Welcome to {username}'s pizzeria</div>

      <div className="wrapper">
        <button className="pizza_button" onClick={updateBal}></button>

        <div className="bank">
          BANK
          <p>Balance: {balance}</p>

          <div className="text">
            <p>Cost per Pizza:</p>
            <p>Total Spending:</p>
            <p>Revenue:</p>
          </div>
        </div>
      </div>

      <div className="bottomwrapper">
        <div className="store">
          <h1 className="oven_header">Store</h1>
          <button className="oven">Convection Oven: $3500</button>
          <button className="oven">Brick Oven: $4000</button>
          <button className="oven">Conveyor Oven: $6000</button>
          <button className="oven">One Topping: $500</button>
          <button className="oven">Two Toppings: $750</button>
          <button className="oven">Three Toppings: $1000</button>
        </div>

        <div className="leaderboard">Leaderboard</div>
      </div>
    </div>
  );
}

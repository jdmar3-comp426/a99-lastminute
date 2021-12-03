import React, { useState } from "react";
import "./Game.css";

export default function Game({ username }) {
  const [pizzas, setPizzas] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  const getPizzas = () => {
    fetch("/app/users/getpizza/" + username)
      .then((res) => res.json())
      .then((json) => {
        setPizzas(parseInt(json.result));
      });
  };

  const updatePizzas = () => {
    var requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pizzas: pizzas + 1,
      }),
    };
    
    fetch("/app/users/setpizza/" + username, requestOptions)
      .then((res) => res.json())
      .then((json) => setPizzas(json.pizzas));
  };

  if (firstLoad) {
    getPizzas();
    setFirstLoad(false);
  }

  return (
    <div className="gameboard">
      <div className="welcome">Welcome to {username}'s pizzeria</div>

      <div className="wrapper">
        <button className="pizza_button" onClick={updatePizzas}></button>

        <div className="bank">
          BANK
          <p>Pizzas: {pizzas}</p>

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

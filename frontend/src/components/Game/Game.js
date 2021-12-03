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

  const attemptUpdatePizza = () => {
    updatePizzas();
  };

  if (firstLoad) {
    getPizzas();
    setFirstLoad(false);
  }

  return (
    <div>
      <p>Pizzas: {pizzas}</p>
      <button className="button1" href="#" onClick={attemptUpdatePizza}>
        Pizza
      </button>
    </div>
  );
}

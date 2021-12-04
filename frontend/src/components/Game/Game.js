import React, { useState } from "react";
import "./Game.css";

export default function Game({ username }) {
  const [pizzas, setPizzas] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [leaders, setLeaders] = useState([]);


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

  const updateLeaderboard = () => {
    fetch("/app/users/")
      .then((res) => res.json())
      .then((json) => {
        var leaders = [];
        var allUsers = json.result;
        // console.log(allUsers);
        // console.log(allUsers[0]);
        // console.log(allUsers[0].username);
        var allUsersArray = [];
        for (let i = 0; i < allUsers.length; i++) {
          allUsersArray.push([allUsers[i].username, allUsers[i].pizzas]);
        }
        allUsersArray.sort(function(a,b){return(b[1]-a[1])});
        for (let i = 0; i < 10; i++) {
          leaders[i] = allUsersArray[i];
        }
        setLeaders(leaders);
        //console.log(leaders);
        });
  };

  if (firstLoad) {
    getPizzas();
    setFirstLoad(false);
    updateLeaderboard();
  }

  return (
    <div className="gameboard">
      <div className="welcome">Welcome to {username}'s pizzeria'</div>

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
        <div className="leaderboard">
          {leaders.map(leader => 
            <p>{leader[0]}: {leader[1]}</p>
          )}
        </div>
      </div>
    </div>
  );
}

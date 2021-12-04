import React, { useState } from "react";
import "./Game.css";

export default function Game({ username }) {
  const [balance, setBal] = useState(0);
  const [cpp, setCPP] = useState(0);
  const [spending, setSpending] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [pepperoni, setPepperoni] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  
  const getBal = () => {
    fetch("/app/users/getbal/" + username)
      .then((res) => res.json())
      .then((json) => {
        setBal(json.result);
      });
  };
  const getCPP = () => {
    fetch("/app/users/getcpp/" + username)
      .then((res) => res.json())
      .then((json) => {
        setCPP(json.result);
      });
  };
  const getPepperoni = () => {
    fetch("/app/users/getpepperoni/" + username)
      .then((res) => res.json())
      .then((json) => {
        setPepperoni(json.result);
      });
  };
  const getSpending = () => {
    fetch("/app/users/getspending/" + username)
      .then((res) => res.json())
      .then((json) => {
        setSpending(json.result);
      });
  };
  const getRevenue = () => {
    fetch("/app/users/getrevenue/" + username)
      .then((res) => res.json())
      .then((json) => {
        setRevenue(json.result);
      });
  };

<<<<<<< HEAD


  const setGameState = (balance, cpp, pepperoni) => {
=======
  const setGameState = (balance, cpp, spending, revenue, pepperoni) => {
>>>>>>> 8c97ff776b9e8aeb71cc9e4ccc6765d3cb6c509e
    var requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        balance: balance,
        cpp: cpp,
        spending: spending,
        revenue: revenue,
        pepperoni: pepperoni,
      }),
    };
    fetch("/app/users/setgamestate/" + username, requestOptions)
      .then((res) => res.json())
      .then((json) => {
        setBal(json.balance)
        setCPP(json.cpp)
        setSpending(json.spending)
        setRevenue(json.revenue)
        setPepperoni(json.pepperoni)
      })
  }

<<<<<<< HEAD
  


=======
>>>>>>> 8c97ff776b9e8aeb71cc9e4ccc6765d3cb6c509e
  if (firstLoad) {
    getBal();
    getCPP();
    getSpending();
    getRevenue();
    getPepperoni();
    setFirstLoad(false);
  }

  return (
    <div className="gameboard">
      <div className="welcome">Welcome to {username}'s pizzeria</div>

      <div className="wrapper">
        <button className="pizza_button" onClick={() => setGameState(balance+cpp, cpp, spending, revenue+cpp, pepperoni)}></button>

        <div className="bank">
          BANK
          <p>Balance: $ {balance}</p>

          <div className="text">
            <p>Price per Pizza: ${cpp}</p>
            <p>Total Spending: ${spending}</p>
            <p>Revenue: ${revenue}</p>
          </div>
        </div>
      </div>

      <div className="bottomwrapper">
        <div className="store">
          <h1 className="oven_header">Store</h1>
<<<<<<< HEAD
          <button className="pep" disabled = {pepperoni===1 || balance < 1000} onClick={() => setGameState(balance,cpp+3,1)}>Pepperoni: $1000 {pepperoni}</button>

=======
          <button className="pep" onClick={() => setGameState(balance-1000, cpp+3, spending+1000, revenue, 1)}>Pepperoni: $1000 {pepperoni}</button>
>>>>>>> 8c97ff776b9e8aeb71cc9e4ccc6765d3cb6c509e
          <button className="oven">Mushrooms: $1200</button>
          <button className="oven">Peppers: $1400</button>
          <button className="oven">Sausage: $1600</button>
          <button className="oven">Olives: $1800</button>
          <button className="oven">Cheese: $2000</button>
        </div>

        <div className="leaderboard">Leaderboard</div>
      </div>
    </div>
  );
}

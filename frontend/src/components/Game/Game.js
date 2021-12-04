import React, { useState } from "react";
import "./Game.css";

export default function Game({ username }) {
  const [balance, setBal] = useState(0);
  const [cpp, setCPP] = useState(0);
  const [spending, setSpending] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [pepperoni, setPepperoni] = useState(0);
  const [mushroom, setMushroom] = useState(0);
  const [pepper, setPepper] = useState(0);
  const [sausage, setSausage] = useState(0);
  const [olive, setOlive] = useState(0);
  const [cheese, setCheese] = useState(0);
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
  const getPepperoni = () => {
    fetch("/app/users/getpepperoni/" + username)
      .then((res) => res.json())
      .then((json) => {
        setPepperoni(json.result);
      });
  };
  const getMushroom = () => {
    fetch("/app/users/getmushroom/" + username)
      .then((res) => res.json())
      .then((json) => {
        setMushroom(json.result);
      });
  };
  const getPepper = () => {
    fetch("/app/users/getpepper/" + username)
      .then((res) => res.json())
      .then((json) => {
        setPepper(json.result);
      });
  };
  const getSausage = () => {
    fetch("/app/users/getsausage/" + username)
      .then((res) => res.json())
      .then((json) => {
        setSausage(json.result);
      });
  };
  const getOlive = () => {
    fetch("/app/users/getolive/" + username)
      .then((res) => res.json())
      .then((json) => {
        setOlive(json.result);
      });
  };
  const getCheese = () => {
    fetch("/app/users/getcheese/" + username)
      .then((res) => res.json())
      .then((json) => {
        setCheese(json.result);
      });
  };

  const setGameState = (balance, cpp, spending, revenue, pepperoni, mushroom, pepper, sausage, olive, cheese) => {
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
        mushroom: mushroom,
        pepper: pepper,
        sausage: sausage,
        olive: olive,
        cheese: cheese,
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
        setMushroom(json.mushroom)
        setPepper(json.pepper)
        setSausage(json.sausage)
        setOlive(json.olive)
        setCheese(json.cheese)
      })
  }

  if (firstLoad) {
    getBal();
    getCPP();
    getSpending();
    getRevenue();
    getPepperoni();
    getMushroom();
    getPepper();
    getSausage();
    getOlive();
    getCheese();
    setFirstLoad(false);
  }

  return (
    <div className="gameboard">
      <div className="welcome">Welcome to {username}'s pizzeria</div>

      <div className="wrapper">
        <button className="pizza_button" onClick={() => setGameState(balance+cpp, cpp, spending, revenue+cpp, pepperoni, mushroom, pepper, sausage, olive, cheese)}></button>

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
          <button className="pep" onClick={() => setGameState(balance-1000, cpp+3, spending+1000, revenue, 1, mushroom, pepper, sausage, olive, cheese)}>Pepperoni: $1000 {pepperoni}</button>
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

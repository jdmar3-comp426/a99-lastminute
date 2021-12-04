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
  const [leaders, setLeaders] = useState([]);

  // Gets the balance the user has.
  const getBal = () => {
    fetch("/app/users/getbal/" + username)
      .then((res) => res.json())
      .then((json) => {
        setBal(json.result);
      });
  };

  // Gets the cost per pizza the user has.
  const getCPP = () => {
    fetch("/app/users/getcpp/" + username)
      .then((res) => res.json())
      .then((json) => {
        setCPP(json.result);
      });
  };

  // Gets the spending value the user has.
  const getSpending = () => {
    fetch("/app/users/getspending/" + username)
      .then((res) => res.json())
      .then((json) => {
        setSpending(json.result);
      });
  };

  // Gets the total revenue the user has.
  const getRevenue = () => {
    fetch("/app/users/getrevenue/" + username)
      .then((res) => res.json())
      .then((json) => {
        setRevenue(json.result);
      });
  };

  // Gets how many pepperoni the user has.
  const getPepperoni = () => {
    fetch("/app/users/getpepperoni/" + username)
      .then((res) => res.json())
      .then((json) => {
        setPepperoni(json.result);
      });
  };

  // Gets how many mushrooms the user has.
  const getMushroom = () => {
    fetch("/app/users/getmushroom/" + username)
      .then((res) => res.json())
      .then((json) => {
        setMushroom(json.result);
      });
  };

  // Gets how many peppers the user has.
  const getPepper = () => {
    fetch("/app/users/getpepper/" + username)
      .then((res) => res.json())
      .then((json) => {
        setPepper(json.result);
      });
  };

  // Gets how many sausages the user has.
  const getSausage = () => {
    fetch("/app/users/getsausage/" + username)
      .then((res) => res.json())
      .then((json) => {
        setSausage(json.result);
      });
  };

  // Gets how many olives the user has.
  const getOlive = () => {
    fetch("/app/users/getolive/" + username)
      .then((res) => res.json())
      .then((json) => {
        setOlive(json.result);
      });
  };

  // Gets how many cheese the user has.
  const getCheese = () => {
    fetch("/app/users/getcheese/" + username)
      .then((res) => res.json())
      .then((json) => {
        setCheese(json.result);
      });
  };

  // Updates the game state every time an event occurs, updates database and frontend.
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
        setBal(json.balance);
        setCPP(json.cpp);
        setSpending(json.spending);
        setRevenue(json.revenue);
        setPepperoni(json.pepperoni);
        setMushroom(json.mushroom);
        setPepper(json.pepper);
        setSausage(json.sausage);
        setOlive(json.olive);
        setCheese(json.cheese);
        updateLeaderboard();
      });
  };

  // Updates the leaderboard sorted by revenue.
  const updateLeaderboard = () => {
    fetch("/app/users/")
      .then((res) => res.json())
      .then((json) => {
        var allUsersSorted = json.result.sort((a, b) => b.revenue - a.revenue);
        var leaders = allUsersSorted.slice(0, 5);

        leaders = leaders.map((leader) => {
          return { username: leader.username, revenue: leader.revenue };
        });

        setLeaders(leaders);
      });
  };

  // Gets all userinfo and updates leaderboard on initial page load.
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
    updateLeaderboard();
  }

  // HTML layout of the game page, split into 4 sections (pizza button, bank, leaderboard, upgrade shop).
  return (
    <div className="gameboard">
      <div className="welcome">Welcome to {username}'s pizzeria</div>

      <div className="wrapper">
       
      
       <button className = "pizza_button" onClick={() =>
            setGameState(balance + cpp, cpp, spending, revenue + cpp, pepperoni, mushroom, pepper, sausage, olive, cheese)
            
        }>
          <div className="bank">
          
            <p>Balance: $ {balance}</p>
            <p>Price per Pizza: ${cpp}</p>
            <p>Total Spending: ${spending}</p>
            <p>Revenue: ${revenue}</p>
          
        </div>
        </button>
       
        <div className ="leader">
          <div className="leaderboard1">Leaderboard
        <div className="leaderboard">
          {leaders.map((leader, index) => 
              <p key={leader.username}><b>{index + 1}</b> - {leader.username}: {leader.revenue}</p>
          )}
        </div>
        </div>
          </div>
       
      
      </div>
   
      <div className="bottomwrapper">
        <div className="store">
          


          <div className="store1">
            
          <button className="pepperoni" disabled={pepperoni === 1 || balance < 1000} onClick={() =>
              setGameState(balance - 1000, cpp + 3, spending + 1000, revenue, 1, mushroom, pepper, sausage, olive, cheese)
          }>
            Pepperoni: $1000
          </button>

          <button className="mush" disabled={mushroom === 1 || balance < 1500} onClick={() =>
              setGameState(balance - 1500, cpp + 5, spending + 1500, revenue, pepperoni, 1, pepper, sausage, olive, cheese)
          }>
            Mushrooms: $1500
          </button> 
          </div>

          <div className="store2">
          <button className="peppers" disabled={pepper === 1 || balance < 2000} onClick={() =>
              setGameState(balance - 2000, cpp + 10, spending + 2000, revenue, pepperoni, mushroom, 1, sausage, olive, cheese)
          }>
            Peppers: $2000
          </button>

          <button className="cheese" disabled={cheese === 1 || balance < 1500} onClick={() =>
              setGameState(balance - 1500, cpp + 5, spending + 1500, revenue, pepperoni, mushroom, pepper, sausage, olive, 1)
          }>
            Extra Cheese: $1500
          </button>

          </div>
        
          
          



          <div className="store3">
          <button className="sausage" disabled={sausage === 1 || balance < 500} onClick={() =>
              setGameState(balance - 500, cpp + 2, spending + 500, revenue, pepperoni, mushroom, pepper, 1, olive, cheese)
          }>
            Sausages: $500
          </button>

          <button className="olives" disabled={olive === 1 || balance < 3000} onClick={() =>
              setGameState(balance - 3000, cpp + 8, spending + 3000, revenue, pepperoni, mushroom, pepper, sausage, 1, cheese)
          }>
            Olives: $3000
          </button>
          </div>
          
         
        
        </div>
         
        
      </div>
    </div>
  );
}

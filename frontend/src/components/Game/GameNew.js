import React, { Component } from "react"
import '../../Assets/store.jpeg'


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = { username: "newtest", balance: 0, cpp: 0}
    this.attemptUpdateBal = this.attemptUpdateBal.bind(this);
    this.getBal = this.getBal.bind(this);
    this.setBal = this.setBal.bind(this);
  }

  getBal() {
    fetch("/app/users/getbal/"+this.state.username)
    .then(res => res.json())
    .then(json => {
      this.balance = json.result+1;
    })
  }

  setBal() {
    var setBal = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        balance: this.balance,
      }),
    };

    fetch("/app/users/setbal/"+this.state.username, setBal)
    .then(res => res.json())
  } 

  attemptUpdateBal() {
    this.getBal();
    this.setBal();
  }

  render() {
    return (
      <div className="gameboard">
        <div className="welcome">
          Welcome to *username*'s pizzeria'
        </div>
        <div className="wrapper">
        <button
          className="pizza_button"
          href="#"
          onClick={this.attemptUpdateBal}
        >
        </button>
        <div className="bank">
        BANK
        <div className="text">
         <p>Cost per Pizza:</p>
          <p>Total Spending:</p>
          <p>Revenue:</p>

        </div>
        </div>
        </div>
        <div className="bottomwrapper">
        <div className = "store">
          <h1 className="oven_header">Store</h1>
          <button className="oven">Convection Oven: $3500</button>
          <button className="oven">Brick Oven: $4000</button>
          <button className="oven">Conveyor Oven: $6000</button>
          <button className="oven">One Topping: $500</button>
          <button className="oven">Two Toppings: $750</button>
          <button className="oven">Three Toppings: $1000</button>
          </div>
        <div className = "leaderboard">
          Leaderboard
        </div>
        </div>
        
       
      </div>

    )
  }
}
export default Game
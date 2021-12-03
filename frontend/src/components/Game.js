import React, { Component } from "react"
import './Game.css'


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = { username: "newtest", pizzas: 0}
    this.attemptUpdatePizza = this.attemptUpdatePizza.bind(this);
    this.getPizzas = this.getPizzas.bind(this);
    this.setPizzas = this.setPizzas.bind(this);
  }

  getPizzas() {
    fetch("/app/users/getpizza/"+this.state.username)
    .then(res => res.json())
    .then(json => {
      this.pizzas = parseInt(json.result)+1;
    })
  }

  setPizzas() {
    var setPizzas = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pizzas: this.pizzas,
      }),
    };

    fetch("/app/users/setpizza/"+this.state.username, setPizzas)
    .then(res => res.json())
  } 

  attemptUpdatePizza() {
    this.getPizzas();
    this.setPizzas();
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
          onClick={this.attemptUpdatePizza}
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
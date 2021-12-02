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
      <div>
        <button
          className="button1"
          href="#"
          onClick={this.attemptUpdatePizza}
        >
          Pizza
        </button>
      </div>

    )
  }
}
export default Game
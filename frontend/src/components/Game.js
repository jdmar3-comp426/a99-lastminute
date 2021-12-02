import React, { Component } from "react"
import './Game.css'


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = { username: "sam", pizzas: 0 }
    this.attemptUpdatePizza = this.attemptUpdatePizza.bind(this);
  }

  attemptUpdatePizza() {
    fetch("/app/users/getpizza/"+this.state.username)
    // .then(res => res.json())
    // .then(json => {
      
    // })
    console.log(pizzas);
  }

  render() {
    return (
      <div>
        <button
          className="button1"
          href="#"
          onClick={this.attemptUpdatePizza}
        >
          Submit
        </button>
      </div>

    )
  }
}

export default Game
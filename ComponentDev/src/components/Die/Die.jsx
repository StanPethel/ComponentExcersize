import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  state = {
    numberOfSides: null,
    value: null
  };

  componentDidMount() {
    console.log("Component mounted!");
    // TODO: Set initial die value and number of sides
    // HINT: What props will this component take for number of sides?
    let randomRoll = this.setRandomDieValue();
    this.setState({
      numberOfSides: this.props.numberOfSides,
      value: randomRoll
    });
  }

  componentDidUpdate() {
    console.log("Component updated!");
  }

  setRandomDieValue() {
    return Math.floor(Math.random() * this.props.numberOfSides) + 1;
  }

  rollDie = () => {
    //TODO: Get a random die value and set state
    let randomRoll = this.setRandomDieValue();
    this.setState({
      value: randomRoll
    });
  };

  render() {
    console.log("Component rendered!");
    console.log(this.state);
    return (
      <div className="die-heading">
        <h1>Number of Sides: {this.state.numberOfSides}</h1>
        <h1>Current Die Value: {this.state.value}</h1>
        {/* TODO: Add a button element to roll the dice! */}
        <button onClick={this.rollDie}>Random Roll</button>
      </div>
    );
  }
}

export default Die;

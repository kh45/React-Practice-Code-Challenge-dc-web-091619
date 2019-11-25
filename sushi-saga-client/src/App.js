import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      round: 0,
      currentSushis: [],
      eatenSushis: [],
      wallet: 150
    }
  }


  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushis => this.setState({
      sushis: sushis,
    currentSushis: sushis.slice(0, 4)}))

  }

  nextRound = () => {
    console.log('hello')
    this.setState({
      round: this.state.round + 4
    })
    this.currentSushiRound()
  }

  // updateSushiRound = () => {
  //   console.log(this.state)
  //   this.setState({
  //     currentSushis: this.state.sushis.slice(this.state.round, this.state.round + 4)
  //   })
  // }

  currentSushiRound = () => {
    return this.state.sushis.slice(this.state.round, this.state.round + 4)
  }

  eatASushi = (sushi) => {
    if (this.state.wallet >= sushi.price) {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi], 
        wallet: this.state.wallet - sushi.price
      })
      return true
    } else {
      alert("You're broke!")
      return false
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer currentSushis={this.currentSushiRound()} nextRound={this.nextRound} eatASushi={this.eatASushi} wallet={this.state.wallet} />
        <Table eatenSushis={this.state.eatenSushis} wallet={this.state.wallet}  />
      </div>
    );
  }
}

export default App;
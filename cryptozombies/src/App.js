import React, { Component } from 'react';
import './App.css';
import getWeb3 from "./utils/getWeb3"


class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      web3: null,
      account: null
    }
  }
  componentDidMount () {
    getWeb3
      .then(results => {
        console.log(results)
        this.setState ({
          web3: results.web3
        })
      })
  }
  render () {
    return (
      <div className="container">
        <header className="">
          <h1>
            Cryptozombies dApp
          </h1>
          <p>
            Here are the smart contracts we will be deploying today:
          </p>
          <ul>
            <li>Ownable</li>
            <li>ZombieFactory</li>
            <li>ZombieFeeding</li>
            <li>ZombieHelper</li>
          </ul>
          <p>
            Here are the other fields that we are importing from web3
          </p>
          <ol>
            <li>Need a network id (to pass into the contract function)</li>
            <li>Need the account that is logged in / selected</li>
            <li>Need to get the balance? if you want; may not be relevant to this application but for others...</li>
            <li>Need functions that are specific to transactions (like signing, encrypting, etc.)</li>
            <li>Need the contract function so that we can get to our contracts</li>
          </ol>
        </header>
      </div>
    );
  }
}

export default App;
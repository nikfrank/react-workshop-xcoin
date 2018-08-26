import React, { Component } from 'react';
import './App.css';

import CoinPicker from './CoinPicker';
import RatesChart from './RatesChart';
import Navbar from './Navbar';

class App extends Component {
  state = {
    fromCoin: '',
    toCoin: '',
    historicalRates: [],
  }
  
  componentDidUpdate(prevProps, prevState){
    if( this.state.toCoin && this.state.fromCoin &&
        ( (this.state.fromCoin !== prevState.fromCoin ) ||
          (this.state.toCoin !== prevState.toCoin ) ) ) {

      fetch(`https://min-api.cryptocompare.com/data/histoday?`+
            `fsym=${this.state.fromCoin}&tsym=${this.state.toCoin}&limit=60&aggregate=3&e=CCCAGG`)
        .then( response => response.json() )
        .then( responseJson => {
          this.setState({ historicalRates: responseJson.Data });
        });
    }
  }
  
  setFrom = event=> this.setState({ fromCoin: event.target.value })
  setTo = event=> this.setState({ toCoin: event.target.value })

  setCoinPair = (fromCoin, toCoin)=> this.setState({ fromCoin, toCoin })
  
  render() {
    return (
      <div className="App">
        <Navbar onSetCoinPair={this.setCoinPair} />
        <CoinPicker fromCoin={this.state.fromCoin}
                    toCoin={this.state.toCoin}
                    setFrom={this.setFrom}
                    setTo={this.setTo}/>

        { this.state.historicalRates.length ? (
            <RatesChart rates={this.state.historicalRates}/>
        ) : null }
      </div>
    );
  }
}

export default App;

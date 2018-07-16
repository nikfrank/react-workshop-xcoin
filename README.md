# mini react course

in 4 quick steps, we'll go from nothing to a cryptocurrency converter widget online!

google ```npm``` and ```create-react-app``` to get the prerequisites


## getting started

```create-react-app xcoin```

```cd xcoin```

```npm start```

you now have the default create-react-app starter running in your browser and can edit the ```src``` files live


## step 1, make a component to pick currencies

```touch src/CoinPicker.js```

open the new file in your text editor

we'll now write the boilerplate React Component


./src/CoinPicker.js
```js
import React from 'react';

export default (props)=> (
  <div>
    Coming soon...
  </div>
);
```

and we will render one into our App

./src/App.js
```js
import React, { Component } from 'react';
import './App.css';

import CoinPicker from './CoinPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoinPicker/>
      </div>
    );
  }
}

export default App;
```

(at this point we can also delete most of App.css if you want, as we have deleted the elements being styled)


We'll want two dropdown ```<select>``` tags to choose our ```from``` and ```to``` currencies


first, create a state for our App and set two default coins

./src/App.js
```js
//...

class App extends Component {
  state = {
    fromCoin: 'WINGS',
    toCoin: 'USD',
  }
  
  render() {
    return (
      <div className="App">
        <CoinPicker fromCoin={this.state.fromCoin} toCoin={this.state.toCoin}/>
      </div>
    );
  }
}

//...
```

here we're passing the values to our CoinPicker via props, so it can display the current selection

[read more about React Component and Props here](https://reactjs.org/docs/components-and-props.html)


./src/CoinPicker.js
```js
export default ({ fromCoin, toCoin, setFrom, setTo })=> (
  <div className='CoinPicker'>
    <label>
      From
      <select value={fromCoin} onChange={setFrom}>
        <option value=''>Select From Coin</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='BTC'>BTC</option>
        <option value='ETH'>ETH</option>
        <option value='WINGS'>WINGS</option>
      </select>
    </label>

    <label>
      To
      <select value={toCoin} onChange={setTo}>
        <option value=''>Select To Coin</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='BTC'>BTC</option>
        <option value='ETH'>ETH</option>
        <option value='WINGS'>WINGS</option>
      </select>
    </label>
  </div>
);
```

Here we are using React's controlled input pattern [read more in their docs](https://reactjs.org/docs/forms.html)

We now need to make our onChange handlers (setFrom and setTo) to make our ```<select>```s work


./src/App.js
```js
//...
  setFrom = event=> this.setState({ fromCoin: event.target.value })
  setTo = event=> this.setState({ toCoin: event.target.value })
  
  render() {
    return (
      <div className="App">
        <CoinPicker fromCoin={this.state.fromCoin}
                    toCoin={this.state.toCoin}
                    setFrom={this.setFrom}
                    setTo={this.setTo}/>
      </div>
    );
  }
//...
```

now our ```<select>```s will trigger state updates from CoinPicker into App when on user change events!

[read here about React's this.setState](https://reactjs.org/docs/state-and-lifecycle.html)

We're following React's "lifting state" pattern which helps keep our logic organized... [read more here](https://reactjs.org/docs/lifting-state-up.html)

let's finish up by making a css file for our CoinPicker and adding a bit of style

```touch src/CoinPicker.css```


./src/CoinPicker.js
```js
import React from 'react';
import './CoinPicker.css';

//...
```

./src/CoinPicker.css
```css
.CoinPicker {
  padding: 4px;
}

.CoinPicker label {
  margin: 4px;
}

.CoinPicker select {
  margin-left: 8px;
  min-width: 150px;
}
```

That'll have to do for now. Nothing fancy!


We're done the first step - we can pick our currencies. Next is to gather data from an API





## step 2, gather data from an API

Whenever a user selects a new coin, we want to call an API to get historical conversion rates to display


When we get the data back from the api, we'll save it to our ```state```, so in step 3 we can pass it to a chart!



we'll use React's ```componentDidUpdate``` lifecycle method to trigger the call [read more here](https://reactjs.org/docs/react-component.html#componentdidupdate)


React will call this function whenever our state changes, so we'll want to make sure we can make a new request before bothering to call


./src/App.js
```js
//...
  componentDidUpdate(prevProps, prevState){
    if( this.state.toCoin && this.state.fromCoin &&
        ( (this.state.fromCoin !== prevState.fromCoin ) ||
          (this.state.toCoin !== prevState.toCoin ) ) ) {

      console.log('call api', this.state.fromCoin, this.state.toCoin);
    }
  }
//...
```

if that boolean statement looks weird to you read about [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

(we can check the console in our browser now to see when this is triggered)


we'll be using [cryptocompare's histoday api](https://www.cryptocompare.com/api/#-api-data-histoday-) for data

and the browser ```fetch``` for our http call [read about fetch here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)


```fetch``` uses ```Promise```s, if you want to try them out first [MDN has a playground here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)


Now let's fill in our API call!

./src/App.js
//...
  componentDidUpdate(prevProps, prevState){
    if( this.state.toCoin && this.state.fromCoin &&
        ( (this.state.fromCoin !== prevState.fromCoin ) ||
          (this.state.toCoin !== prevState.toCoin ) ) ) {

      fetch(`https://min-api.cryptocompare.com/data/histoday?`+
            `fsym=${this.state.fromCoin}&tsym=${this.state.toCoin}&limit=60&aggregate=3&e=CCCAGG`)
        .then( response => response.json() )
        .then( responseJson => {
          console.log(responseJson);
        });
    }
  }
//...
```

To make our request url we're using string template literals [read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)


We wait for the response,
 - *then* we parse the response as json
 - *then* we receive the responseJson and can do whatever we want with it

Try running this in the browser (set values for your currencies) and you'll see the responseJson logged to the console

we can see that the conversaion rate we want is in an array called ```.Data``` (not too expressive a name... SAD!)

each item in the array has a ```.time``` (which is in [unix epoch seconds](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)) and a few different rates (I pay attention to ```.open``` for simplicity's sake)


We'll be rendering this data into a chart in the next step. For now let's just save what we want to our ```.state```

.src/App.js
```js
//...

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
  
//...
```

good job! now we're ready for the last step


## step 3, making a chart

React has a wonderful ecosystem, with many packages ready to solve mot of our problems!

Let's add [recharts](https://npmjs.org/package/recharts)


examples available [here](http://recharts.org/en-US/examples)


from the command line (in our project root)

```yarn add recharts```


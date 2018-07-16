# mini react course

in 4 quick exercises, we'll go from nothing to a cryptocurrency converter widget!

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
  min-width: 100px;
}
```

That'll have to do for now. Nothing fancy!


We're done the first step - we can pick our currencies. Next is to gather data from an API





## step 2
# exercises for getting started with React

these exercises can be done in an off-the-shelf create-react-app

if you haven't already, follow out the [getting started instructions](https://github.com/nikfrank/react-workshop-xcoin/#getting-started) to get that running


## rendering basics

react at heart is just a view library, with which we render [JSX](https://reactjs.org/docs/introducing-jsx.html)

JSX is just javascript flavoured HTML, so first thing's first: let's practice rendering HTML through react


### exercises

in <sub>./src/App.js</sub> let's render a

1. `<div/>` with some text

2. `<p/>` with some text

3. `<img/>` with a valid imgSrc

4. `<ul/>` with some `<li/>`s with some text

5. `<input/>` with a label and some placeholder text


### solutions

<details>
<summary>Click here to view solutions for this section</summary>

1. update the `render` function to

```js
  render() {
    return (
      <div>look at me!</div>
    );
  }
```

(leaving everything else the same)


2. update the `render` function to

```js
  render() {
    return (
      <p>look at me!</p>
    );
  }
```

(leaving everything else the same)



3. update the `render` function to

```js
  render() {
    return (
      <img src='https://img.devrant.com/devrant/rant/r_432928_TaCud.jpg'/>
    );
  }
```

(leaving everything else the same)

take note! the self closing / at the end is REQUIRED in JSX (it was optional in HTML)


4. update the `render` function to

```js
  render() {
    return (
      <ul>
        <li>first</li>
        <li>second</li>
        <li>third</li>
      </ul>
    );
  }
```

(leaving everything else the same)



5. update the `render` function to

```js
  render() {
    return (
      <label>
        Click here to focus the input:
        <input placeholder='type here' />
      </label>
    );
  }
```

(leaving everything else the same)

</details>

---


## rendering javascript values

so that was all pretty much the same as plain old HTML, let's get to the good stuff!

here, we want to use [breakouts](https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx) to render javascript values into the page

once were inside the breakouts, we can write any [javascript expression](https://www.google.com/search?q=javascript+expression)


### exercises

let's practice rendering into a breakout a

1. String primitive and String stored in a `const` ([read about const if you need to](https://www.w3schools.com/js/js_const.asp))

2. Number primitive and Number stored in a `const`

3. Array primitive and Array stored in a `const`

4. Object primitive and Object stored in a `const`

5. Date primitive and Date stored in a `const`


### solutions

<details>
<summary>Click here to view solutions for this section</summary>



1. update the `render` function to

```js
  render() {
    const sentence = 'nik is great';
    
    return (
      <div>
        <p>{sentence}</p>
        <p>{'bender is also great'}</p>
      </div>
    );
  }
```

(leaving everything else the same)


2. update the `render` function to

```js
  render() {
    const amount = 3.5;
    
    return (
      <div>
        <p>${amount}</p>
        <p>₪{12.55}</p>
      </div>
    );
  }
```

(leaving everything else the same)



3. update the `render` function to

```js
  render() {
    const sequence = [1, 2, 4, 8, 'woo!'];
    
    return (
      <div>
        <p>{sequence}</p>
        <p>{[1, 0.5, 0.25, 0.125, 'hooray']}</p>
      </div>
    );
  }
```

(leaving everything else the same)


react by default renders just the elements with no divider, so if we want to format the output a bit we can do


```js
  render() {
    const sequence = [1, 2, 4, 8, 'woo!'];
    
    return (
      <div>
        <p>{sequence.join()}</p>
        <p>{[1, 0.5, 0.25, 0.125, 'hooray'].join()}</p>
      </div>
    );
  }
```

using the [Array.join method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)


4. react doesn't like objects being rendered directly, so we'll have to use [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to render them as strings

update the `render` function to

```js
  render() {
    const person = { name: 'nik', isGreat: true };
    
    return (
      <div>
        <p>{ JSON.stringify(person) }</p>
        <p>{ JSON.stringify({ name: 'bender', isGreat: true }) }</p>
      </div>
    );
  }
```

(leaving everything else the same)


5. react also doesn't like rendering `Date` objects directly, so here we can use [Date's .toString method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) to render

we can also render the `Date` as the [epoch time](https://www.google.com/search?q=unix+epoch+time) number using the newer [Date.now](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)

update the `render` function to

```js
  render() {
    const now = new Date();
    
    return (
      <div>
        <p>{now.toString()}</p>
        <p>{(new Date()).toString()}</p>
        <p>{Date.now()}</p>
      </div>
    );
  }
```

(leaving everything else the same)

</details>

---



## CSS basics in react

all of those HTML elements are ugly like 1996. Let's apply some CSS classes and rules to our elements to achieve web beauty.

react has two main ways to apply CSS: [className](https://reactjs.org/docs/faq-styling.html) and [style prop](https://reactjs.org/docs/dom-elements.html#style) here we will practice both.


### exercises

./src/App.js already does `import './App.css';`, so we can write our CSS into ./src/App.css 


1. render a `<div/>` with a `background-color` from CSS and a `border` from an inline `style` prop

2. render a `<p/>` with a `font-size` from CSS and a `color` from an inline `style` prop

3. render an `<img/>` with a `margin` from CSS and a `height` and `width` from an inline `style` prop

4. render a `<ul/>` with a `list-style` from CSS and `padding` from an inline `style` prop

5. render an `<input/>` with `border-radius` from CSS and `padding` from an inline `style` prop



### solutions

<details>
<summary>Click here to view solutions for this section</summary>


1. update the `render` function to

```js
  render() {
    return (
      <div className='shady' style={{ border: '1px solid black' }}>
        Shady div
      </div>
    );
  }
```

and in ./src/App.css add a rule

```css
.shady {
  background-color: #ddd;
}
```


2. update the `render` function to

```js
  render() {
    return (
      <p className='announcement' style={{ color: 'red' }}>
        whats up!
      </p>
    );
  }
```

and in ./src/App.css add a rule

```css
.announcement {
  font-size: 20px;
}
```


3. update the `render` function to

```js
  render() {
    return (
      <img src='https://img.devrant.com/devrant/rant/r_432928_TaCud.jpg'
           className='centered-image' style={{ height: '80vh', width: 'auto' }} />
    );
  }
```

and in ./src/App.css add a rule

```css
.centered-image {
  margin: 10vh auto;
}
```


4. update the `render` function to

```js
  render() {
    return (
      <ul className='simple-list' style={{ padding: 0 }}>
        <li>first</li>
        <li>second</li>
        <li>third</li>
      </ul>
    );
  }
```

and in ./src/App.css add a rule

```css
.simple-list {
  list-style: none;
}
```

this sample solution shows how to override the browser default styles on `<ul/>` which we commonly don't want!



5. update the `render` function to

```js
  render() {
    return (
      <input className='rounded' style={{ padding: 5 }} placeholder='type here'/>
    );
  }
```

and in ./src/App.css add a rule

```css
.rounded {
  border-radius: 5px;
}
```

that looks better!

</details>

---



## functions

javascript is all about functions. The only work you do that is possibly worth money is "writing functions". Everything is a function, even stuff you didn't know was a function. It's functions all the way down from here. Be one with the function, know its nature; you will master javascript.

We need to learn a word here "instance method". With all these functions, we need to name them by what they do and how they operate.

What is an instance method?

instance means we have the word "this". This cup is an instance of a cup - it has some cold coffee in it... if I want to heat up the coffee in this cup, I need to use an instance method this.heatCoffee, which will heat the coffee in this cup.

method is just a function associated with a `class`. Since `Component`s are all `class`es, "instance method" means a function defined on our `Component` `class` which operates on a single instance of that `Component`.

How do I write an instance method?

```js
import React, { Component } from 'react';

class App extends Component {

  state = { word: 'bird' }

  askIfYouveHeard = ()=> {
    console.log('have you heard that the ', this.state.word, ' is the word?');
  }

  render(){
    return (
      <div onClick={this.askIfYouveHeard}>{this.state.word}</div>
    );
  }
}

export default App;
```

in this silly example, `this.askIfYouveHeard` is an instance method (you can see it uses the keyword `this` in its body, so it has to be an *instance* method)

`this.state` is [in react] always an instance value, which is the same thing, it just isn't a function.

then `render` is a special case react lifecycle function which gives us the `this` keyword even though it's technically a static method (static is the opposite of instance)

now we want to write a bunch of instance methods, and use an `onClick` prop to bind the instance method to user click events.


### exercises

1. use an instance method to log a joke to the console on user click

2. use an instance method to [alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) on user click

3. use an instance method and a [setState](https://medium.freecodecamp.org/get-pro-with-react-setstate-in-10-minutes-d38251d1c781) to display the time of last click

4. use an instance method and a setState to count the user clicks

5. use an instance method a setState and two css classes to toggle day / night mode



### solutions

<details>
<summary>Click here to view solutions for this section</summary>



1.

```js
//...

  logClick = ()=> console.log('my girlfriend called, she said "come over, noone\'s home. I went over, noone was home!')

//...
  render(){
    return (
      <div onClick={this.logClick}>click me I dare you</div>
    );
  }
//...
```

note here I've used a [one line fat arrow function](https://www.google.com/search?q=one+line+fat+arrow+function)

you could have also written just as well

```js
//...

  logClick = ()=> {
    console.log('You can\'t get un-famous. You can get infamous, but you can\'t get un-famous.')
  }

//...
  render(){
    return (
      <div onClick={this.logClick}>click me I dare you</div>
    );
  }
//...
```



2.

```js
//...

  alertClick = ()=> alert('clicked!')

//...
  render(){
    return (
      <div onClick={this.alertClick}>click me I dare you</div>
    );
  }
//...
```


3.

```js
//...

  state = { lastClickTime: null }

  recordClickTime = ()=> this.setState({ lastClickTime: (new Date()).toString() })

//...
  render(){
    return (
      <div>
        <div onClick={this.recordClickTime}>click me I dare you</div>
        <div>{this.state.lastClickTime}</div>
      </div>
    );
  }
//...
```


4.

```js
//...

  state = { count: 0 }

  countClick = ()=> this.setState(state => ({ count: state.count+1 }) )

//...
  render(){
    return (
      <div>
        <div onClick={this.countClick}>click me I dare you</div>
        <div>{this.state.count}</div>
      </div>
    );
  }
//...
```


5.

```css
.day {
  background-color: white;
  color: black;
}

.night {
  background-color: black;
  color: white;
}
```


```js
//...

  state = { isDayMode: true }

  toggleDayMode = ()=> this.setState(state => ({ isDayMode: !state.isDayMode }) )

//...
  render(){
    return (
      <div className={this.state.isDayMode ? 'day' : 'night'}>
        <div onClick={this.toggleDayMode}>click me I dare you</div>
      </div>
    );
  }
//...
```

</details>

---


## import / export

The exercises so far have dealt only with work we want to do in one file. That's great, but if we keep working only in one file, soon it will get really long and be difficult to understand! What we want to do in react is write [Components](https://reactjs.org/docs/react-component.html) and to give them each their own file. Then we're going to import them into the ./src/App.js to render them out. [JS has a relatively new import/export syntax that we'll need to know to do these exercises](https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f)

Let's practice once:

from the command line (in the project root)

`$ touch src/BirdWord.js`

and in your text editor in the ./src/BirdWord.js file you've just made we can paste the silly example from earlier

<sub>./src/BirdWord.js</sub>
```js
import React, { Component } from 'react';

class BirdWord extends Component {

  state = { word: 'bird' }

  askIfYouveHeard = ()=> {
    console.log('have you heard that the ', this.state.word, ' is the word?');
  }

  render(){
    return (
      <div onClick={this.askIfYouveHeard}>{this.state.word}</div>
    );
  }
}
```

and at the end we need to export this Component

```js
//...

export default BirdWord;
```


to render it out now, let's import it in ./src/App.js


<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

import BirdWord from './BirdWord';

class App extends Component {

  render(){
    return (
      <BirdWord />
    );
  }
}

export default App;
```

that was fun! Now we can rewrite all of our function examples as Components...


### exercises

1. write a Component in its own file that logs a joke to the console on user click

2. write a Component in its own file that does an [alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) on user click

3. write a Component in its own file that does a [setState](https://medium.freecodecamp.org/get-pro-with-react-setstate-in-10-minutes-d38251d1c781) to display the time of last click

4. write a Component in its own file that does a setState to count the user clicks

5. write a Component in its own file that does a setState and two css classes to toggle day / night mode

5.b. make a separate css file for this Component (./src/ComponentName.css) for the two css rules to live in



### solutions

<details>
<summary>Click here to view solutions for this section</summary>


1. `$ touch ./src/Joke.js`

<sub>./src/Joke.js</sub>
```js
import React, { Component } from 'react';

class Joke extends Component {

  logClick = ()=> console.log('my girlfriend called, she said "come over, noone\'s home. I went over, noone was home!')

  render(){
    return (
      <div onClick={this.logClick}>click me I dare you</div>
    );
  }
}

export default Joke;
```

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

import BirdWord from './BirdWord';
import Joke from './Joke';

class App extends Component {

  render(){
    return (
      <div>
        <BirdWord />
        <Joke />
      </div>
    );
  }
}

export default App;
```


2. `$ touch ./src/Alarm.js`

<sub>./src/Alarm.js</sub>
```js
import React, { Component } from 'react';

class Alarm extends Component {

  alertClick = ()=> alert('clicked!')

  render(){
    return (
      <div onClick={this.alertClick}>click me I dare you</div>
    );
  }
}

export default Alarm;
```

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

import BirdWord from './BirdWord';
import Joke from './Joke';
import Alarm from './Alarm';

class App extends Component {

  render(){
    return (
      <div>
        <BirdWord />
        <Joke />
        <Alarm />
      </div>
    );
  }
}

export default App;
```

3. `$ touch ./src/LastSeen.js`

<sub>./src/LastSeen.js</sub>
```js
import React, { Component } from 'react';

class LastSeen extends Component {

  state = { lastClickTime: null }

  recordClickTime = ()=> this.setState({ lastClickTime: (new Date()).toString() })

  render(){
    return (
      <div>
        <div onClick={this.recordClickTime}>click me I dare you</div>
        <div>{this.state.lastClickTime}</div>
      </div>
    );
  }
}

export default LastSeen;
```

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

import BirdWord from './BirdWord';
import Joke from './Joke';
import Alarm from './Alarm';
import LastSeen from './LastSeen';

class App extends Component {

  render(){
    return (
      <div>
        <BirdWord />
        <Joke />
        <Alarm />
        <LastSeen />
      </div>
    );
  }
}

export default App;
```


4. `$ touch ./src/LastSeen.js`

<sub>./src/LastSeen.js</sub>
```js
import React, { Component } from 'react';

class LastSeen extends Component {

  state = { lastClickTime: null }

  recordClickTime = ()=> this.setState({ lastClickTime: (new Date()).toString() })

  render(){
    return (
      <div>
        <div onClick={this.recordClickTime}>click me I dare you</div>
        <div>{this.state.lastClickTime}</div>
      </div>
    );
  }
}

export default LastSeen;
```

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

import BirdWord from './BirdWord';
import Joke from './Joke';
import Alarm from './Alarm';
import LastSeen from './LastSeen';

class App extends Component {

  render(){
    return (
      <div>
        <BirdWord />
        <Joke />
        <Alarm />
        <LastSeen />
      </div>
    );
  }
}

export default App;
```


5. `$ touch ./src/DayNightToggle.js`

<sub>./src/DayNightToggle.js</sub>
```js
import React, { Component } from 'react';
import './DayNightToggle.css';

class DayNightToggle extends Component {

  state = { isDayMode: true }

  toggleDayMode = ()=> this.setState(state => ({ isDayMode: !state.isDayMode }) )

  render(){
    return (
      <div className={this.state.isDayMode ? 'day' : 'night'}>
        <div onClick={this.toggleDayMode}>click me I dare you</div>
      </div>
    );
  }
}

export default DayNightToggle;
```

`$ touch ./src/DayNightToggle.css`

<sub>./src/DayNightToggle.css</sub>
```css
.day {
  background-color: white;
  color: black;
}

.night {
  background-color: black;
  color: white;
}
```


<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

import BirdWord from './BirdWord';
import Joke from './Joke';
import Alarm from './Alarm';
import LastSeen from './LastSeen';
import DayNightToggle from './DayNightToggle';

class App extends Component {

  render(){
    return (
      <div>
        <BirdWord />
        <Joke />
        <Alarm />
        <LastSeen />
        <DayNightToggle />
      </div>
    );
  }
}

export default App;
```


</details>

---




## rendering props

You've probably seen already in the [reactjs.org/docs](https://reactjs.org/docs/components-and-props.html) links in these exercises `props` in Components. Props are how we pass values to our Components from the (parent) Components which render them. Programming each Component with just the props they need is very important, mostly we'll learn the art through practice!

Let's practice by setting the `word` in our `BirdWord` Component via prop


<sub>./src/BirdWord.js</sub>
```js
import React, { Component } from 'react';

class BirdWord extends Component {

  askIfYouveHeard = ()=> {
    console.log('have you heard that the ', this.props.word, ' is the word?');
  }

  render(){
    return (
      <div onClick={this.askIfYouveHeard}>{this.props.word}</div>
    );
  }
}

export default BirdWord;
```


now that we're using `this.props.word`, we'll need to have set it from ./src/App.js


<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

import BirdWord from './BirdWord';

class App extends Component {

  render(){
    return (
      <BirdWord word='bird'/>
    );
  }
}

export default App;
```


### exercises

1. pass a Number as a prop to a new Component to render

2. pass an Array as a prop to a new Component to render

3. pass an Object with a String field like `{ name: 'nik' }` to a new Component to render

4. pass a url for an image as a prop to a new Component along with a string title as a prop, render the correct image and title

5. pass an Array of image urls as a prop for a new Component to render (each separately)


### solutions

<details>
<summary>Click here to view solutions for this section</summary>


1. `$ touch ./src/Price.js`

<sub>./src/Price.js</sub>
```js
import React, { Component } from 'react';

class Price extends Component {
  render(){
    return (
      <div> $ { this.props.amount } </div>
    );
  }
}

export default Price;
```

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import Price from './Price';

class App extends Component {
  //...
  
  render(){
    return (
      <div>
        //...
        <Price amount={3.50} />
      </div>
    );
  }
}

export default App;
```


2. `$ touch ./src/YearlyPayments.js`

<sub>./src/YearlyPayments.js</sub>
```js
import React, { Component } from 'react';

class YearlyPayments extends Component {
  render(){
    return (
      <ul>
        <li> January: $ { this.props.amounts[0] } </li>
        <li> February: $ { this.props.amounts[1] } </li>
        <li> March: $ { this.props.amounts[2] } </li>
        <li> April: $ { this.props.amounts[3] } </li>
        <li> May: $ { this.props.amounts[4] } </li>
        <li> June: $ { this.props.amounts[5] } </li>
        <li> July: $ { this.props.amounts[6] } </li>
        <li> August: $ { this.props.amounts[7] } </li>
        <li> September: $ { this.props.amounts[8] } </li>
        <li> October: $ { this.props.amounts[9] } </li>
        <li> November: $ { this.props.amounts[10] } </li>
        <li> December: $ { this.props.amounts[11] } </li>
      </ul>
    );
  }
}

export default YearlyPayments;
```

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import YearlyPayments from './YearlyPayments';

class App extends Component {
  //...
  
  render(){
    return (
      <div>
        //...
        <YearlyPayments amounts={[ 3.50, 10.22, 0.56,
                                   0.78, 9.99, 11.35,
                                   19.72, 35.01, 109.14,
                                   6.21, 8.31, 11.75 ]} />
      </div>
    );
  }
}

export default App;
```


3. `$ touch ./src/NameTag.js`

<sub>./src/NameTag.js</sub>
```js
import React, { Component } from 'react';

class NameTag extends Component {
  render(){
    return (
      <div> {this.props.name.last}, {this.props.name.first} </div>
    );
  }
}

export default NameTag;
```

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import NameTag from './NameTag';

class App extends Component {
  //...
  
  render(){
    return (
      <div>
        //...
        <NameTag name={ {first: 'peter', last: 'parker'} } />
      </div>
    );
  }
}

export default App;
```



4. `$ touch ./src/TitledImage.js`

<sub>./src/TitledImage.js</sub>
```js
import React, { Component } from 'react';

class TitledImage extends Component {
  render(){
    return (
      <div>
        <img src={this.props.imgSrc}/>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default TitledImage;
```

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import TitledImage from './TitledImage';

class App extends Component {
  //...
  
  render(){
    return (
      <div>
        //...
        <TitledImage imgSrc='https://maksimivanov.com/static/state_vs_props-8a0bbd9513656646d76db1f636c06db0-ef9ea.png'
                     title='Props and State' />
      </div>
    );
  }
}

export default App;
```

5. `$ touch ./src/VersusImages.js`

<sub>./src/VersusImages.js</sub>
```js
import React, { Component } from 'react';

class VersusImages extends Component {
  render(){
    return (
      <div>
        <img src={this.props.imgSrcs[0]}/>
        vs.
        <img src={this.props.imgSrcs[1]}/>
      </div>
    );
  }
}

export default VersusImages;
```

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import VersusImages from './VersusImages';

class App extends Component {
  //...
  
  render(){
    return (
      <div>
        //...
        <VersusImages imgSrcs={[
          'https://vignette.wikia.nocookie.net/simpsons/images/8/80/Drederick_tatum_tapped_out.png',
          'https://i.pinimg.com/originals/b0/5b/83/b05b8334bf4502c675f741059b5b3eb8.gif',
        ]} />
      </div>
    );
  }
}

export default App;
```

</details>

---



## props that change


Great! Usually though, we're going to keep our `state` in the Parent Component, and pass the values through `props` to the smaller Components

This pattern is called [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) and is an officially promoted pattern!

Let's see what that looks like:


<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import BirdWord from './BirdWord';

class App extends Component {

  state = { word: 'bird' }

  render(){
    return (
      <BirdWord word={this.state.word} />
    );
  }
}

export default App;
```

now that the prop value is a javascript variable, we need to use the `{}` breakouts to evaluate it (earlier we saw a string, which we can just write like an oldschool HTML attribute)

Why would we do that? good question; the reason is that the `state` value might change! when it does we'll want to the new value sent to our prop right away

React does that for us: [when we update the state, React will update that Component and its children](https://reactjs.org/docs/react-component.html#setstate)

and what would that look like?


<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

import BirdWord from './BirdWord';

class App extends Component {

  state = { word: 'bird' }

  makeWordFrench = ()=> this.setState({ word: 'oiseau' })

  render(){
    return (
      <div>
        <button onClick={this.makeWordFrench}>Change the Word</button>
        <BirdWord word={this.state.word} />
      </div>
    );
  }
}

export default App;
```

This is a sneak preview of passing a `function` as a `prop` (`this.makeWordFrench` is a function, passed into the `onClick` `prop`), which we'll cover in the next set of exercises.


### exercises

in each of your solutions from the previous section,

store the value in `state` in ./src/App.js

write an instance method + button which will allow you to change the prop

then see that react updates the child Component for you



### solutions

<details>
<summary>Click here to view solutions for this section</summary>


1. (leaving ./src/Price.js the same)

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import Price from './Price';

class App extends Component {
  state = {
    //...
    amount: 3.5,
  }

  doubleAmount = ()=> this.setState({ amount: this.state.amount * 2 })

  //...
  
  render(){
    return (
      <div>
        //...
        <button onClick={this.doubleAmount}>Double</button
        <Price amount={this.state.amount} />
      </div>
    );
  }
}

export default App;
```


2. (leaving ./src/YearlyPayments.js the same)

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import YearlyPayments from './YearlyPayments';

class App extends Component {
  state = {
    //...
    amounts: [ 3.50, 10.22, 0.56,
               0.78, 9.99, 11.35,
               19.72, 35.01, 109.14,
               6.21, 8.31, 11.75 ],
  }
  
  halveAmounts = ()=> this.setState({ amounts: this.state.amounts.map(a => a/2) })

  //...

  render(){
    return (
      <div>
        //...
        <button onClick={this.halveAmounts}>that costs too much, I want to pay half that much</button>
        <YearlyPayments amounts={this.state.amounts} />
      </div>
    );
  }
}

export default App;
```

[read up on Array.map it's very powerful!](https://www.google.com/search?q=array+map)


3. (leaving ./src/NameTag.js the same)

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import NameTag from './NameTag';

class App extends Component {
  state = {
    //...
    name: { first: 'peter', last: 'parker' },
  }

  uncoverSecretIdentity = ()=> this.setState({ name: { first: 'the amazing', last: 'spiderman' } })
  
  //...

  render(){
    return (
      <div>
        //...
        <button onClick={this.uncoverSecretIdentity}>who is it?</button>
        <NameTag name={this.state.name} />
      </div>
    );
  }
}

export default App;
```



4. (leaving ./src/TitledImage.js the same)

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import TitledImage from './TitledImage';

class App extends Component {
  state = {
    //...
    imgSrc: 'https://maksimivanov.com/static/state_vs_props-8a0bbd9513656646d76db1f636c06db0-ef9ea.png',
    imageTitle: 'Props and State',
  }

  nextSlide = ()=> this.setState({
    imgSrc: 'https://cdn-images-1.medium.com/max/1600/1*pGx4m8PKCXw0lRdwdCeRSg@2x.jpeg',
    imageTitle: 'setState can use an updater pattern',
  })
  
  //...

  render(){
    return (
      <div>
        //...
        <button onClick={this.nextSlide}>NEXT</button>
        <TitledImage imgSrc={this.state.imgSrc}
                     title={this.state.imageTitle} />
      </div>
    );
  }
}

export default App;
```

5. (leaving ./src/VersusImages.js the same)

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import VersusImages from './VersusImages';

class App extends Component {
  state = {
    //...
    imgSrcs: [
      'https://vignette.wikia.nocookie.net/simpsons/images/8/80/Drederick_tatum_tapped_out.png',
      'https://i.pinimg.com/originals/b0/5b/83/b05b8334bf4502c675f741059b5b3eb8.gif',    
    ],
  }

  nextFight = ()=> this.setState({
    imgSrcs: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/220px-Squidward_Tentacles.svg.png',
    ],
  })
  
  render(){
    return (
      <div>
        //...
        <button onClick={this.nextFight}>Show me the next fighters</button>
        <VersusImages imgSrcs={this.state.imgSrcs} />
      </div>
    );
  }
}

export default App;
```

</details>

---



## function props

When we have our `state` in a Parent Component, we need our `setState` calls to be in the Parent Component (obviously). But what if we want our child Component to trigger the update?

To do that, we can make the function with the `setState` call in the Parent Component, and pass that function to the child Component as a prop

Let's see what that looks like:

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

import BirdWord from './BirdWord';

class App extends Component {
  state = { word: 'bird' }

  setWord = word => this.setState({ word })

  render(){
    return (
      <BirdWord word={this.state.word} onUpdate={this.setWord} />
    );
  }
}

export default App;
```

<sub>./src/BirdWord.js</sub>
```js
import React, { Component } from 'react';

class BirdWord extends Component {
  askIfYouveHeard = ()=> {
    console.log('have you heard that the ', this.props.word, ' is the word?');
  }

  changeToFrench = ()=> this.props.onUpdate('oiseau')
  changeToItalian = ()=> this.props.onUpdate('uccello')

  render(){
    return (
      <div>
        <div onClick={this.askIfYouveHeard}>{this.props.word}</div>
        <button onClick={this.changeToFrench}>Quoi?</button>
        <button onClick={this.changeToItalian}>Cosa?</button>
      </div>
    );
  }
}

export default BirdWord;
```

We now achieved "Separation of Concerns" by putting all of the view logic in the child Component, and all of the state management logic in the Parent Component.

This pattern will allow us to treat our Components as the "single source of truth" for their domain logic. If you have a question about that Component, it will be answered in that file (the Parent Component maintains control without becoming complex)

And it allowed us to easily add a feature (Italian) to our Component.

It will often be the case that organizing our Components correctly makes building features easier forever and ever.

Let's practice:

### exercises

in each of your solutions from the previous section,

move the `<button/>` to the child Component

pass the instance method (function) as a `prop` to the Component

call the prop function from the `<button/>`'s `onClick`

(that's called "refactoring")


### solutions

<details>
<summary>Click here to view solutions for this section</summary>


1.

<sub>./src/Price.js</sub>
```js
import React, { Component } from 'react';

class Price extends Component {

  double = ()=> this.props.onUpdate(this.props.amount * 2)
  triple = ()=> this.props.onUpdate(this.props.amount * 3)

  render(){
    return (
      <div>
        <button onClick={this.double}>Double</button>
        <button onClick={this.triple}>Triple</button>
        <div> $ { this.props.amount } </div>
      </div>
    );
  }
}

export default Price;
```

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import Price from './Price';

class App extends Component {
  state = {
    //...
    amount: 3.5,
  }

  updateAmount = amount=> this.setState({ amount })

  //...
  
  render(){
    return (
      <div>
        //...
        <Price amount={this.state.amount} onUpdate={this.updateAmount} />
      </div>
    );
  }
}

export default App;
```


2.

<sub>./src/YearlyPayments.js</sub>
```js
import React, { Component } from 'react';

class YearlyPayments extends Component {

  double = ()=> this.props.onUpdate(this.props.amounts.map(a=> a * 2))
  halve = ()=> this.props.onUpdate(this.props.amounts.map(a=> a / 2))

  render(){
    return (
      <div>
        <button onClick={this.double}>Double</button>
        <button onClick={this.halve}>Halve</button>
        
        <ul>
          <li> January: $ { this.props.amounts[0] } </li>
          <li> February: $ { this.props.amounts[1] } </li>
          <li> March: $ { this.props.amounts[2] } </li>
          <li> April: $ { this.props.amounts[3] } </li>
          <li> May: $ { this.props.amounts[4] } </li>
          <li> June: $ { this.props.amounts[5] } </li>
          <li> July: $ { this.props.amounts[6] } </li>
          <li> August: $ { this.props.amounts[7] } </li>
          <li> September: $ { this.props.amounts[8] } </li>
          <li> October: $ { this.props.amounts[9] } </li>
          <li> November: $ { this.props.amounts[10] } </li>
          <li> December: $ { this.props.amounts[11] } </li>
        </ul>
      </div>
    );
  }
}

export default YearlyPayments;
```

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import YearlyPayments from './YearlyPayments';

class App extends Component {
  state = {
    //...
    amounts: [ 3.50, 10.22, 0.56,
               0.78, 9.99, 11.35,
               19.72, 35.01, 109.14,
               6.21, 8.31, 11.75 ],
  }
  
  updateAmounts = amounts=> this.setState({ amounts })

  //...

  render(){
    return (
      <div>
        //...
        <YearlyPayments amounts={this.state.amounts} onUpdate={this.updateAmounts} />
      </div>
    );
  }
}

export default App;
```

[read up on Array.map it's very powerful!](https://www.google.com/search?q=array+map)


3.

<sub>./src/NameTag.js</sub>
```js
import React, { Component } from 'react';

class NameTag extends Component {

  uncoverSecretIdentity = ()=> this.props.onUpdate({ first: 'the amazing', last: 'spiderman' })

  render(){
    return (
      <div>
        <div> {this.props.name.last}, {this.props.name.first} </div>
        <button onClick={this.uncoverSecretIdentity}>who is peter parker?</button>
      </div>
    );
  }
}

export default NameTag;
```


<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import NameTag from './NameTag';

class App extends Component {
  state = {
    //...
    name: { first: 'peter', last: 'parker' },
  }

  updateName = name=> this.setState({ name })
  
  //...

  render(){
    return (
      <div>
        //...
        <NameTag name={this.state.name} onUpdate={this.updateName} />
      </div>
    );
  }
}

export default App;
```



4.

<sub>./src/TitledImage.js</sub>
```js
import React, { Component } from 'react';

class TitledImage extends Component {

  render(){
    return (
      <div>
        <img src={this.props.imgSrc} onClick={this.props.onNext}/>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default TitledImage;
```


<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import TitledImage from './TitledImage';

class App extends Component {
  state = {
    //...
    imgSrc: 'https://maksimivanov.com/static/state_vs_props-8a0bbd9513656646d76db1f636c06db0-ef9ea.png',
    imageTitle: 'Props and State',

    
    nextImgSrc: 'https://cdn-images-1.medium.com/max/1600/1*pGx4m8PKCXw0lRdwdCeRSg@2x.jpeg',
    nextImageTitle: 'setState can use an updater pattern',
  }

  nextSlide = ()=> this.setState({ imgSrc: this.state.nextImgSrc, imageTitle: this.state.nextImageTitle })
  
  //...

  render(){
    return (
      <div>
        //...
        <TitledImage imgSrc={this.state.imgSrc}
                     title={this.state.imageTitle}
                     onNext={this.onNext} />
      </div>
    );
  }
}

export default App;
```

if we were making a real slideshow Component, we'd probably have an Array full of objects to cycle through!

I may have broken the rules a bit with this answer. **It was to teach you how to break the rules!**

5.

<sub>./src/VersusImages.js</sub>
```js
import React, { Component } from 'react';

class VersusImages extends Component {
  render(){
    return (
      <div>
        <img src={this.props.imgSrcs[0]}/>
        vs.
        <img src={this.props.imgSrcs[1]}/>
        <button onClick={this.props.nextFight}>Show me the next fighters</button>
      </div>
    );
  }
}

export default VersusImages;
```


<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

//...
import VersusImages from './VersusImages';

class App extends Component {
  state = {
    //...
    imgSrcs: [
      'https://vignette.wikia.nocookie.net/simpsons/images/8/80/Drederick_tatum_tapped_out.png',
      'https://i.pinimg.com/originals/b0/5b/83/b05b8334bf4502c675f741059b5b3eb8.gif',
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/220px-Squidward_Tentacles.svg.png',
    ],

    currentFighters: [0, 1],
  }

  nextFight = ()=> this.setState({
    currentFighters: [
      Math.floor( Math.random()*this.state.imgSrcs.length ),
      Math.floor( Math.random()*this.state.imgSrcs.length ),
    ]
  })
  
  render(){
    return (
      <div>
        //...
        <VersusImages imgSrcs={this.state.currentFighters.map(f => this.state.imgSrcs[f])}
                      nextFight={this.nextFight} />
      </div>
    );
  }
}

export default App;
```

read more about [Math.floor](https://www.google.com/search?q=js+Math+floor) [Math.random](js+Math+random) and [Array.map](https://www.google.com/search?q=array+map)

</details>

---



## function Components

Now that we took all of the state logic and instance methods out of our child Components, there's nothing left that uses the `this` keyword!

And so, we will be able to write *just* a render function

<sub>./src/BirdWord.js</sub>
```js
import React, { Component } from 'react';

const askIfYouveHeard = word=> console.log('have you heard that the ', word, ' is the word?');

class BirdWord extends Component {
  render(){
    return (
      <div>
        <div onClick={()=> askIfYouveHeard(this.props.word)}>{this.props.word}</div>
        <button onClick={()=> this.props.onUpdate('oiseau')}>Quoi?</button>
      </div>
    );
  }
}

export default BirdWord;
```

(here we're using the "baking it in" pattern to pass our argument `this.props.word` to a function call `()=> askIfYouveHeard(this.props.word)`)

so that `class` notation seems a bit clunky now eh?

the good people at React thought the same thing, so they gave us [Functional Components](https://www.robinwieruch.de/react-function-component/)

which let's us write just the render function, taking `props` as a parameter

we can rewrite our example as

<sub>./src/BirdWord.js</sub>
```js
import React from 'react';

const askIfYouveHeard = word=> console.log('have you heard that the ', word, ' is the word?');

const BirdWord = (props)=> (
  <div>
    <div onClick={()=> askIfYouveHeard(props.word)}>{props.word}</div>
    <button onClick={()=> props.onUpdate('oiseau')}>Quoi?</button>
  </div>
);

export default BirdWord;
```

now we can convert all of our Components to this (improved) style

### exercises

in each of your solutions from the previous section,

refactor the child Component to be a functional component


### solutions

<details>
<summary>Click here to view solutions for this section</summary>


1.

2.

3.

4.

5.


</details>

---



## user input

The last topic we need to cover for this workshop is the basic flow for user inputs. React has [one direction of data flow](https://medium.embengineering.com/in-react-js-data-flows-in-one-direction-from-parent-to-child-841103ed3aed): your Component tells the input what its current value is, and what function to call when it thinks it wants to change (eg. the user typed or picked a different option)

What does that look like?

<sub>./src/App.js</sub>
```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { name: '' }

  onNameChange = event => this.setState({ name: event.target.value })

  render(){
    return (
      <input value={this.state.name} onChange={this.onNameChange} placeholder='Type Name Here'/>
    );
  }
}

export default App;
```

This pattern is called [controlled input](https://reactjs.org/docs/forms.html)

we will cover this more in depth in the next Application (Snoop Jobs) - it is important here to understand the basic mechanic only.

### exercises

1. follow the example to make an `<input/>` for a string state value

2. apply `type='number'` to the `<input/>` to make our `event.target.value` a number. Change the variable name to make sense!

3. apply `type='checkbox'` to the `<input/>` to make our event.target.value a boolean. Change the variable name to make sense!


### solutions

<details>
<summary>Click here to view solutions for this section</summary>


1.

2.

3.


</details>

---


## done

now that you're done all the exercises, you're definitely ready to do the workshop (and understand what you're doing while you do it!)
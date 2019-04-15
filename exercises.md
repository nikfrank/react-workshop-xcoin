# exercises for getting started with React

these exercises can be done in an off-the-shelf create-react-app

if you haven't already, follow out the [getting started instructions](https://github.com/nikfrank/react-workshop-xcoin/#getting-started) to get that running


## rendering basics

react at heart is just a view library, with which we render [JSX](https://reactjs.org/docs/introducing-jsx.html)

JSX is just javascript flavoured HTML, so first thing's first: let's practice rendering HTML through react

in <sub>./src/App.js</sub> let's render a

1. `<div/>` with some text

2. `<p/>` with some text

3. `<img/>` with a valid imgSrc

4. `<ul/>` with some `<li/>`s with some text

5. `<input/>` with a label and some placeholder text


### solutions

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



## rendering javascript values

so that was all pretty much the same as plain old HTML, let's get to the good stuff!

here, we want to use [breakouts](https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx) to render javascript values into the page

once were inside the breakouts, we can write any [javascript expression](https://www.google.com/search?q=javascript+expression)

let's practice rendering into a breakout a

1. String primitive and String stored in a `const` ([read about const if you need to](https://www.w3schools.com/js/js_const.asp))

2. Number primitive and Number stored in a `const`

3. Array primitive and Array stored in a `const`

4. Object primitive and Object stored in a `const`

5. Date primitive and Date stored in a `const`


### solutions


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



## CSS basics in react

all of those HTML elements are ugly like 1996. Let's apply some CSS classes and rules to our elements to achieve web beauty.

react has two main ways to apply CSS: [className](https://reactjs.org/docs/faq-styling.html) and [style prop](https://reactjs.org/docs/dom-elements.html#style) here we will practice both.

./src/App.js already does `import './App.css';`, so we can write our CSS into ./src/App.css 


1. render a `<div/>` with a `background-color` from CSS and a `border` from an inline `style` prop

2. render a `<p/>` with a `font-size` from CSS and a `color` from an inline `style` prop

3. render an `<img/>` with a `margin` from CSS and a `height` and `width` from an inline `style` prop

4. render a `<ul/>` with a `list-style` from CSS and `padding` from an inline `style` prop

5. render an `<input/>` with `border-radius` from CSS and `padding` from an inline `style` prop



### solutions

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


1. use an instance method to log a joke to the console on user click

2. use an instance method to [alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) on user click

3. use an instance method and a [setState](https://medium.freecodecamp.org/get-pro-with-react-setstate-in-10-minutes-d38251d1c781) to display the time of last click

4. use an instance method and a setState to count the user clicks

5. use an instance method a setState and two css classes to toggle day / night mode



### solutions


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



1. write a Component in its own file that logs a joke to the console on user click

2. write a Component in its own file that does an [alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) on user click

3. write a Component in its own file that does a [setState](https://medium.freecodecamp.org/get-pro-with-react-setstate-in-10-minutes-d38251d1c781) to display the time of last click

4. write a Component in its own file that does a setState to count the user clicks

5. write a Component in its own file that does a setState and two css classes to toggle day / night mode

5.b. make a separate css file for this Component (./src/ComponentName.css) for the two css rules to live in



### solutions

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

Great! 






[Functional Components](https://www.robinwieruch.de/react-function-component/)

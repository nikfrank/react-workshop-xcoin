# exercises for getting started with React

these exercises can be done in an off-the-shelf create-react-app

if you haven't already, follow out the [getting started instructions](/#getting-started) to get that running


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

1.

update the `render` function to

```js
  render() {
    return (
      <div>look at me!</div>
    );
  }
```

(leaving everything else the same)


2.

update the `render` function to

```js
  render() {
    return (
      <p>look at me!</p>
    );
  }
```

(leaving everything else the same)



3.

update the `render` function to

```js
  render() {
    return (
      <img src='https://img.devrant.com/devrant/rant/r_432928_TaCud.jpg'/>
    );
  }
```

(leaving everything else the same)

take note! the self closing / at the end is REQUIRED in JSX (it was optional in HTML)


4.

update the `render` function to

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



5.

update the `render` function to

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


1.

update the `render` function to

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


2.

update the `render` function to

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



3.

update the `render` function to

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


react by default renders just the string elements, so if we want to format the output a bit we can do


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


4.

react doesn't like objects being rendered directly, so we'll have to use [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to render them as strings

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


5.

react also doesn't like rendering `Date` objects directly, so here we can use [Date's .toString method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) to render

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






format:

take an example out of the app

tag it with a few concepts it uses

write 5 examples of using each concept written as challenge prompts

eg

1. `use an instance method fat arrow to log on user click`

2. `use an instance method fat arrow to alert on user click`

3. `use an instance method fat arrow and a setState to display the time of last click`

4. `use an instance method fat arrow and a setState to count the user clicks`

5. `use an instance method fat arrow a setState and two css classes to toggle day / night mode`

...

solutions, start from a fresh create-react-app


1.

```js
//...

  logClick = ()=> console.log('clicked!');

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

  alertClick = ()=> alert('clicked!');

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

  recordClickTime = ()=> this.setState({ lastClickTime: (new Date()).toString() });

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

  countClick = ()=> this.setState(state => ({ count: state.count+1 }) );

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

  toggleDayMode = ()=> this.setState(state => ({ isDayMode: !state.isDayMode }) );

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
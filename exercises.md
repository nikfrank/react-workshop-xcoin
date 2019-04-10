# exercises

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
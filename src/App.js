import React from 'react'
import "./App.css"

export default class App extends React.Component{
  constructor() {
    super();
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      count: 0
    }
  }
  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }
  increase = () => {
    return this.setState({...this.state, count: this.state.count + 1});
  };

  render() {

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{this.state.count}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={this.increase}>Click Me!</button>
      </div>
    </div>
  );
}
}



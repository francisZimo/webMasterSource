import React, { Component } from 'react'
import {createStore} from 'redux'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const store = createStore(reducer);

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }


  render() {

    const Counter = ({ value, onIncrement, onDecrement }) => (
      <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );

    return null;
  }
};

export default store.subscribe(Example)

export default Example
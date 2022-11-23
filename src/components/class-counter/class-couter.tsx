import React from "react";
import './class-counter.scss'

interface IState {
  counter: number;
}

class ClassCounter extends React.Component<Record<string, unknown>, IState> {
  state = { counter: 0 };

  setCounter = (value: number): void => {
    this.setState((prev) => {
      return {
        ...prev,
        counter: prev.counter + value,
      };
    });
  };

  render() {
    return (
      <div className='classcounter'>
        <span className ="classcounter__value">{this.state.counter}</span>
        <button className ="classcounter__button"onClick={() => this.setCounter(1)}>Increment</button>
        <button className ="classcounter__button"onClick={() => this.setCounter(-1)}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;

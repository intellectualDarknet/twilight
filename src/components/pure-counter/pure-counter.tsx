import React from "react";
import './pure-counter.scss';

interface IState {
  counter: number;
}

class PureCounter extends React.PureComponent<Record<string, unknown>, IState> {
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
      <div className="purecounter">
        <div className="purecounter__value" >{this.state.counter}</div>
        <button className="purecounter__button" onClick={() => this.setCounter(1)}>Increment</button>
        <button className="purecounter__button" onClick={() => this.setCounter(-1)}>Decrement</button>
      </div>
    );
  }
}

export default PureCounter;

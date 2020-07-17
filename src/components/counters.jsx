import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counter } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counter.map((counter, index) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            id={index}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

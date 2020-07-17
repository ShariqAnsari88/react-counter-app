import React, { Component } from "react";
import Navbar from "./components/navBar";
import Counters from "./components/counters";

import "./App.css";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (count) => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(count);
    counter[index] = { ...count };
    counter[index].value++;
    this.setState({ counter });
  };

  handleDelete = (counterId) => {
    // Delete array object using splice method
    // const counter = this.state.counter;
    // counter.splice(counterId, 1);
    // this.setState({ counter });

    // Delete array object using filter method
    const counter = this.state.counter.filter((c) => c.id !== counterId);
    this.setState({ counter });

    // console.log(counter);
  };

  handleReset = () => {
    const counter = this.state.counter;

    counter.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counter });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counter.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counter={this.state.counter}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

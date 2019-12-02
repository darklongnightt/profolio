import React, { Component } from "react";
import Counter from "./counter.jsx";

export class counterList extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 1 }
    ]
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset}>Reset</button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement1}
            counter={counter}
          >
            <h4>Counter {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }

  handleIncrement = counter => {
    console.log("Incrementing!", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleIncrement1 = counter => {
    console.log("Incrementing!", counter);
    const counters = this.state.counters.map(c => {
      if (counter.id === c.id) {
        c.value += 1;
      }
      return c;
    });

    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Deleting!", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };
}

export default counterList;

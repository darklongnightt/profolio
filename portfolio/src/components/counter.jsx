import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <div>
        <span>{this.formatValue()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    );
  }

  formatValue() {
    // Deconstructing : picking a var from state
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

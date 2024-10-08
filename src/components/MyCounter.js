import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // increment() {
  //   // this.state.count++; use setstate to render to UI. Never directly modify the state
  //   this.setState(
  //     {
  //       count: this.state.count + 1,
  //     },
  //     () => {
  //       console.log("state value ", this.state.count);
  //     }
  //   );
  // }

  // increment() {
  //   this.setState(
  //     (prevState) => ({
  //       count: prevState.count + 1,
  //     }),
  //     () => {
  //       console.log("count ** ", this.state.count);
  //     }
  //   );
  // }

  increment = () => {
    this.setState(
      (prevState) => {
        return { count: prevState.count + 1 };
      },
      () => {
        console.log("count ** ", this.state.count);
      }
    );
  };

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1> The counter is {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>
          Click here to increment counter
        </button>
      </div>
    );
  }
}

export default Counter;

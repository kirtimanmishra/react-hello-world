import React, { Component } from "react";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kirti",
    };
  }
  render() {
    return <div>LifeCycleA</div>;
  }
}

export default LifeCycleA;

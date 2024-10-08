// class component
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, children } = this.props;
    return (
      <div>
        <p>
          {" "}
          This is a class component <b /> Welcome {name}{" "}
        </p>{" "}
        {children}{" "}
      </div>
    );
  }
}

export default Welcome;

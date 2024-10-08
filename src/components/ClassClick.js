import React, { Component } from "react";

class ClassClick extends Component {
  clickHander() {
    console.log("** button clicked ** ");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHander}>Click here </button>
      </div>
    );
  }
}

export default ClassClick;

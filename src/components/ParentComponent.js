import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
  }
  greetParent = (childName, childAge) => {
    return alert(
      `Hello ${this.state.parentName} from ${childName} age ${childAge}`
    );
  };

  render() {
    return (
      <div>
        <ChildComponent
          greetHandler={this.greetParent}
          name="this is Parent"
        ></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;

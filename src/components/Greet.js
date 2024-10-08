//  functional component

import React from "react";

// const Greet = (props) => {
//   console.log("** ", props);
//   return <h1> Hello {props.name} </h1>;
// };

const Greet = (props) => {
  const { name, children } = props;
  return (
    <div>
      <h1> Hello {name} </h1> {children}{" "}
    </div>
  );
};

export default Greet; // default export

// If you do named export, you need to enter same function name on App.js

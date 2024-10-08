import React from "react";

function ChildComponent(props) {
  const { greetHandler, updateParentName } = props;
  return (
    <div>
      <button onClick={() => greetHandler("child-component")}>
        Call parent from child component
      </button>
      <button onClick={() => updateParentName("newParent123")}>
        Update parent name from child component
      </button>
    </div>
  );
}

export default ChildComponent;

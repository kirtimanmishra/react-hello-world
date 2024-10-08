import React, { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent_1() {
  const [parentName, setParentName] = useState("Parent");

  const greetParent = (childName) => {
    console.log(`Hello ${parentName} with ${childName}`);
  };
  const updateParentName = (newParentName) => {
    setParentName(newParentName);
  };
  useEffect(() => {
    console.log("** parentName ** ", parentName);
    alert(`Hello new ${parentName}`);
  }, [parentName]);

  return (
    <div>
      <ChildComponent
        greetHandler={greetParent}
        updateParentName={updateParentName}
      ></ChildComponent>
    </div>
  );
}

export default ParentComponent_1;

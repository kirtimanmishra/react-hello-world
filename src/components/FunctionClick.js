import React from "react";

function FunctionClick() {
  function clickHander() {
    console.log("*** button clicked *** ");
  }
  return (
    <div>
      <button onClick={clickHander}>Click</button>
    </div>
  );
}

export default FunctionClick;

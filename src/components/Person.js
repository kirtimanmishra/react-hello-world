import React from "react";

function Person(props) {
  const { person } = props;
  return (
    <h1>
      I am {person.name}, age {person.age}
    </h1>
  );
}

export default Person;

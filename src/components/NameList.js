import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    { id: 1, name: "Kirti", age: 31 },
    { id: 2, name: "Vamsi", age: 20 },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  const names = ["Kirti", "Vamsi", "Shahul"];
  const nameList = names.map((name, index) => {
    return <h1 key={index}>{name}</h1>;
  });

  return (
    <div>
      {personList}
      {nameList}
    </div>
  );
}
export default NameList;

import React from "react";

export default function Names(props) {
  //   console.log(props.names);
  return (
    <div>
      <h1>Names:</h1>
      <ul>
        {props.names.map((each, i) => {
          return <li key={i}>{each}</li>;
        })}
      </ul>
    </div>
  );
}

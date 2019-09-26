import React from "react";

export default function Names(props) {
  //   console.log(props.names);
  return (
    <div>
      <h1 className="text-center">Names:</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        {props.names.map((each, i) => {
          return (
            <button style={{ marginBottom: "10px" }} key={i}>
              {each}
            </button>
          );
        })}
      </ul>
    </div>
  );
}

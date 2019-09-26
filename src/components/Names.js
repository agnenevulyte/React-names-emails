import React from "react";

export default function Names({ names, selectUser }) {
  //   console.log(names);
  return (
    <div>
      <h1 className="text-center">Names:</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        {names.map((each, i) => {
          return (
            <button
              onClick={() => selectUser(each)}
              style={{ marginBottom: "10px" }}
              key={i}
            >
              {each}
            </button>
          );
        })}
      </ul>
    </div>
  );
}

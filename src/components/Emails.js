import React, { Component } from "react";

export default class Emails extends Component {
  constructor(props) {
    super();
  }

  render() {
    // console.log(this.props.emails);
    return (
      <div>
        <h1 className="text-center">Emails:</h1>
        <ul style={{ display: "flex", flexDirection: "column" }}>
          {this.props.emails.map((each, i) => {
            return (
              <button
                key={i}
                style={{ marginBottom: "10px" }}
                onClick={() => this.props.selectUser(each)}
              >
                {each}
              </button>
            );
          })}
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Names extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    };
  }

  componentDidMount = () => {
    this.fetchNames();
  };

  fetchNames = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        this.setState({ names: json });
      })
      .catch(err => alert(err));
  };
  render() {
    console.log(this.state.names);
    return (
      <div>
        <h1>Names:</h1>
        <ul>
          {this.state.names.map((each, i) => {
            return <li key={i}>{each.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

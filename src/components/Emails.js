import React, { Component } from "react";
import { componentDidMount } from "./Names";

export default class Emails extends Component {
  constructor() {
    super();
    this.state = {
      emails: []
    };
  }

  componentDidMount = () => {
    this.fetchEmails();
  };

  fetchEmails = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        this.setState({ emails: json });
      })
      .catch(err => alert(err));
  };

  render() {
    return (
      <div>
        <h1>Emails:</h1>
        <ul>
          {this.state.emails.map((each, i) => {
            return <li key={i}>{each.email}</li>;
          })}
        </ul>
      </div>
    );
  }
}

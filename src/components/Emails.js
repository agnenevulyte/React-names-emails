import React, { Component } from "react";

export default class Emails extends Component {
  constructor() {
    super();
    this.state = {
      emails: []
    };
  }
  render() {
    return (
      <div>
        <h1>Emails:</h1>
        <ul>
          <li>Emails 1</li>
          <li>Emails 2</li>
          <li>Emails 3</li>
          <li>Emails 4</li>
          <li>Emails 5</li>
          <li>Emails 6</li>
          <li>Emails 7</li>
          <li>Emails 8</li>
          <li>Emails 9</li>
          <li>Emails 10</li>
        </ul>
      </div>
    );
  }
}

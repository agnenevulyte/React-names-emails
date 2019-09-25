import React, { Component } from "react";

export default class Names extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    };
  }
  render() {
    return (
      <div>
        <h1>Names:</h1>
        <ul>
          <li>Names 1</li>
          <li>Names 2</li>
          <li>Names 3</li>
          <li>Names 4</li>
          <li>Names 5</li>
          <li>Names 6</li>
          <li>Names 7</li>
          <li>Names 8</li>
          <li>Names 9</li>
          <li>Names 10</li>
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Emails extends Component {
  render() {
    console.log(this.props.emails);
    return (
      <div>
        <h1>Emails:</h1>
        <ul></ul>
      </div>
    );
  }
}

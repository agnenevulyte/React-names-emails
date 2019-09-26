import React, { Component } from "react";
import Names from "./Names";
import Emails from "./Emails";
import MyHook from "./MyHook";

export default class UsersTable extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      names: [],
      emails: []
    };
  }

  filterData = (arr, type) => {
    if (type === "name") {
      let filteredDownToNames = arr.map(each => each.name);
      this.setState({ names: filteredDownToNames });
    }
    if (type === "email") {
      let filteredDownToEmails = arr.map(each => each.email);
      this.setState({ emails: filteredDownToEmails });
    }
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        // console.log("api has returned: ", json.length);
        this.setState({ users: json });
      })
      .then(() => {
        this.filterData(this.state.users, "email");
        this.filterData(this.state.users, "name");
        // console.log("this state is now ", this.state.users); // <-- this is going to be where we call a filtering function to wittle `users` down to 2 new arrays. One of emails, one of names.
      })
      .catch(err => alert(err));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Names names={this.state.names} />
          </div>
          <div className="col-md-4">
            <Emails emails={this.state.emails} />
          </div>
          <div className="col-md-4">
            <MyHook />
          </div>
        </div>
      </div>
    );
  }
}

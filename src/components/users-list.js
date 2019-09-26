import React, { useState, useEffect } from "react";
import Names from "./Names";
import Emails from "./Emails";

export default function UsersList({}) {
  const [users, setUsers] = useState([]);
  const [names, setNames] = useState([]);
  const [emails, setEmails] = useState([]);

  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setUsers(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const names = users.map(each => each.name);
    // console.log(names);
    const emails = users.map(each => each.email);
    // console.log(emails);

    setNames(names);
    setEmails(emails);
  }, [users]);

  useEffect(() => {
    getUsers();
  }, []);

  const selectUser = e => {
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center">My HOOK</h1>
      <div className="row">
        <div className="col-md-6">
          <Names names={names} selectUser={selectUser} />
        </div>
        <div className="col-md-6">
          <Emails emails={emails} selectUser={selectUser} />
        </div>
      </div>
    </div>
  );
}

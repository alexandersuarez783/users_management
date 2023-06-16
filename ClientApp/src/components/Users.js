import React, { Component, useState } from "react";


export class Users extends Component {
  static displayName = Users.name;

  constructor() {
    super()   
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    this.populateUsersData();
  }

  static renderForecastsTable(users) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
       Users.renderForecastsTable(this.state.users)
    );

    return (
      <div>
        <h1 id="tableLabel">Users Management</h1>
        <p>Component used to manage Users</p>
        {contents}
      </div>
    );
  }

  async populateUsersData() {
    const response = await fetch("users");
    const data = await response.json();
    this.setState({ users: data, loading: false });
  }
}

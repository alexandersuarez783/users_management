import React, { Component, useState } from "react";

export class Users extends Component {
  static displayName = Users.name;

  constructor() {
    super();
    this.state = { users: [], loading: true, username: "" };
    this.createUser = this.createUser.bind(this);
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
        <br></br>
        {contents}
        <form onSubmit={this.createUser}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              onChange={(e) => this.setState({ username: e.target.value })}
            ></input>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.state.username.length === 0}
          >
            Add new User
          </button>
        </form>
      </div>
    );
  }

  async populateUsersData() {
    const response = await fetch("users");
    const data = await response.json();
    this.setState({ users: data, loading: false });
  }

  async createUser(e) {
      console.log("button triggered");
    this.setState(({ username: "" }))
    e.preventDefault();
    const body = JSON.stringify(this.state.username);
    await fetch("users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }).then((result) => {
        this.populateUsersData().then((result) => console.log(result));
        
    });
  }
}

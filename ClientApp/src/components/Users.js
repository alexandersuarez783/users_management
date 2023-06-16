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
          {users.map((forecast) => (
            <tr key={forecast.date}>
              <td>{users.id}</td>
              <td>{users.username}</td>
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
        <h1 id="tableLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
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

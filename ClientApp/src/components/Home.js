import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Validacion Desarrollo web con nuevas Tecnologias</h1>
        <p>Tecnologias Usadas:</p>
        <ul>
          <li>MySQL</li>
          <li>React JS</li>
          <li>C#</li>
        </ul>
        <p>Trabajo realizado por Alexander Cuartas</p>
      </div>
    );
  }
}

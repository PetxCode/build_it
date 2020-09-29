import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((response) =>
      response.json().then((response) => {
        console.log(response);
        this.setState({
          users: response,
        });
      })
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tech Talk Conference</h1>
          <a
            className="App-link"
            href="https://brighterdayscodelab.com.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by BDCL students
          </a>
          <img src={logo} className="App-logo" alt="logo" />

          <div>
            {this.state.users.map((user) => (
              <h3>{user.name}</h3>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/users/register", {
        name: "JOhn Doe",
        email: "chukwuemekacaal@gmail.com",
        password: "password",
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Enter Email"
          required
          name="email"
        />
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Enter Email"
          required
          name="email"
        />
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Enter Email"
          required
          name="email"
        />
        <button onClick={this.handleSubmit}>Register</button>
      </div>
    );
  }
}

export default App;

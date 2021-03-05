import React, { Component } from "react";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/users/register", this.state)
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
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter Name"
          required
          name="name"
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
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Enter Password"
          required
          name="password"
        />
        <button onClick={this.handleSubmit}>Register</button>
      </div>
    );
  }
}

export default App;

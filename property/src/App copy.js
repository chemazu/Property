// // import { json } from "body-parser";
// // import { useState, useEffect, authProps, axios } from "react";
// // // function App() {
// // //   fetch("http://localhost:4000/listings/view")
// // //     .then((response) => response.json())
// // //     // .then((data) => {data.map(unit=>{console.log(unit)}))});
// // //     .then((data) => {
// // //       data.map((unit) => {
// // //         console.log(data);
// // //         return "done";
// // //       });
// // //     });
// // //   fetch("http://localhost:4000/users/register", {
// // //     method: "POST",
// // //     headers: {
// // //       Accept: "application/json",
// // //       "Content-Type": "application/json",
// // //     },
// // //     body: JSON.stringify({
// // //       name: "JOhn Doe",
// // //       email: "Reactjs004@gmail.com",
// // //       password: "password",
// // //     }),
// // //   });
// // //   console.log("fetch");
// // //   return <div className="App">App</div>;
// // // }
// // function App() {
// //   // const [token, setToken] = useState("");

// //   useEffect(() => {
// //     getToken();
// //     console.log("time");
// //   }, []);

// //   const getToken = async () => {
// //     const headers = {};
// //     // const response = await fetch("http://localhost:4000/listings/view");
// //     const response = await fetch("http://localhost:4000/users/register", {
// //       method: "POST",
// //       headers: {
// //         Accept: "application/json",
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         name: "JOhn Doe",
// //         email: "TestingAsync003445@gmail.com",
// //         password: "password",
// //       }),
// //     });
// //     const data = await response.json();

// //     console.log(response.json());
// //   };

// //   return <div className="App">App</div>;
// // }
// // export default App;
// import React from "react";

// export default function App() {
//   fetch("http://localhost:4000/users/register", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "JOhn Doe",
//       email: "Reactjs2004@gmail.com",
//       password: "password",
//     }),
//   });

//   return <div>App</div>;
// }
import React, { Component } from "react";
import axios from "axios";

export class App extends Component {
  componentDidMount() {
    console.log("fetch");
    console.log(this.state);

    // fetch("http://localhost:4000/listings/view")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    // fetch("http://localhost:4000/users/register", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: "JOhn Doe",
    //     email: "Classcomp1@gmail.com",
    //     password: "password",
    //   }),
    // });
    axios
      .post("http://localhost:4000/users/register", {
        name: "JOhn Doe",
        email: "chukwuemekachemazusexmokey@gmail.com",
        password: "password",
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }
  constructor() {
    super();
    this.state = {
      name: "johndoe",
      email: "duplicationnnnw@gmail.com",
      password: "password",
    };
  }
  render() {
    return <div></div>;
  }
}

export default App;

function App() {
  // fetch("http://localhost:4000/listings/view")
  //   .then((response) => response.json())
  //   // .then((data) => {data.map(unit=>{console.log(unit)}))});
  //   .then((data) => {
  //     data.map((unit) => {
  //       console.log(data);
  //       return "done";
  //     });
  //   });
  fetch("http://localhost:4000/users/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "johndoe",
      email: "Reactjs001@gmail.com",
      password: "password",
    }),
  });
  return <div className="App">App</div>;
}
export default App;

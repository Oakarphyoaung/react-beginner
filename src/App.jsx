import React from "react";
import "./App.css";
const App = () => {
  const array = ["one", "two", "three", "four"];
  const info = () => {
    console.log("this is function");
  };
  return (
    <div>
      {array.map((item) => (
        <div className="card">
          <img
            src="https://i.pinimg.com/1200x/df/63/10/df631005280514f04364d165f3f7d6ca.jpg"
            alt=""
            width="300px"
          />
          <h1>Card Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            obcaecati
          </p>
        </div>
      ))}
    </div>
  );
};
export default App;

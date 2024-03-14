// import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Szotyi",
  //     animal: "Guinea Pig",
  //     breed: "Common",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Charlie",
  //     animal: "Cat",
  //     breed: "Mixed",
  //   }),
  // ]);
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Szotyi" animal="Guinea Pig" breed="Common" />
    <Pet name="Charlie" animal="Cat" breed="Mixed" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

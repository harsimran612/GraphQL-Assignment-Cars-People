import React from "react";

import Title from "./components/title";

import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Title text="People Car GraphQL App" />
      <Outlet />
    </div>
  );
};

export default App;

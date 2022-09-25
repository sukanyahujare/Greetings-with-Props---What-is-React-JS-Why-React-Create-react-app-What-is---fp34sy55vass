import "../styles/App.css";
import React from "react";
import Welcome from "./Welcome";

const App = () => {
  let name = "mayur"
  return (
    
      <Welcome name={name} />
    
  );
};

export default App;

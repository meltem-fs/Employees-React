import React, { useState } from "react";
import "./App.css";
import Card from "./components/cards/Card"
import data from "./data"



function App() {
  return <div className="App">
    <h2>EMPLOYEE LİST</h2>
    <div>
      {data.map((item) => {
        return <Card {...item} key={item.id} />;
      })}
    </div>
  
  </div>;
}

export default App;

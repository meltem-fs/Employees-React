import React, { useState } from "react";
import "./App.css";
import Card from "./components/cards/Card"
import data from "./data"



function App(props) {
  let count = props.count;
  

  const [index, setIndex] = useState(0)
  

  const prev = () => {
    if(index>0){
      setIndex(index-5)
    }
    if(index<4){
      setIndex(15);
    }
    
  };

  const next = () => {
    if(index<15){
        setIndex(index+5)
    }
    if(index>14){
      setIndex(0)
    }
  
  };



  return (
    <div className="App ">
      <h2>EMPLOYEE LİST</h2>
      <p>
        Employees {index} to {index + 5}
      </p>
      <div>
        {data.slice(index, index+5).map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
      <span>
        <button onClick={prev} className="btn btn-light">
          PREV
        </button>
        <button onClick={next} className="btn btn-success">
          NEXT
        </button>
      </span>
    </div>
  );
}

export default App;

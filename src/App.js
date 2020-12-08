import React, { useState } from "react";
import "./styles.css";
import { Tech , Entertain , spritual } from "./Data.js";

export default function App() {
  const [name, setName] = useState("");

  // const TechArray = Object.keys(Tech);

  const types = ["Spritual", "Entertainment", "Technology"];

  function clickHandler(clickedElement) {
   
    if (clickedElement === "Technology") {
      setName(
        Tech.map(ele => {
          return (
            <div className="box" key={ele}>{ele.name}
            <div key={ele}>{ele.subs}</div></div>
          )
        })
      );
    }

    else if(clickedElement === "Entertainment"){
      setName(Entertain.map(ele => { return (
        
      <div className="box" key={ele}>{ele.name}
      <div key={ele}>{ele.subs}</div></div>)
    }))

  }
  else{
    setName(spritual.map(ele => {
      return (
        <div className="box" key={ele}>{ele.name}
        <div key={ele}>{ele.subs}</div></div>
        )
    }))
  }

}

  return (
    <div className="App">
      <div className="header">
      <h1>Youtube Channel Recommendation</h1>
      <p>Check out the Channels recommanded by me </p>
      <p>select the type to get Started</p>
      </div>

      <div className="selection-panel">
        {types.map((ele) => {
          return <button onClick={() => clickHandler(ele)}>{ele}</button>;
        })}
      </div>
      <hr />
      <div className="display-section">{name}</div>
    </div>
  );
}

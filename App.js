import React from "react";
import {useState} from "react"
import "./styles.css"

function Button(){
  const [counter, setCounter]=useState(0);
  return (
    <div>
      {counter}
      <button onClick={()=>setCounter(counter+1)}>dodaj</button>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button/>
    </div>
  );
}

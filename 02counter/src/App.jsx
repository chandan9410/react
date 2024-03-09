import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, ck_counter] = useState(15); // 15 is default value of counter
  //  let  counter = 13;
  // set counter is the method which  control "counter"
  const addvalue = () => {
    counter = counter + 1;
    counter = counter + 1;
    counter = counter + 1; //now what will  be  the counter value ???
        console.log("clicked : ", ck_counter);
    ck_counter(counter);
  };
  const removevalue = () => {
    ck_counter(counter-1);
  };
  return (
    <>
      <h1> chai garam pini thii </h1>
      <h2>counetr value : {counter} </h2>
      <button onClick={addvalue}>add value </button>
      <button onClick={removevalue}> remove value : {counter} </button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;

// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("olive");

//   return (

//     <div
//       className="w-full h-screen duration-200"
//       style={{ backgroundColor: color }}
//     >
//        <h1> code is woking </h1>

//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  // const changeColor = () => {
  //   // Generate a random color
  //   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  //   setBackgroundColor(randomColor);
  // };

  return (
    <div>
      <button
        onClick={ ()=> setBackgroundColor("pink")}
        style={{ backgroundColor: "pink" }}
      ></button>
       <button
        onClick={ ()=> setBackgroundColor("green")}
        style={{ backgroundColor: "green" }}
      ></button>
       <button
        onClick={ ()=> setBackgroundColor("yellow")}
        style={{ backgroundColor: "yellow" }}
      ></button>
       <button
        onClick={ ()=> setBackgroundColor("purple")}
        style={{ backgroundColor: "purple" }}
      ></button>
       <button
        onClick={ ()=> setBackgroundColor("white")}
        style={{ backgroundColor: "white" }}
      ></button>
      {/* <button onClick={changeColor}>Change Color</button> */}
      <style>
        {`
          body {
            background-color: ${backgroundColor};
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}

export default App;

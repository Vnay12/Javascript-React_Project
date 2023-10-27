// we learning about hooks -> useState
// useState is used to change the state of the component in the whole DOM ( Page ) and change it in the UI
// React useState is used to change the varibale in the UI
// this reduceses the hustle of document.getTd in each line which we used to do in JS

// also an interview question has been discussed

import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
    setCount(count + 1); // even tho we passed twice setCounter it will execute once cause of react fiber and mainly cause of useState which take all the commands as one single batch and then pass it. 
    setCount((prevCounter) => prevCounter+1); // when we pass it as callback it will execute as a one line of command
  
  };

  const decValue = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>HI This is Vinay | We Reading Hooks</h1>

      <h2>
        Counter Value : {count}
        {/* To take the variable to use { } and pass the varible which we initialized  */}
      </h2>

      <button onClick={addValue}>add value: {count}</button>

      <br />

      <button oncClick={decValue}>Decearse Value: {count}</button>
      <p>Footer : {count}</p>
    </>
  );
}

export default App;

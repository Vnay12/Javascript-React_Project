import { useState, useEffect, useRef, useCallback } from "react";

import "./App.css";
import { unstable_batchedUpdates } from "react-dom";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassoword] = useState(" ");

  // useRef hook
  /* 
    It is used to give the refernce in the html tag 
  
  */

  const passwordRef = useRef(null); // value here is passed null cause we dont have any reference

  /* 
useEffect will just run after the render is completed ( initial render is done ) 

t has 2 arugemnets = function and dependencies 

useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. if no dependencies are given 

for example : useEffect(() => {
  //Runs on every render
});


useEffect runs on initial render 
for example : 
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here


  useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

 useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here  */

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  /* useCallback helps to store a function into cache which is to be used multiple times 
  
  just we have to give all the paramaters as dependancies in the array to the function effecting the function and is to be called multiple times 
  
  */
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "$#@~!+-";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassoword(pass)
    
  }, [length, numberAllowed, charAllowed, setPassoword]);

  /* 
here we used the refernce which we passed inititally to see either we have any text ? or select the text 

it will highlight the text 

we have a callback function for optimization  
" window.navigator.clipboard.writeText "

to copy to we used 

*/
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef} // here we passed the reference
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;

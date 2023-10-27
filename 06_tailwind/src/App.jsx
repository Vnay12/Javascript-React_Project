// we are going to study a lil bit of tailwindand props
// props make the componenet reusbale
// React Props are like function arguments in JavaScript and attributes in HTML.
//To send props into a component, use the same syntax as HTML attributes

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* we have passed the prop as username and button name  */}
      <Card Username="Vinay" buttonname="Check out" />
      <Card Username="Prapti" buttonname="Check Out 2 " />
      <Card />
    </>
  );
}

export default App;

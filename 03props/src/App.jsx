import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App({ userName }) {
  console.log(userName);
  const [count, setCount] = useState(0);

  return (
    <>
      <Cards />
      <Cards userName="John Doe" staffPosition="FSD" />
      <Cards userName="Jane Doe" staffPosition="SWE" />
      <Cards userName="Joe Doe" staffPosition="SDE" />
      <Cards userName="Ja Doe" staffPosition="Staff" />
      <Cards />
      <Cards />
    </>
  );
}

export default App;

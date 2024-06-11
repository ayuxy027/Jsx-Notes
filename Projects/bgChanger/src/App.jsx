import React, { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#2d3748");

  function colorChanger(color) {
    setBackgroundColor(color);
  }

  return (
    <>
      <div
        id="container"
        className="h-screen bg-slate-800"
        style={{ backgroundColor }}
      >
        <button
          id="teal"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => colorChanger("#008080")}
        >
          Teal
        </button>
        <button
          id="magenta"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => colorChanger("#ff00ff")}
        >
          Magenta
        </button>
        <button
          id="button"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => colorChanger("orangered")}
        >
          OrangeRed
        </button>
        <button
          id="button"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => colorChanger("hotpink")}
        >
          HotPink
        </button>
      </div>
    </>
  );
}

export default App;

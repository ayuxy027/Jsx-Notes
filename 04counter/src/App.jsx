import React, { useState } from "react";

function App() {
  const [sum, setSum] = useState(0);

  function onClickAdd() {
    setSum(sum + 1);
  }

  return (
    <div className="card">
      <div className="card-content">
        <h2>This is a Basic Card</h2>
        <p>Total: {sum}</p>
        <button onClick={onClickAdd}>Add 1</button>
      </div>
    </div>
  );
}

export default App;

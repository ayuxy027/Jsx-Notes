import React, { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [ckNumber, setCkNumber] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passGen = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (ckNumber) str += "0123456789";
    if (charAllowed) str += "!@#$%&_+=?/";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, ckNumber, charAllowed]);

  useEffect(() => {
    passGen();
  }, [length, ckNumber, charAllowed, passGen]);

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="w-full px-4 mx-auto my-8 text-2xl text-center text-orange-500 rounded-lg">
        <div className="flex mb-4 overflow-hidden rounded-lg shadow">
          <input
            type="text"
            value={pass}
            className="w-full px-3 py-1 outline-none"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={ckNumber}
              onChange={(e) => setCkNumber(e.target.checked)}
            />
            <label>Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)}
            />
            <label>Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState, useCallback, useEffect, useRef } from "react";

/**
 * Main App component for the Password Generator
 */
function App() {
  // State hooks to manage the length of the password, inclusion of numbers, special characters, and the generated password
  const [length, setLength] = useState(8); // useState to manage password length, default is 8
  const [ckNumber, setCkNumber] = useState(false); // useState to toggle inclusion of numbers
  const [charAllowed, setCharAllowed] = useState(false); // useState to toggle inclusion of special characters
  const [pass, setPass] = useState(""); // useState to store the generated password

  // useRef to create a reference to the password input element
  const passRef = useRef(null);

  /**
   * Function to generate a random password based on the selected options
   * useCallback to memoize the function and avoid unnecessary re-creations
   */
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

  /**
   * Function to copy the generated password to the clipboard
   * useCallback to memoize the function and avoid unnecessary re-creations
   */
  const copyPass = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(pass).then(
        () => {
          alert("Password copied to clipboard!");
        },
        (err) => {
          alert("Failed to copy password: ", err);
        }
      );
    } else if (passRef.current) {
      passRef.current.select();
      document.execCommand("copy");
      alert("Password copied to clipboard!");
    }
  }, [pass]);

  /**
   * Function to select the text in the password input field
   * useCallback to memoize the function and avoid unnecessary re-creations
   */
  const selectPass = useCallback(() => {
    if (passRef.current) {
      passRef.current.select();
    }
  }, []);

  // useEffect to generate a new password whenever length, ckNumber, or charAllowed changes
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
            ref={passRef}
            onClick={selectPass} // Calls selectPass to select the password text when input is clicked
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPass} // Calls copyPass to copy the password to clipboard when button is clicked
          >
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
              onChange={(e) => setLength(Number(e.target.value))} // Updates length state on range input change
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={ckNumber}
              onChange={(e) => setCkNumber(e.target.checked)} // Updates ckNumber state on checkbox change
            />
            <label>Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)} // Updates charAllowed state on checkbox change
            />
            <label>Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

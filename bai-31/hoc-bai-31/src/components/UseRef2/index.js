import { useState, useRef } from "react";

function UseRef2 () {
  const [inputValue, setInputValue] = useState("");
  const counterRef = useRef(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    counterRef.current = counterRef.current + 1;
  }
  return (
    <>
      <input value={inputValue} onChange={handleChange}/>
    </>
  )
}

export default UseRef2;
import { useState, useRef, useEffect } from "react";

function UseRef4 () {
  const [inputValue, setInputValue] = useState("");
  const counterRef = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const handleChange = (e) => {
    setInputValue(e.target.value);
    counterRef.current = counterRef.current + 1;
    
  }
  return (
    <>
      <input ref={inputRef} value={inputValue} onChange={handleChange}/>
    </>
  )
}

export default UseRef4;
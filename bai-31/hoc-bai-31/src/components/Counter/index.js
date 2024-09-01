import { useState, useCallback } from "react";
import Box from "../Box";

function Counter() {
  const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   setCounter(counter + 1);
  // };

  const handleClick = useCallback(() => {
    setCounter(counter => counter + 1);
  }, []);

  const handleReset = useCallback(() => {
    setCounter(0);
  }, []);


  console.log(counter);

  return (
    <>
      <div>Kết quả: {counter}</div>
      <Box onCounter={handleClick} onReset={handleReset}/>
      
    </>
  );
}

export default Counter;

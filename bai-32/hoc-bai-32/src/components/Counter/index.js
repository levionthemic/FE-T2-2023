import { useState, useMemo } from "react";
import { pow } from "../../helpers/pow";


function Counter() {
  const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   setCounter(counter + 1);
  // };

  const handleClick = () => {
    setCounter(counter => counter + 1);
  }

  // const resultPow = pow();
  const resultPow = useMemo(() => {
    pow();
  }, []);
  


  return (
    <>
      <div>Kết quả: {counter}</div>
      <button onClick={handleClick}>Click</button>
      <div>{resultPow}</div>
    </>
  );
}

export default Counter;

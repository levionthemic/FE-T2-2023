import { memo } from "react";

function Box(props) {
  console.log("render box");

  const { onCounter, onReset } = props;

  const handleClick = () => {
    onCounter();
  };

  const handleReset = () => {
    onReset();
  }
  

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default memo(Box);

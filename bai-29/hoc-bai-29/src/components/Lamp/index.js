import { useState } from "react";

function Lamp() {
  // let status = false;

  const [status, setState] = useState(false);

  const handleClick = () => {
    // status = !status;
    setState(!status);
  };

  console.log(status);

  return (
    <>
      <button onClick={handleClick}>
        {status ? "Tắt" : "Bật"}
      </button>
      <div>{status ? "Đèn đang bật" : "Đèn đang tắt"}</div>
    </>
  );
}

export default Lamp;

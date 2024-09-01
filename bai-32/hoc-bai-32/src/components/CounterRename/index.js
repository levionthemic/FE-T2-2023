import {useState} from "react";

function CounterState() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>Kết quả: </div>

      <button>Up</button>
      <button>Down</button>
      <button>Reset</button>
    </>
  )
}

export default CounterState;
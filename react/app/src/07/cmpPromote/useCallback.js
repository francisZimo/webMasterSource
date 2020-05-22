import React, { useState, useCallback } from
    "react";
export default function ReactMemoPage() {
  const [val, setVal] = useState("");
  const [counter, setCounter] = useState(0);
  // const addClick = useCallback(() => {
  //   setCounter(counter + 1);
  // }, [counter]);
const addClick = () => {
setCounter(counter + 1);
};
  console.log("----111");
  return (
    <div> <input value={val} onChange={event =>
      setVal(event.target.value)} />
      <button onClick={addClick}>{counter}
      </button>
    </div>
  );
}
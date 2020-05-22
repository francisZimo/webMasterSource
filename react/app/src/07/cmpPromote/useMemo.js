import React, { useState, useMemo ,useCallback} from "react";
export default function ReactMemoPage(props) {
  const [counter, setCounter] = useState(0);
  const [val, setValue] = useState("");
  // const expensive = useMemo(() => {
  //   console.log("compute");
  //   return counter * 100;
  // }, [counter]);
  const expensive = useMemo(() => {
    console.log("compute");
    return counter * 100;
  }, [counter]);

// const expensive = () => {
//   console.log("compute");
//   return counter * 100;
// };
  return (
    <div>
      <p>{expensive}</p>
      <div>
        <button onClick={() =>
      setCounter(counter + 1)}>counter</button>
        <input value={val} onChange={event =>
      setValue(event.target.value)} />
    </div>
    </div>
  );
}
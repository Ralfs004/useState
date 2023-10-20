import { useState } from "react";

function Counter() {
  const [result, setResult] = useState(0);
  const [ratioChange, setRatioChange] = useState(1);

  function addRatio() {
    setResult(result + parseInt (ratioChange));
    console.log("Funkcija izsaukta");
    console.log("result ir " + result);
  }

  function subtractRatio() {
    setResult(result - ratioChange);
  }

  function handleRatioChange(kaķēns) {
    setRatioChange(kaķēns.target.value);
  }

  return (
    <div className="Counter">
      <input
        type="number"
        value={ratioChange}
        onChange={handleRatioChange}
      ></input>
      <button onClick={addRatio}>GANG +{ratioChange} ratio</button>
      <button onClick={subtractRatio}>GANG -{ratioChange} ratio</button>
      <h1>{result}</h1>
    </div>
  );
}

export default Counter;

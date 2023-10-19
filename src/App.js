import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [ratioChange, setRatioChange] = useState (1);
  function handleRatioChange(event){
    setRatioChange(event.target.value);
  }
  return (
    <div>
      <input type="number" value = {ratioChange} onCange = {handleRatioChange}/> 
      <p>Nospiests {count} Reizes</p>
      <button onClick={() => setCount(count + 1)}>
        Spied +1
      </button>

      <button onClick={() => setCount(count - 1)}>
        Spied -1
      </button>
    </div>
  );
}

export default App;


import Counter from "./Counter";
import Hello from "./Hello";

function App() {
  const allNames = ["Jēkabs", "Markuss", "Klucis"];
  const visiRatio = [7, 43, 101];
  const helloJSX = allNames.map((name, index) => {
    return <Hello key={index} name={name} />;
  });
  const ratioJSX = visiRatio.map((ratio, index) => {
    return <Counter key={index} ratio={ratio} />;
  });
  return (
    <>
     
      {helloJSX}
      {ratioJSX}
    </>
  );
}

export default App;

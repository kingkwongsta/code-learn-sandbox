import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function diffArray(arr1, arry2) {
    return arr1
      .concat(arry2)
      .filter((item) => !arr1.includes(item) || !arry2.includes(item));
  }

  console.log(
    diffArray(
      ["grass", "dirt", "pink wool", "dead shrub"],
      ["grass", "dirt", "dead shrub"]
    )
  );

  return (
    <div className="App">
      <div>
        <h3>hello world</h3>
      </div>
    </div>
  );
}

export default App;

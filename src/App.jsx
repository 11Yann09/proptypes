import { useState } from "react";
import One from "./One";
import Two from "./Two";
import "./App.css";

const Title = () => <h1>Salut à tous !</h1>;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <One name="Eric" age={30} /> */}
      <Two>
        <Title />
      </Two>
    </>
  );
}

export default App;

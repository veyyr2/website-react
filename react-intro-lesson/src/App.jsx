import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
	<header>
		<h3>Hello!</h3>
		<button>lord</button>
	</header>

	<main>
		<div>hello!</div>
	</main>
    </>
  );
}

export default App;

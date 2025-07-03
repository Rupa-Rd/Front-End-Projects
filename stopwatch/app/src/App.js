import "./App.css";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className="container">
      <h1 className="title">Stopwatch</h1>
      <Stopwatch />
      <a href="https://www.guvi.in/" className="copywright">
        Made by Guvi💚
      </a>
    </div>
  );
}

export default App;

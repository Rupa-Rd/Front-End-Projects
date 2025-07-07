import "./App.css";
import CharacterCounter from "./components/CharacterCounter";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Character Counter App</h1>
      </div>
      <CharacterCounter />
      <a href="https://www.guvi.in/" className="copywright">
        Made by Guvi💚
      </a>
    </div>
  );
}

export default App;

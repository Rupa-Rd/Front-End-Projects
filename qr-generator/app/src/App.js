import "./App.css";
import QrGenerator from "./components/QrGenerator";
function App() {
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <QrGenerator />
      <a href="https://www.guvi.in/" className="copywright">
        Made by Guvi💚
      </a>
    </div>
  );
}

export default App;

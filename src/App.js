import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>
        <Dictionary />
      </div>
      <footer>
        Coded by{" "}
        <a href="https://github.com/cle-amato/dictionary-app">
          Clementina Amato
        </a>
      </footer>
    </div>
  );
}

export default App;

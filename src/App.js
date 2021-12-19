import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1 className="header">Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="meditation" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              className="source"
              href="https://github.com/antoniapiae/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Antonia Englert
          </small>
        </footer>
      </div>
    </div>
  );
}

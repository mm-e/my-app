import logo from './oxno_gris.png';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This will be my OXNO e-commerce.
        </p>
        <a
          className="App-link"
          href="https://mm-e.github.io/oxno/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about OXNO
        </a>
      </header>
    </div>
  );
}

export default App;



import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
import ReactAnimatedWeather from 'react-animated-weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn with Pamela Mardones y Sean y Baguel
        </a>
        <Weather />
       <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size={100}
        animate={true}
      />
      </header>
    </div>
  );
}

export default App;

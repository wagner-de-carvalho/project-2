import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h2>Contador: {counter} </h2>
        <p>
          <button onClick={handleClick} type="button">
            Reverse
          </button>
        </p>
        <p>
          <button onClick={handleIncrement} type="button">
            Increment
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;

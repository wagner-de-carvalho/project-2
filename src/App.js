// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  // const [reverse, setReverse] = useState(false);
  // const [counter, setCounter] = useState(0);
  // const reverseClass = reverse ? 'reverse' : '';

  // const handleClick = () => {
  //   setReverse((reverse) => !reverse);
  // };

  // const handleIncrement = () => {
  //   setCounter((prevCounter) => prevCounter + 1);
  // };
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
  //       <h2>Contador: {counter} </h2>
  //       <p>
  //         <button onClick={handleClick} type="button">
  //           Reverse
  //         </button>
  //       </p>
  //       <p>
  //         <button onClick={handleIncrement} type="button">
  //           Increment
  //         </button>
  //       </p>
  //     </header>
  //   </div>
  // );

  // ComponentDidUpdate - atualiza toda vez que o componente atualiza
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });

  // ComponentDidUpdate - executa uma vez
  useEffect(() => {
    console.log('ComponentDidMount');
  }, []);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import P from 'prop-types';
import './App.css';
import React, { useCallback, useState } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);
  // const [counter2, setCounter2] = useState(0);

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
  // useEffect(() => {
  //   console.log('ComponentDidUpdate');
  // });

  // ComponentDidMount - executa uma vez
  // useEffect(() => {
  //   document.querySelector('h1')?.addEventListener('click', eventFn);
  //   return () => {
  //     // ComponentWillAmount - limpeza
  //     document.querySelector('h1')?.removeEventListener('click', eventFn);
  //   };
  // }, []);

  // ComponentDidMount - executa toda vez que dependência mudar
  // useEffect(() => {
  //   console.log('C1: ', counter, 'C2:', counter2);
  // }, [counter, counter2]);

  // return (
  //   <div>
  //     <p>
  //       C1: {counter}
  //       C2: {counter2}
  //     </p>
  //     <h1>Contador: {counter}</h1>
  //     <button onClick={() => setCounter(counter + 1)}>+</button>
  //     <button onClick={() => setCounter2(counter2 + 1)}>+[2]</button>
  //   </div>
  // );

  return (
    <div>
      <p>Teste</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter}>+</Button>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Base from './Components/Base';

function App() {
  const [input, setInput] = useState('');
  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    // eslint-disable-next-line no-eval
    setInput(eval(input).toString());
  };

  const handleClear = () => {
    setInput("");
  };
  return (
    <div className="App">
      <div className="calculator">
        <input className="display" type="text" value={input} readOnly />
        <Base 
          handleClick={handleClick} 
          handleEqual={handleEqual}
          handleClear={handleClear} />
      </div>
    </div>
  );
}

export default App;
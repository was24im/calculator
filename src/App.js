import React, { useState } from 'react';
import Button from './Components/Button';
import Display from './Components/Display';
import ParentContainer from './Components/ParentContainer';

function App() {
  const [input, setInput] = useState(''); // Separate state for input
  const [result, setResult] = useState(''); // Separate state for result

  function handleClick(val) {
    if (val === '=') {
      try {
        const res = eval(input);
        setResult(res);
        setInput(''); // Reset input after calculation
      } catch (error) {
        setResult('Error');
      }
    } else if (val === 'C') {
      setInput('');
      setResult('');
    } else if (val === '⌫') {
      // Remove the last character from input
      setInput(prevInput => prevInput.slice(0, -1));
    } else {
      setInput(prevInput => prevInput + val);
    }
  }

  return (
    <ParentContainer>
      <Display data={input || result} /> {/* Display either input or result */}
      <Button btnClick={handleClick} />
    </ParentContainer>
  );
}

export default App;



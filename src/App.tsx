import { useState } from 'react';
import './App.css';

const LIST = [
  '@ybl',
  '@sbi',
  '@axisb',
  'apl',
  '@paytm',
  '@axis',
  '@yes',
  '@hdfc',
  '@aubank',
];

function App() {
  const [value, setValue] = useState<string>('');

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      {value}
      <input
        type="text"
        value={value}
        onChange={handleInput}
        placeholder="Enter your upi id"
        className="input"
        pattern=".+@.+"
      />

      {value.length > 0 && LIST.map((el) => <span>{el}</span>)}

      <button>Pay Now</button>
    </div>
  );
}

export default App;

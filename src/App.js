import React, {useState} from 'react';

import './App.css';

import Controls from './Components/Controls/Controls';
import Counter from './Components/Counter/Counter';

function App() {
  const [counter, setCounter] = useState(0);

  const onActionHandler = (value) => {
    setCounter(counter + value);
  }

  return (
    <div className="App">
      <Counter value={counter} />
      <Controls onAction={onActionHandler} />
    </div>
  );
}

export default App;
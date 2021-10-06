import React, {useState} from 'react';

import './App.css';

import Counter from './Components/Counter/Counter';
import Controls from './Components/Controls/Controls';

function App() {
  const [counter, setCounter] = useState(0);

  const onActionHandler = (value) => {
    setCounter(counter + value);
  }

  return (
    <div className="App">
      <Counter value={counter} />
      <Controls onAction={onActionHandler}/>
    </div>
  );
}

export default App;
import React, {useState} from 'react';

import Button from './Button/Button';

import classes from './Controls.module.css';

const Controls = ({ onAction }) => {
  const [inputValue, setInputValue] = useState("");

  /* const onChangeValueHandler = (e) => {
    const value = e.target.value;
    setInputValue(value)
  } */

  const onClickHandler = (actionType) => {
    const value = Number(inputValue);

    if(!isNaN(value)) {
      const values = {
        "add": value,
        "sub": -value,
      }

      const newValue = values[actionType] ?? 0;
      onAction(newValue);
    }
  }

  return (
    <div className={classes["controls"]}>
      <Button type="sub" onClick={()=> { onClickHandler("sub") }}/>

      <input 
        type="number"
        value={inputValue}
        onChange={({ target })=> { setInputValue(target.value) }}
        placeholder="e.g. 7"/>

      <Button type="add" onClick={()=> { onClickHandler("add") }}/>
    </div>
  );
}

export default Controls;
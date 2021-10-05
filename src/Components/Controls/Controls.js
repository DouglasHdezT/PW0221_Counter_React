import React, { useState } from "react";

import Button from "./Button/Button";

import classes from "./Controls.module.css";

function Controls({ onAction }) {
  const [inputValue, setInputValue] = useState("");

  const onClickHandler = (actionType) => {
    const value = Number(inputValue);
    if(!isNaN(value)){
      const actions = {
        "add" : () => onAction(value),
        "sub": ()=> onAction(-value)
      }

      const action = actions[actionType] ?? (() => {});
      action();
    }
  }
  
  return (
    <div className={classes["controls"]}>
      <Button type="sub" position="left" onClick={()=> onClickHandler("sub")}/>

      <input 
        type="number" 
        placeholder="e.g. 7" 
        value={inputValue} 
        onChange={({ target })=> setInputValue(target.value)} />

      <Button type="add" position="right" onClick={()=> onClickHandler("add")}/>
    </div>
  );
}

export default Controls;

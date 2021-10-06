import React from 'react';

import classes from './Button.module.css';

const Button = ({ type="", onClick }) => {

  const typeSymbols = {
    "add": "+",
    "sub": "-"
  }

  const typeStyles = {
    "add": {
      backgroundColor: "crimson"
    }, //background-color -> backgroundColor
    "sub": {
      backgroundColor: "darkslateblue"
    }
  }

  const symbol = typeSymbols[type] ?? "";
  const style = typeStyles[type] ?? {};

  return (
    <button
      style={{...style}} 
      onClick={()=> { onClick() }}
      className={classes["btn"]}>
      { symbol }
    </button>
  );
}

export default Button;
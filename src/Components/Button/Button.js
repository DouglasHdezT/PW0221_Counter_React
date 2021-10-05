import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

function Button({ onClick, type="", position="" }) {

  const typeStyles = {
    "add": {
      backgroundColor: "crimson"
    },
    "sub": {
      backgroundColor: "darkslateblue"
    }
  }

  const typeSymbols = {
    "add": "+",
    "sub": "-"
  }

  const positionStyles = {
    "left": {
      borderRadius: "0.5rem 0 0 0.5rem"
    },
    "right": {
      borderRadius: "0 0.5rem 0.5rem 0"
    }
  }

  const style = typeStyles[type] ?? {}; // typeStyles[type] ? typeStyles[type] : {}
  const text = typeSymbols[type] ?? ""; // typeSymbols[type] ? typeSymbols[type] : ""
  const posStyle = positionStyles[position] ?? {};

  return (
      <button 
        style={{...style, ...posStyle}} 
        className={classes["btn"]} 
        onClick={(e) => onClick()}>
          { text }
      </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["add", "sub"])
}

export default Button;
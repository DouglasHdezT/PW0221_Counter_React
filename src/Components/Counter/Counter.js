import React from 'react';

import classes from "./Counter.module.css";

function Counter({ value = 0 }) {
  return ( 
    <p className={classes["counter"]}>
      { value }
    </p>
  );
}

export default Counter;
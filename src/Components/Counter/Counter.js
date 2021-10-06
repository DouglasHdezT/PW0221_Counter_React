import React from 'react';

import classes from './Counter.module.css'

const Counter = ({ value }) => {
  return (
    <p className={classes["counter"]}>
      { value }
    </p>
  );
}

export default Counter;
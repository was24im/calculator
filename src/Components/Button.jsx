// Button.jsx
import React from 'react';
import styles from './Button.module.css';

export default function Button({ btnClick }) {
  // Minor typo, changed '===' to '=='
  let btn = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/', '⌫', 'C'];
  return (
    <div>
      {btn.map((val, index) => (
        <button className={val === 'C' ? styles.clearbtn : styles.calcBtn} key={index} onClick={() => btnClick(val)}>
          {val}
        </button>
      ))}
    </div>
  );
}

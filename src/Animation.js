import React from 'react';
import styles from './Animation.module.css';

const Animation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {[...Array(16)].map((_, index) => (
          <span style={{ '--i': index + 1 }} key={index}>
            <i>CSIT</i>
            HUB
            <i>NEPAL</i>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Animation;
import React from 'react';
import styles from './styles.module.scss';

const ComponentWithChildren = ({title, additionalStyles, children}) => {
  return (
    <div className = {styles.container} style = {{...additionalStyles}}>
        <h2 className={styles.title}>{title}</h2>

        {children}

    </div>
  )
}

export default ComponentWithChildren;
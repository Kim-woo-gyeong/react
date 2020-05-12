import React from 'react';
import styles from './Banner02.css';

export default class Banner02 extends React.Component {
    render(){
        return (
            <div>
                <h1 className={styles.Header}>Hello Css Module</h1>
            </div>
        );
    }
}

export{ Banner02 };
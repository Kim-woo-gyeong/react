import React from 'react';
import styles from './Banner01.css';

export default class Banner01 extends React.Component {
    render(){
        return (
            <div>
                <h1 className={styles.Header}>Hello React</h1>
            </div>
        );
    }
}

export{ Banner01 };
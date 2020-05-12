
import React from 'react';
import KanbanBoard from './KanbanBoard';
import styles from './App.css';

export default class App extends React.Component{
    render(){
        return(
            <div className={styles.App}>
                <KanbanBoard />
            </div>
        )
    }
}

import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styles from './CardList.css';

export default class CardList extends React.Component{
    render(){
        // const cardComponents = [];
        // this.props.cards.forEach(card => {
        //     cardComponents.push(<Card
        //                         key = { card.id } 
        //                         title= { card.title }
        //                         color= { card.color }
        //                         description= {card.description} 
        //                         tasks = {card.tasks}/>);
        // });

        // this.props.cards.map(card => <Card
        //     key = { card.id } 
        //     title= { card.title }
        //     color= { card.color }
        //     description= {card.description} 
        //     tasks = {card.tasks}/>)

        return(
            <div className={styles.CardList}>
                 <h1>{this.props.title}</h1>
                  { this.props.cards && this.props.cards.map(card => 
                    <Card
                        key = { card.id } 
                        id = { card.id }
                        title= { card.title }
                        status = { card.status }
                        description= { card.description } 
                        tasks = { card.tasks }
                        taskCallbacks = { this.props.taskCallbacks }/>)}
            </div>
        )
    }
}

CardList.propTypes = {
    title:PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object)
}
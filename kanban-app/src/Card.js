
import React from 'react';
import TaskList from './TaskList'
import PropTypes from 'prop-types';
import styles from './Card.css';

export default class Card extends React.Component{
    constructor(){
        //... 배열이 벗겨짐..
        // k = [a, b, c];
        // f(a, b, c); -> f(k)

        super(...arguments);
        this.state = {
            showDetails: true
        }
    }

    onTitleClick(event){
        this.setState({ 
            showDetails: !this.state.showDetails
        })
    }

    render(){
        // let cardDetails;
        // if(this.state.showDetails){
        //     cardDetails = (
        //         <div>
        //             {this.props.description}
        //             <TaskList key= {this.props.tasks.id} tasks= {this.props.tasks} />
        //         </div>
        // )}

        return(
            <div className={ styles.Card }>
                <div className={ styles[`SideBar--${this.props.status}`]} />
                <div className={ styles[ this.state.showDetails ? 'Title--is-open' : 'Title'] } 
                    onClick={this.onTitleClick.bind(this)}>
                    { this.props.title }
                </div>
                 { !this.state.showDetails ? null : <div>
                        {this.props.description}
                        <TaskList 
                            key= {this.props.tasks.id}
                            cardId={this.props.id} 
                            tasks= {this.props.tasks} />
                </div> }
            </div>
        )
    }
}

var titleLengthValidator = (props, propName, component) => {
    if(!props[propName] || typeof props[propName] !== 'string' || props[propName].length > 5) {
        return new Error(`${propName} in ${component} is longer than 50 Characters`);
    } else {
        return null;
    }
}

Card.propTypes = {
    //custom prop validator
    title:titleLengthValidator,
    description : PropTypes.string.isRequired,
    color : PropTypes.string,
    tasks : PropTypes.arrayOf(PropTypes.object)
}
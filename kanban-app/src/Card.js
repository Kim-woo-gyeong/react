
import React from 'react';
import TaskList from './TaskList'
import PropTypes from 'prop-types';

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
    render(){
        let cardDetails;
        if(this.state.showDetails){
            cardDetails = (
                <div className='Card__Details'>
                    {this.props.description}
                    <TaskList key= {this.props.tasks.id} tasks= {this.props.tasks} />
                </div>
        )}
        const sideColorBar = {
          position : 'absolute',
          zIndex: -1,
          top:0,
          left:0,
          bottom:0,
          width:7,
          backgroundColor:this.props.color
        };

        return(
            <div className='Card'>
                <div style={ sideColorBar } />
                <div className='Card__Title' onClick={() => {
                    this.setState( { showDetails: !this.state.showDetails} );
                }}>
                    { this.props.title }
                </div>
                 { cardDetails }
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
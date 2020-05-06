
import React from 'react';
import TaskList from './TaskList'
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
                    <TaskList tasks= {this.props.tasks} />
                </div>
        )}
        return(
            <div className='Card'>
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
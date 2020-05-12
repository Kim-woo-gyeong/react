import React from 'react';
import EmaillistItem from './EmaillistItem'

export default class Emaillist extends React.Component {
    componentWillReceiveProps() {
        console.log('Emallist:componentWillReceiveProps')
    }

    // shoudComponentUpdate() {
    //     console.log('Emallist:shouldComponentUpdate')
    // }

    // componentWillUpdate() {
    //     console.log('Emallist:componentWillUpdate')
    // } == > getSnapshotBeforeUpdate로 대체됨.

    getSnapshotBeforeUpdate(prevProps, prevState){
        //this.props.keyword:new
        //prevProps.keyword:old
        console.log('Emallist:getSnapshotBeforeUpdate : ' + this.props.keyword+ " : " + prevProps.keyword )
        return 'test-snapshot';
    }
    render(){
        console.log('Emaillist:render()')
        // let emaillist = [];
        // this.props.emaillist.forEach(function(element) {
        //     emaillist.push(<EmaillistItem 
        //         name={`${element.firstName} ${element.lastName}`}
        //         email={element.email}
        //     />)
        // });

        return (
            <div className="Emaillist">
                <ul>
                    {this.props.emaillist && this.props.emaillist
                        .filter((element) => element.firstName.indexOf(this.props.keyword) != -1 || element.lastName.indexOf(this.props.keyword) != -1 || element.email.indexOf(this.props.keyword) != -1)
                        .map((element) => <EmaillistItem 
                            key = {element.no}
                            name={`${element.firstName} ${element.lastName}`}
                            email={element.email}
                        /> )}
                </ul>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Emallist:componentDidUpdate'+ snapshot)
    }
}

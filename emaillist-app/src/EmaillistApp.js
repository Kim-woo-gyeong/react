import React from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default class EmaillistApp extends React.Component {
    constructor(){
        super (...arguments);
        this.state={
            keyword:'',
            emaillist: null
        }

        console.log('EmaillistApp:constructor()');

    }

    componentWillMount() {
        console.log('EmaillistApp:componentWillMount');
    }
    onNotifyKeywordChange(keyword) {
        this.setState({
            keyword: keyword
        })
    }
    render(){
        console.log('EmaillistApp:render()');
        return (
            <div className="EmaillistApp">
                <SearchBar keyword = {this.state.keyword} notifyKeywordChangeHandler={this.onNotifyKeywordChange.bind(this)}/>
                <Emaillist keyword={this.state.keyword} emaillist={this.state.emaillist}/>
            </div>
        );
    }

    componentDidMount(){
        console.log('EmallistApp:componentDidMount()');
        fetch('http://localhost:8888/emaillist')
            .then((response) => response.json())
            .then((json) => this.setState({
                emaillist:json.data
            }))
            .catch((err) => console.error(err));
    }

    componentWillUnmount() {
        console.log('EmallistApp:componentWillUnmount()');
    }
}

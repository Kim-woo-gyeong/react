import React, { Fragment, Component } from 'react';

class App extends Component {

    constructor(){
        super(...arguments);
        this.state = {
            keywords:'',
            contents:'',
            year:''
        }
    };

    onInputChanged ( event ) {
        this.setState({
            keywords:event.target.value
        })
    }

    onTextareaChanged ( event ) {
        this.setState({
            contents:event.target.value
        })
    }

    onChangeYear(event) {
        this.setState({
            year:event.target.value
        })
    }
    
    render(){
        return (
            <Fragment>
                <div>
                    검색 : <input type='text' value= {this.state.keywords} onChange = {this.onInputChanged.bind(this)} />
                </div>
                <br />
                <div>
                    내용 : <textarea value={this.state.contents} onChange = {this.onTextareaChanged.bind(this) }/> 
                </div>
                <div>
                    생년 :  
                    <select value={this.state.birthYear} onChange = {this.onChangeYear.bind(this)}>
                        <option value='1984'>1984 년</option>
                        <option value='1985'>1985 년</option>
                        <option value='1986'>1986 년</option>
                        <option value='1987'>1987 년</option>
                    </select>
                </div>
            </Fragment>
        );
    }
}

export{ App };
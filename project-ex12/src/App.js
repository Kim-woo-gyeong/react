import React, { Fragment, Component } from 'react';

class App extends Component {

    constructor(){
        super(...arguments);
        this.state = {
 
        }
    };

    onLoginSubmit( event ) {
        event.preventDefault();
        console.log(event.target.email.value + ":" + event.target.password.value)
    }
    
    render(){
        return (
            // 많은 데이터를 한번에 validation 할때 제어사용
            <form onSubmit={this.onLoginSubmit.bind(this)}>
                <div>
                    e-mail : <input name='email' type='text' />
                </div>
                <br />
                <div>
                    password : <input name='password' type='password'/> 
                </div>
                <button type='submit'>로그인</button>
            </form>
        );
    }
}

export{ App };
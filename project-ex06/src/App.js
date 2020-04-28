import React from 'react';

class App extends React.Component {
    render(){
        const message = 'Hello React';
        return (
            // html이 아니라 바꿔주는 component이다. jsx??
            <h1>{ message }</h1>
        );
    }
}

export{ App };
import React from 'react';

class App extends React.Component {
    render(){
        const message = 'Hello React';
        const h1Style={
            width:180,
            height:30,
            padding:5,
            color:'#fff',
            background:'#ee9900'
        }

        return (
            // html이 아니라 바꿔주는 component이다. jsx??
            <h1 style={h1Style}>{ message }</h1>
        );
    }
}

export{ App };
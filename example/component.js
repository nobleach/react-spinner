import React, { Component } from 'react';
import LoadingSpinner from '../LoadingSpinner';

class App extends Component {
    render() {
        const style = {
            height: 50,
            width: 50,
            backgroundColor: 'black'
        };
        return (
            <div style={style}>
                <LoadingSpinner
                    barColor="green"
                    className="some-class-name"
                />
            </div>
        );
    }
}

export default App;

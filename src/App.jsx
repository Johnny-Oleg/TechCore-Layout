import React from 'react';

import Menu from './components/Menu/Menu';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <div className="appWrapper">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default App;
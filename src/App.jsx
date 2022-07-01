import React from 'react';

import Menu from './components/Menu/Menu';
import SubMenu from './components/SubMenu/SubMenu';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <div className="appWrapper">
                    <Menu />
                    <SubMenu />
                </div>
            </div>
        </div>
    )
}

export default App;
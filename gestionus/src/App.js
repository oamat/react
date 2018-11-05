import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './website/Header.js';
import Body from './website/Body.js';
import Footer from './website/Footer.js';

class App extends Component {

    render() {
        console.log("render App");
        return (
            <BrowserRouter>            
                <div className='App'>
                    <Header />
                    <Body />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }

}


export default App;

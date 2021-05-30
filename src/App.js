import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Home from './Container/Home';
import Movies from './Container/Movies';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <Banner />
                <Router>
                    <Route component={Home} path="/home"></Route>
                    <Route component={Movies} path="/movies"></Route>
                </Router>
            </div>
        </div>
    );
}

export default App;


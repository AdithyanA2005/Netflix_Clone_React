import React from 'react';
import './App.css'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/Rowpost/Rowpost';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Rowpost />
        </div>
    );
}

export default App;


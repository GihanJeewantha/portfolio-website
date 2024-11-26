import React from 'react';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

AOS.init({
    duration: 1000, // Animation duration in ms
    once: true, // Run animation only once
});

function App() {
    return (
        <div className="App">
            <Home />
            <About />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App;

import React from 'react';
import Carousel from './components/carousel';
import ChooseTournament from './components/chooseTournament';
import HowItWorks from './components/howitworks';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carousel/>
      <HowItWorks/>
      <ChooseTournament/>
    </div>
  );
}

export default App;

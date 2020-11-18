import React from 'react';
import Carousel from './components/carousel';
import ChooseTournament from './components/chooseTournament';
import Footer from './components/footer';
import HowItWorks from './components/howitworks';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carousel/>
      <HowItWorks/>
      <ChooseTournament/>
      <Footer/>
    </div>
  );
}

export default App;

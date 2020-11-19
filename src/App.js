import React from 'react';
import Blog from './components/blog';
import Carousel from './components/carousel';
import ChooseTournament from './components/chooseTournament';
import CreateTournament from './components/createTournament';
import Footer from './components/footer';
import HowItWorks from './components/howitworks';
import NavBar from './components/navbar';
import Screenshots from './components/screenshots';
import SearchTournament from './components/search';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carousel/>
      <HowItWorks/>
      <SearchTournament/>
      <ChooseTournament/>
      <CreateTournament/>
      <Blog/>
      <Screenshots/>
      <Footer/>
    </div>
  );
}

export default App;

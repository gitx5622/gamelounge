import React from 'react';
import Blog from './blog';
import Carousel from './carousel';
import ChooseTournament from './chooseTournament';
import CreateTournament from './createTournament';
import Footer from './footer';
import HowItWorks from './howitworks';
import NavBar from './navbar';
import Screenshots from './screenshots';
import SearchTournament from './search';

const Home = () => {
  return (
    <div>
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

export default Home;
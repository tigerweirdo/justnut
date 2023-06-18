import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Intro, SpecialMenu, Footer2, Spacer } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className='bg'>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer2/>
    <Spacer/>
    <Footer />
  </div>
);

export default App;
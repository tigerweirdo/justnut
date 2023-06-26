  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

  import { AboutUs, FindUs, Footer, Gallery, Header, Intro, SpecialMenu, Footer2, Spacer } from './container';
  import { Navbar, Animations } from './components';
  import Products from './pages/products/products'; // components should be PascalCase
  import './App.css';

  // Create a new component for the Home page
  const Home = () => (
    <>
      <Header />
      <Animations/>
      <AboutUs />
      <SpecialMenu />
      <Intro />
      <Gallery />
      <FindUs />
      <Footer2/>
      <Spacer/>
    </>
  );

  const App = () => (
    <Router>
      <div className='bg'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/products" element={<Products/>} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );

  export default App;

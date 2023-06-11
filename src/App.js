import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurProductsPage from './pages/OurProductsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hakkimizda" element={<AboutUsPage />} />
                <Route path="/urunlerimiz" element={<OurProductsPage />} />
                <Route path="/iletisim" element={<ContactPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

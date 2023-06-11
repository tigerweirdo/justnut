import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="p-6 bg-blue-600 text-white">
            <h1 className="text-3xl">Organik Ürünler</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">Anasayfa</Link></li>
                    <li><Link to="/hakkimizda" className="hover:underline">Hakkımızda</Link></li>
                    <li><Link to="/urunlerimiz" className="hover:underline">Ürünlerimiz</Link></li>
                    <li><Link to="/iletisim" className="hover:underline">İletişim</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

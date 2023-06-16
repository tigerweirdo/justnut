import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Yeni Lezzetler Keşfedin" />
      <h1 className="app__header-h1">Doğadan Sofranıza</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Kalitenin ve doğallığın buluştuğu yerdesiniz. Biz, doğadan sofranıza en saf ve doğal lezzetleri sunuyoruz. Ürünlerimiz, yüksek kaliteli organik fıstık ve fındıktan özenle üretilir ve sağlıklı yaşamı destekler.</p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.fistik} alt="header_img" />
    </div>
  </div>
);

export default Header;
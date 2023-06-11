import React, { useState } from 'react';
import Modal from 'react-modal';

const OurProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (productName) => {
    setSelectedProduct(selectedProduct === productName ? null : productName);
  };

  const products = [
    { name: 'Organik Fıstık Ezmesi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et commodo mi.' },
    { name: 'Fındık Ezmesi', description: 'Donec et commodo mi. Maecenas sed consectetur tellus.' },
    { name: 'Tahin', description: 'Cras at sapien sit amet tellus condimentum interdum.' },
    { name: 'Örnek Ürün', description: 'Vestibulum in lacus eu augue placerat mollis a ac erat.' },
  ];

  return (
    <div className="bg-purple-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-purple-700">Ürünlerimiz</h1>
        <p className="text-lg text-purple-800">
          Organik fıstık ezmesi, fındık ezmesi ve tahinimiz hakkında detaylı bilgi için tıklayınız.
        </p>
        <div className="grid grid-cols-2 gap-8 mt-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-2xl transition duration-500 ease-in-out hover:scale-105"
              onClick={() => handleClick(product.name)}
            >
              <img
                className="w-full h-48 object-cover rounded-md mb-4"
                src="https://images.migrosone.com/sanalmarket/product/07155899/07155899-3d9fa0-1650x1650.jpg"
                alt={product.name}
              />
              <h2 className={`text-xl font-bold mb-2 text-purple-600`}>{product.name}</h2>
              <Modal
                isOpen={selectedProduct === product.name}
                onRequestClose={() => setSelectedProduct(null)}
              >
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button onClick={() => setSelectedProduct(null)}>Close</button>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProductsPage;

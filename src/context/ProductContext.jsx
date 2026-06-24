import React, { createContext, useState, useEffect } from 'react';
import { products as defaultProducts } from '../data/products';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem('gori_products');
    const savedVersion = localStorage.getItem('gori_products_version');
    const currentVersion = '4'; // bump this to force reset defaults
    if (savedProducts && savedVersion === currentVersion) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(defaultProducts);
      localStorage.setItem('gori_products', JSON.stringify(defaultProducts));
      localStorage.setItem('gori_products_version', currentVersion);
    }
  }, []);

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, { ...newProduct, id: Date.now().toString(), rating: 5, reviews: 0 }];
    setProducts(updatedProducts);
    localStorage.setItem('gori_products', JSON.stringify(updatedProducts));
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
    setProducts(updatedProducts);
    localStorage.setItem('gori_products', JSON.stringify(updatedProducts));
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('gori_products', JSON.stringify(updatedProducts));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

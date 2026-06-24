import React, { useContext, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/ProductContext';
import './Home.css';

const Home = () => {
  const { products } = useContext(ProductContext);
  const [activeCategory, setActiveCategory] = useState('All Products');

  const categories = ['All Products', 'Hair Care', 'Skin Care', 'Wellness'];

  const filteredProducts = activeCategory === 'All Products' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-content">
          <h1>Natural Healing with Traditional Wisdom</h1>
          <p>Discover our premium range of organic herbal products sourced directly from nature to nurture your health and vitality.</p>
          <button className="btn-primary">Shop Now</button>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="category-list">
            {categories.map(cat => (
              <div 
                key={cat}
                className={`category-item ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <h2 className="section-title">
            {activeCategory === 'All Products' ? 'Trending Now' : activeCategory}
          </h2>
          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="no-products-message">No products found in this category.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

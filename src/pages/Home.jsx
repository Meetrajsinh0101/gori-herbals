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
      <section className="hero glass-panel animate-fade-in" style={{ borderRadius: 'var(--radius-xl)', margin: 'var(--spacing-md) 0', overflow: 'hidden', position: 'relative' }}>
        <div className="hero-content" style={{ padding: '60px 40px', background: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.7))' }}>
          <h1>Pure & Natural <br/><span style={{ color: 'var(--color-secondary)' }}>Ayurvedic Wellness</span></h1>
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

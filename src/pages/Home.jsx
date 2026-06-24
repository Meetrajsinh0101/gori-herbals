import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/ProductContext';
import './Home.css';

const Home = () => {
  const { products } = useContext(ProductContext);

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
            <div className="category-item active">All Products</div>
            <div className="category-item">Hair Care</div>
            <div className="category-item">Skin Care</div>
            <div className="category-item">Wellness</div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Trending Now</h2>
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
            {/* Duplicate for demo purposes */}
            {products.map(product => (
              <ProductCard key={`${product.id}-copy`} product={{...product, id: `${product.id}-copy`}} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

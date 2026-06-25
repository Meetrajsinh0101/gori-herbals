import React, { useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const product = products.find(p => p.id === id) || products[0];
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const [selectedImage, setSelectedImage] = useState(0);

  // Normalize media for display
  const productMedia = product.media || (product.images ? product.images.map(url => ({ url, type: 'image' })) : (product.image ? [{ url: product.image, type: 'image' }] : []));
  const currentMedia = productMedia[selectedImage] || { url: '', type: 'image' };

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> &gt; <span>{product.name}</span>
        </div>

        <div className="product-main">
          <div className="product-gallery">
            <div className="main-image shadow-card" style={{ position: 'relative', overflow: 'hidden' }}>
              {currentMedia.type === 'video' ? (
                <video src={currentMedia.url} controls autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <img src={currentMedia.url} alt={product.name} />
              )}
            </div>
            <div className="thumbnail-list">
              {productMedia.map((item, idx) => (
                <div
                  key={idx}
                  className={`thumbnail ${selectedImage === idx ? 'active' : ''}`}
                  onClick={() => setSelectedImage(idx)}
                >
                  {item.type === 'video' ? (
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <video src={item.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', borderRadius: '50%', padding: '4px', fontSize: '10px' }}>▶</div>
                    </div>
                  ) : (
                    <img src={item.url} alt={`view ${idx + 1}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="product-info-detailed">
            <h1>{product.name}</h1>
            <p className="subtitle">{product.subtitle}</p>
            
            <div className="rating">
              <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
              <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="pricing">
              <span className="current-price">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">₹{product.originalPrice}</span>
                  <span className="discount">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            <div className="benefits">
              <h3>Key Benefits</h3>
              <ul>
                {product.benefits.map((benefit, idx) => (
                  <li key={idx}>✓ {benefit}</li>
                ))}
              </ul>
            </div>

            <div className="actions">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="btn-primary add-to-cart-large" onClick={handleAddToCart}>
                {added ? '✅ Added to Cart!' : 'Add to Cart'}
              </button>
              <button className="btn-secondary" style={{padding:'12px 24px'}} onClick={() => { addToCart(product, quantity); navigate('/cart'); }}>
                Buy Now
              </button>
            </div>

            <div className="description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
            
            <div className="ingredients">
              <h3>Ingredients</h3>
              <p>{product.ingredients}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

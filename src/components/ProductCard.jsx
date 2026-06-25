import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };
  return (
    <div className="product-card shadow-card">
      <Link to={`/product/${product.id}`} className="product-image">
        {product.media && product.media.length > 0 && product.media[0].type === 'video' ? (
           <video src={product.media[0].url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} muted />
        ) : (
           <img src={product.media && product.media.length > 0 ? product.media[0].url : product.image} alt={product.name} />
        )}
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{product.name}</h3>
        </Link>
        <p className="product-subtitle">{product.subtitle}</p>
        <div className="product-rating">
          <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-price">
          <span className="current-price">₹{product.price}</span>
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice}</span>
          )}
        </div>
        <button className="btn-primary add-to-cart" onClick={handleAddToCart}>
          {added ? '✅ Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

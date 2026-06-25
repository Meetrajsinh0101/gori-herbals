import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { cartItems } = React.useContext(CartContext);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className="header shadow-card glass-panel" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h2>Gori Herbals</h2>
          </Link>
        </div>
        
        <div className="search-bar">
          <input type="text" placeholder="Search for Herbal Tea, Hair Oil, etc." />
          <button className="search-btn"><FiSearch /></button>
        </div>

        <nav className="header-nav">
          <Link to="/admin-login" className="nav-item">
            <FiUser className="icon" />
            <span>Admin</span>
          </Link>
          <Link to="/cart" className="nav-item">
            <div style={{position: 'relative'}}>
              <FiShoppingCart className="icon" />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </div>
            <span>Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

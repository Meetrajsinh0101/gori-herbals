import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { OrderContext } from '../context/OrderContext';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useContext(ProductContext);
  const { orders, updateOrderStatus } = useContext(OrderContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    subtitle: '',
    price: '',
    originalPrice: '',
    image: '',
    description: '',
    benefits: '',
    ingredients: '',
    category: 'Wellness'
  });

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({
      name: '', subtitle: '', price: '', originalPrice: '', image: '', description: '', benefits: '', ingredients: '', category: 'Wellness'
    });
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      subtitle: product.subtitle,
      price: product.price,
      originalPrice: product.originalPrice || '',
      image: product.image,
      description: product.description,
      benefits: Array.isArray(product.benefits) ? product.benefits.join(', ') : product.benefits,
      ingredients: product.ingredients,
      category: product.category || 'Wellness'
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formattedData = {
      ...formData,
      benefits: formData.benefits.split(',').map(b => b.trim())
    };

    if (editingProduct) {
      updateProduct({ ...editingProduct, ...formattedData });
    } else {
      addProduct(formattedData);
    }
    closeModal();
  };

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Admin Dashboard</h1>
          <button className="btn-secondary" onClick={() => { logout(); navigate('/admin-login'); }}>Logout</button>
        </div>
        
        <div className="dashboard-grid">
          <div className="dashboard-card shadow-card">
            <h3>Products Overview</h3>
            <button className="btn-primary mb-md" onClick={openAddModal}>Add New Product</button>
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>₹{product.price}</td>
                      <td><span className="status in-stock">In Stock</span></td>
                      <td>
                        <button className="btn-text edit-btn" onClick={() => openEditModal(product)}>Edit</button>
                        <button className="btn-text delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr><td colSpan="4" style={{textAlign: 'center', padding: '20px'}}>No products found.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="dashboard-card shadow-card">
            <h3>Live Orders ({orders.length})</h3>
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length === 0 && (
                    <tr><td colSpan="5" style={{textAlign:'center', padding:'20px', color:'var(--color-text-muted)'}}>No orders yet. Orders from customers will appear here.</td></tr>
                  )}
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>#{order.id}</td>
                      <td>{order.customer}</td>
                      <td>₹{order.total}</td>
                      <td>
                        <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                      </td>
                      <td>
                        <select
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                          className="status-select"
                        >
                          <option>Pending</option>
                          <option>Confirmed</option>
                          <option>Shipped</option>
                          <option>Delivered</option>
                          <option>Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Subtitle</label>
                <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleChange} required className="status-select" style={{width: '100%', padding: '8px'}}>
                  <option value="Wellness">Wellness</option>
                  <option value="Hair Care">Hair Care</option>
                  <option value="Skin Care">Skin Care</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Price (₹)</label>
                  <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Original Price (₹)</label>
                  <input type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Product Image</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {formData.image && <img src={formData.image} alt="Preview" style={{ width: '100px', marginTop: '10px', borderRadius: '4px' }} />}
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="3" required></textarea>
              </div>
              <div className="form-group">
                <label>Benefits (comma separated)</label>
                <input type="text" name="benefits" value={formData.benefits} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Ingredients</label>
                <input type="text" name="ingredients" value={formData.ingredients} onChange={handleChange} required />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={closeModal}>Cancel</button>
                <button type="submit" className="btn-primary">Save Product</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

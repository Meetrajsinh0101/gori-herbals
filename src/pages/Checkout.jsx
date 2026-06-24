import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { OrderContext } from '../context/OrderContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1=Shipping, 2=Payment, 3=Success
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [shippingData, setShippingData] = useState({
    name: '', phone: '', address: '', city: '', state: '', pincode: ''
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '', cardExpiry: '', cardCvv: '', upiId: ''
  });

  const [placedOrder, setPlacedOrder] = useState(null);

  const handleShippingChange = (e) => setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  const handlePaymentChange = (e) => setPaymentData({ ...paymentData, [e.target.name]: e.target.value });

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      const order = addOrder({
        customer: shippingData.name,
        phone: shippingData.phone,
        address: `${shippingData.address}, ${shippingData.city}, ${shippingData.state} - ${shippingData.pincode}`,
        items: cartItems,
        total: cartTotal,
        paymentMethod,
      });
      setPlacedOrder(order);
      clearCart();
      setIsProcessing(false);
      setStep(3);
      window.scrollTo(0, 0);
    }, 2000);
  };

  if (step === 3) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="success-card shadow-card">
            <div className="success-icon">✅</div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you, <strong>{shippingData.name}</strong>! Your order has been confirmed.</p>
            <p className="order-id">Order ID: <strong>#{placedOrder?.id}</strong></p>
            <p>We will deliver your Gori Herbals products to:</p>
            <p className="delivery-address">{shippingData.address}, {shippingData.city}</p>
            <div className="success-actions">
              <button className="btn-primary" onClick={() => navigate('/')}>Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Shipping</div>
          <div className="step-divider" />
          <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Payment</div>
        </div>

        <div className="checkout-layout">
          <div className="checkout-form-section">
            {step === 1 && (
              <div className="checkout-card shadow-card">
                <h2>Shipping Details</h2>
                <form onSubmit={handleShippingSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input name="name" value={shippingData.name} onChange={handleShippingChange} required placeholder="Rahul Sharma" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input name="phone" value={shippingData.phone} onChange={handleShippingChange} required placeholder="9876543210" />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input name="address" value={shippingData.address} onChange={handleShippingChange} required placeholder="House no, Street name" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>City</label>
                      <input name="city" value={shippingData.city} onChange={handleShippingChange} required placeholder="Bhilwara" />
                    </div>
                    <div className="form-group">
                      <label>State</label>
                      <input name="state" value={shippingData.state} onChange={handleShippingChange} required placeholder="Rajasthan" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Pincode</label>
                    <input name="pincode" value={shippingData.pincode} onChange={handleShippingChange} required placeholder="311001" />
                  </div>
                  <button type="submit" className="btn-primary" style={{width:'100%', padding:'14px'}}>Continue to Payment →</button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="checkout-card shadow-card">
                <h2>Payment Details</h2>
                <div className="payment-methods">
                  <button className={`payment-method-btn ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')}>
                    💳 Credit / Debit Card
                  </button>
                  <button className={`payment-method-btn ${paymentMethod === 'upi' ? 'active' : ''}`} onClick={() => setPaymentMethod('upi')}>
                    📱 UPI
                  </button>
                  <button className={`payment-method-btn ${paymentMethod === 'cod' ? 'active' : ''}`} onClick={() => setPaymentMethod('cod')}>
                    💵 Cash on Delivery
                  </button>
                </div>

                <form onSubmit={handlePaymentSubmit}>
                  {paymentMethod === 'card' && (
                    <>
                      <div className="form-group">
                        <label>Card Number</label>
                        <input name="cardNumber" value={paymentData.cardNumber} onChange={handlePaymentChange} required placeholder="1234 5678 9012 3456" maxLength="19" />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Expiry Date</label>
                          <input name="cardExpiry" value={paymentData.cardExpiry} onChange={handlePaymentChange} required placeholder="MM/YY" />
                        </div>
                        <div className="form-group">
                          <label>CVV</label>
                          <input name="cardCvv" value={paymentData.cardCvv} onChange={handlePaymentChange} required placeholder="123" maxLength="3" />
                        </div>
                      </div>
                    </>
                  )}
                  {paymentMethod === 'upi' && (
                    <div className="form-group">
                      <label>UPI ID</label>
                      <input name="upiId" value={paymentData.upiId} onChange={handlePaymentChange} required placeholder="yourname@upi" />
                    </div>
                  )}
                  {paymentMethod === 'cod' && (
                    <div className="cod-notice">
                      <p>✅ You will pay ₹{cartTotal} in cash when your order is delivered.</p>
                    </div>
                  )}
                  <button type="submit" className="btn-primary" style={{width:'100%', padding:'14px'}} disabled={isProcessing}>
                    {isProcessing ? 'Processing Payment...' : `Pay ₹${cartTotal}`}
                  </button>
                  <button type="button" className="back-btn" onClick={() => setStep(1)}>← Back to Shipping</button>
                </form>
              </div>
            )}
          </div>

          <div className="order-review shadow-card">
            <h3>Your Order</h3>
            {cartItems.map(item => (
              <div key={item.id} className="review-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p className="review-item-name">{item.name}</p>
                  <p className="review-item-qty">Qty: {item.quantity}</p>
                </div>
                <p className="review-item-price">₹{item.price * item.quantity}</p>
              </div>
            ))}
            <div className="review-total">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PaymentDetails from './page2';
import './verify.css';

const Verify = () => {
  
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  const [showPayment, setShowPayment] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePay = () => {
    setShowPayment(false);
    setOrderPlaced(true);
  };
  return (
    <div className="verify-container">
    <NavBar />
    <div className='order'>
    <h1>Ordered Items</h1>
    </div>
    <div className="items-container">
      {selectedItems.map((item) => (
        <div key={item.id} className="item">
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '300px', height: '200px' ,position:'relative',bottom:'100px'}}
          />
          <div className="item-details">
            <h3>{item.name}</h3>
            <div className='price'>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            </div>
            <Link to={'../page2'}>
            <button className="pay-button" onClick={() => setShowPayment(true)}>
              Pay Amount
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
   
    
  </div>
);
};


const NavBar = () => {
  return (
   
      <nav style={styles.navbar}>
        <ul style={styles.navbarList}>
          <li style={styles.navbarItem}>
            
          </li>
        </ul>
      </nav>
    );
  };

// Inline styles
const containerStyles = {
  backgroundImage: 'url(path/to/your/image.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  // other styles...
};
const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333',
    padding: '10px',
    marginBottom: '20px',
  },
  navbarList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'left',
  },
  navbarItem: {
    marginRight: '10px',
  },
  navbarLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  itemsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px',
    marginRight: '20px',
  },
};

export default Verify;
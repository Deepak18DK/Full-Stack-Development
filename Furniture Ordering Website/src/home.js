import React from 'react';
import { useNavigate } from 'react-router-dom';
import picture from './images/furnweb.png';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    backgroundImage: "url('https://images.pexels.com/photos/15867754/pexels-photo-15867754/free-photo-of-an-empty-bedroom.png?auto=compress&cs=tinysrgb&w=600')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    fontFamily: 'Arial, sans-serif',
  };

  const contentStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    
  };

  const containerStyles = {
    padding: '40px',
    textAlign: 'center',
  };

  const logoStyles = {
    marginBottom: '20px',
    width: '200px',
  };

  const headingStyles = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333333',
  };

  const descriptionStyles = {
    fontSize: '20px',
    marginBottom: '40px',
    color: '#333333',
  };

  const buttonStyles = {
    padding: '12px 24px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#f01010',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyles = {
    backgroundColor: '#e06500',
  };

  const handleOrderNow = () => {
    navigate('../page1'); 
  };

  return (
    <div style={styles}>
      
      <div style={contentStyles}>
        <div style={containerStyles}>
          <h1 className='browse' style={headingStyles}><b>Browse, choose, and order with confidence</b></h1>
          <p className='browse' style={descriptionStyles}>
          Experience the magic of furniture design. Discover now..
          </p>
          <button
            style={buttonStyles}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = buttonStyles.backgroundColor)
            }
            onClick={handleOrderNow}
          >
            Discover Now
          </button>
          <div className='furnweb1'>
      <img src={picture} alt="Image Description"  style={{ width: '185px', height: '155px' }} />
    </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

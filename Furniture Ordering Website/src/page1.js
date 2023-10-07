import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './page1.css';
import picture from './images/furnweb.png';


const Page1 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const nav = useNavigate();

  const handleBuyItem = (item) => {
    const selectedItemsWithImages = selectedItems.map((selectedItem) => ({
      ...selectedItem,
      image: furnItems.find((foodItem) => foodItem.id === selectedItem.id)?.image,
    }));
    nav("/verify", { state: { selectedItems: selectedItemsWithImages } });
    console.log(`Buying item: ${item.name}`);
  };
  const styles = {
    backgroundColor: "linear-gradient(to bottom, #36d1dc, #5b86e5)",
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
  const pageStyle = {
   
  };
  
  

  const handleAddToCart = (item) => {
    const itemInCart = selectedItems.find((selectedItem) => selectedItem.id === item.id);
    if (itemInCart) {
      const updatedItems = selectedItems.map((selectedItem) => {
        if (selectedItem.id === item.id) {
          const newQuantity = selectedItem.quantity + 1;
          const newPrice = item.price * newQuantity;
          return { ...selectedItem, quantity: newQuantity, price: newPrice };
        }
        return selectedItem;
      });
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  

  const handleRemoveFromCart = (item) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
    setSelectedItems(updatedItems);
  };
  const handleDecrementQuantity = (item) => {
    const updatedItems = selectedItems.map((selectedItem) => {
      if (selectedItem.id === item.id) {
        return { ...selectedItem, quantity: selectedItem.quantity - 1 };
      }
      return selectedItem;
    });
  
    setSelectedItems(updatedItems);
  };
  
  const handleIncrementQuantity = (item) => {
    const updatedItems = selectedItems.map((selectedItem) => {
      if (selectedItem.id === item.id) {
        const newQuantity = selectedItem.quantity + 1;
        const newPrice = item.price * newQuantity;
        return { ...selectedItem, quantity: newQuantity, price: newPrice };
      }
      return selectedItem;
    });
  
    setSelectedItems(updatedItems);
  };
  
  
  const removeButtonStyle = {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '2px 5px',
    border: 'none',
    cursor: 'pointer',
  };
  const quantityButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '2px 5px',
    border: 'none',
    cursor: 'pointer',
  };
  
  const buyButtonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '2px 5px',
    border: 'none',
    cursor: 'pointer',
  };

  const furnItems = [
    { id: 1, name: 'Dining', price: 500, image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Chair', price: 150, image: 'https://images.pexels.com/photos/220749/pexels-photo-220749.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Bed', price: 600, image: 'https://images.pexels.com/photos/3753435/pexels-photo-3753435.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Dinner Set', price: 100, image: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: 'TV Stand', price: 120, image: 'https://images.pexels.com/photos/6580225/pexels-photo-6580225.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Wardrobe', price: 210, image: 'https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 7, name: 'Sofas and Couches', price: 210, image: 'https://images.pexels.com/photos/8135267/pexels-photo-8135267.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 8, name: 'Carpets', price: 210, image: 'https://images.pexels.com/photos/13244613/pexels-photo-13244613.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  const buttonStyle = {
    backgroundColor: 'brown',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer',
  };
  const buttonStyle1={
    position:'relative',
    right:'100px'
  };

  const wrapperStyle = {
    backgroundColor: 'white',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflowY: 'scroll',
    padding: '150px 80px 0',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: 'calc(100% - 20px)',
    zIndex: '1',
  };
  const searchInputStyle = {
    fontSize:'14px',
    color:'white',
    padding: '8px', 
    backgroundColor: 'black',
    border: 'none',
    borderRadius: '50px',
    width: '300px', 
    color: 'white',
  };

  const navigationBarStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '2px',
    padding: '10px',
    color: 'black',
    width: '1350px',
    backgroundColor: 'white',
  };

  const navigationBarItemStyle = {
    border: '1px solid white',
    padding: '5px 10px',
    borderRadius: '10px',
  };

  const menuContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '80px 250px', 
    marginTop: '20px',
  };

  const furnItemStyle = {
    
    border: '3px solid #808080',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '430px',
    transition: 'border-color 0.3s', 
    cursor: 'pointer', 
    transition: 'transform 0.3s',
  
    ':hover': {
      borderColor: '#28a745',
      transform: 'scale(1.1)',
      
    },
  };

  const foodImageStyle = {
    width: '330px', 
    height: '250px', 
    objectFit: 'cover',
    marginBottom: '10px',
    borderRadius: '5px',
  };

  const cartContainerStyle = {
 
    
    borderRadius: '10px',
    padding: '20px',
    marginTop: '100px', 
    marginLeft: '20px',

    width: '240px',
    alignItems:'center',
   
  };

  
  // Filtered furniture items based on search query
  const filteredFurnItems = furnItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      
    <body style={styles}>
    <div style={wrapperStyle}>
      
        <div style={pageStyle}>
      {/* <div style={styles}> */}
      <div style={headerStyle}>
        {/* Navigation bar */}
        <div style={navigationBarStyle}>
          <div style={navigationBarItemStyle}>Contact</div>
          <div style={navigationBarItemStyle}>Help</div>
          <div className='profilebutton'>
         <Link to={'../profile'}>
          <button >
        
          <div style={navigationBarItemStyle}>Profile</div>
          
          </button>
          </Link>
          </div>
          <div style={navigationBarItemStyle}>Explore</div>
          
          <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          style={searchInputStyle}
          />
        </div>

       
       
      </div>

    
      <h1 style={{ fontSize: '24px', textAlign: 'center' }}>----- FLASH SALE -----</h1>
      <div style={menuContainerStyle}>
        {filteredFurnItems.map((item) => (
          <div key={item.id} style={furnItemStyle}>
            <img src={item.image} alt={item.name} style={foodImageStyle} />
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <div className='cart'>
            <button style={buttonStyle} onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
            </div>
          </div>
        ))}
      </div>
      <div style={cartContainerStyle}>
<h2>Cart</h2>
{selectedItems.length === 0 ? (
  <p>No items in the cart</p>
) : (
  <ul style={{ listStyleType: 'none', padding: '0' }}>
    {selectedItems.map((item) => (
      <li
        key={item.id}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '5px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={item.image}
            alt={item.name}
            style={{ ...foodImageStyle, marginRight: '10px' }}
          />
          <span>{item.name}</span>
        </div>
        <div>
          <button
            style={quantityButtonStyle}
            onClick={() => handleDecrementQuantity(item)}
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span style={{ margin: '0 5px' }}>{item.quantity}</span>
          <button
            style={quantityButtonStyle}
            onClick={() => handleIncrementQuantity(item)}
          >
            +
          </button>
        </div>
        ${item.price.toFixed(2)}
        <button
          style={removeButtonStyle}
          onClick={() => handleRemoveFromCart(item)}
        >
          Remove
        </button>
        
        <button
          style={buyButtonStyle}
          onClick={() => handleBuyItem(item)}
        >
          Buy
        </button>
      </li>
    ))}
  </ul>
)}
    </div>
    </div>
    </div>
    </body>
    
  
  );
};
  

export default Page1;

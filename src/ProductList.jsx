import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './App.css'; // Optional separate CSS or use App.css

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // State to toggle between Product View and Cart View
  const [showCart, setShowCart] = useState(false);

  // Hardcoded Plant Data with Categories
  // Hardcoded Plant Data with Categories
  const plantsArray = [
    {
      category: 'Air Purifying',
      plants: [
        {
          name: 'Snake Plant',
          image:
            'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image:
            'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
      ],
    },
    {
      category: 'Aromatics',
      plants: [
        {
          name: 'Lavender',
          image:
            'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1000&auto=format&fit=crop',
          description: 'Calming scent, great for relaxation.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image:
            'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1000&auto=format&fit=crop',
          description: 'Sweet fragrance, perfect for indoor pots.',
          cost: '$18',
        },
      ],
    },
    {
      category: 'Succulents',
      plants: [
        {
          name: 'Aloe Vera',
          image:
            'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Medicinal sap, requires minimal watering.',
          cost: '$10',
        },
        {
          name: 'Echeveria',
          image:
            'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
          description: 'Beautiful rosette shape, drought tolerant.',
          cost: '$8',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  // Calculate total quantity for Navbar icon
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Toggle styling for Navigation
  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff!important',
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Navbar Section */}
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
              alt="logo"
              height={50}
            />
            <a href="/" style={{ textDecoration: 'none' }}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>

        <div style={styleObj}>
          <div>
            <a
              href="#"
              onClick={handlePlantsClick}
              style={{ color: 'white', fontSize: '30px' }}
            >
              Plants
            </a>
            <a
              href="#"
              onClick={handleCartClick}
              style={{ color: 'white', fontSize: '30px' }}
            >
              <h1 className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>
                {totalQuantity > 0 && (
                  <span className="cart-count">{totalQuantity}</span>
                )}
              </h1>
            </a>
          </div>
        </div>
      </div>

      {/* Conditional Rendering: Cart or Product Grid */}
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>{category.category}</h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">
                      {plant.description}
                    </div>
                    <div className="product-cost">{plant.cost}</div>

                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      // Disable if item is already in cart
                      disabled={cartItems.some(
                        (item) => item.name === plant.name
                      )}
                    >
                      {cartItems.some((item) => item.name === plant.name)
                        ? 'Added to Cart'
                        : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handlePlantsClick} />
      )}
    </div>
  );
}

export default ProductList;

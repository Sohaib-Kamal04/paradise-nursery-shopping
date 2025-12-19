import React, { useState } from 'react';
import ProductList from './ProductList';
import './index.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* If showProductList is false, render Landing Page */}
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1 className="landing-title">Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>

            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          {/* About Us Component embedded in Landing Page area */}
          <AboutUs />
        </div>
      ) : (
        /* If showProductList is true, render ProductList (which handles routing to Cart) */
        <ProductList />
      )}
    </div>
  );
}

export default App;

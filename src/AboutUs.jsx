import React from 'react';
import './App.css'; // Optional separate CSS or use App.css

function AboutUs() {
  return (
    <div className="about-us-container">
      {/*  */}
      <h3 className="about-us-heading">About Us</h3>
      <p className="about-us-description">
        At Paradise Nursery, we believe that bringing a piece of nature into
        your home is essential for a peaceful mind and a healthy body. Our
        journey began with a small greenhouse and a passion for greenery. Today,
        we offer a wide variety of houseplants, from low-maintenance succulents
        to exotic ferns, curated to thrive in your indoor spaces.
      </p>
      <p className="about-us-content">
        Our team of experts carefully selects each plant, ensuring it meets our
        high standards of quality and health. Whether you are a seasoned
        gardener or just starting your plant journey, we are here to support you
        every step of the way. Join us in making the world a greener place, one
        plant at a time.
      </p>
    </div>
  );
}

export default AboutUs;

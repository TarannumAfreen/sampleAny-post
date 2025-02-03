// import React from "react";

// const ResidentialRentals = () => {
//   return (
//     <div>
//       <h1>Residential Rentals</h1>
//       <p>Welcome to the Residential Rentals page! Add your content here.</p>
//     </div>
//   );
// };

// export default ResidentialRentals;

import React from "react";
import Navbar8 from "../components/Navbar8";
import "./ResidentialRentals.css";
import Footer4 from "../components/Footer4";

const ResidentialRentals = () => {
  return (
    <div className="container">
      <Navbar8 />
      {/* Header Section */}
      <header className="header">
        <h1 className="title">Residential Rentals</h1>
        <p className="subtitle">
          "Find your dream home or list your property for others to discover. A
          platform where buying and selling is just a click away."
        </p>
      </header>

      {/* Content Section */}
      <main className="main">
        <h2 className="section-title">Featured Properties</h2>
        <div className="property-row">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div className="property-card" key={index}>
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Property"
                  className="property-image"
                />
                <div className="property-details">
                  <h3 className="property-title">Modern Apartment</h3>
                  <p className="property-info">
                    2 BHK, 1200 sq. ft, $1,200/month
                  </p>
                  <button className="view-details">View Details</button>
                </div>
              </div>
            ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>
          Join our platform today to buy, sell, or rent properties. It's fast,
          secure, and hassle-free!
        </p>
      </footer>
      <Footer4 />
    </div>
  );
};

export default ResidentialRentals;

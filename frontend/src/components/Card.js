// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Card.css";

// const Card = () => {
//   const cards = [
//     {
//       title: "Real Estate",
//       topics: [
//         "Residential Rentals",
//         "Commercial Properties",
//         "Buy/Sell Homes",
//         "Land/Plots",
//         "Shared Accommodation",
//       ],
//     },
//     {
//       title: "Vehicles",
//       topics: [
//         "Cars",
//         "Motorcycles & Scooters",
//         "Trucks & Commercial Vehicles",
//         "Bicycles",
//         "Spare Parts & Accessories",
//       ],
//     },
//     {
//       title: "Jobs",
//       topics: [
//         "Full-Time Jobs",
//         "Part-Time Jobs",
//         "Freelance/Gigs",
//         "Internships",
//         "Work-from-Home Opportunities",
//       ],
//     },
//     {
//       title: "Services",
//       topics: [
//         "Home & Garden Services (cleaning, plumbing, electrical)",
//         "Beauty & Wellness (salon, spa, fitness trainers)",
//         "Business & IT Services (consulting, web development, marketing)",
//         "Educational Services (tutoring, coaching, workshops)",
//         "Event Services (catering, photography, party planners)",
//       ],
//     },
//   ];

//   const navigate = useNavigate(); // Hook to navigate to /all-cards

//   return (
//     <div className="cards-container">
//       <h1 className="main-title">Featured Categories</h1>
//       <div className="cards-grid">
//         {cards.map((card, index) => (
//           <div key={index} className="card">
//             <h2 className="card-title">{card.title}</h2>
//             <ul className="card-topics">
//               {card.topics.map((topic, idx) => (
//                 <li key={idx} className="card-topic">
//                   {topic}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       {/* <button */}
//         className="show-more-button"
//         onClick={() => navigate("/all-cards")}
//       >
//         Show More
//       </button>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Card.css";

import icon1 from "../images/icon1.jpeg";
import icon2 from "../images/icon2.jpeg";
import icon3 from "../images/icon3.jpeg";
import icon4 from "../images/icon4.jpeg";

const Card = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  const cards = [
    {
      image: icon1,
      title: "Real Estate",
      topics: [
        "Residential Rentals",
        "Commercial Properties",
        "Buy/Sell Homes",
        "Land/Plots",
        "Shared Accommodation",
      ],
    },
    {
      image: icon2,
      title: "Vehicles",
      topics: [
        "Cars",
        "Motorcycles & Scooters",
        "Trucks & Commercial Vehicles",
        "Bicycles",
        "Spare Parts & Accessories",
      ],
    },
    {
      image: icon3,
      title: "Jobs",
      topics: [
        "Full-Time Jobs",
        "Part-Time Jobs",
        "Freelance/Gigs",
        "Internships",
        "Work-from-Home Opportunities",
      ],
    },
    {
      image: icon4,
      title: "Home & Furniture",
      topics: [
        "Furniture",
        "Home Decor",
        "Kitchen & Dining",
        "Lighting & Fans",
        "Garden & Outdoor",
      ],
    },
  ];

  return (
    <div className="cards-container">
      <h1 className="main-title">Featured Categories</h1>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-image">
              <img src={card.image} alt={`${card.title} Icon`} />
            </div>
            <h2 className="card-title">{card.title}</h2>
            <hr className="card-divider" />
            <ul className="card-topics">
              {card.topics.map((topic, idx) => (
                <li key={idx} className="card-topic">
                  {topic}
                </li>
              ))}
            </ul>
            <a href="#" className="card-more">
              More
            </a>
          </div>
        ))}
      </div>
      <button
        className="show-more-button"
        onClick={() => navigate("/all-cards")}
      >
        Show More
      </button>
    </div>
  );
};

export default Card;

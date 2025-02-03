import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar8 from "../components/Navbar8";
import "./AllCard.css";
import icon1 from "../images/icon1.jpeg";
import icon2 from "../images/icon2.jpeg";
import icon3 from "../images/icon3.jpeg";
import icon12 from "../images/icon12.jpeg";
import icon13 from "../images/icon13.jpeg";

import icon4 from "../images/icon4.jpeg";
import icon5 from "../images/icon5.jpeg";
import icon6 from "../images/icon6.jpeg";
import icon7 from "../images/icon7.jpeg";
import icon8 from "../images/icon8.jpeg";
import icon9 from "../images/icon9.jpeg";
import icon10 from "../images/icon10.jpeg";

import icon14 from "../images/icon14.jpeg";
import icon11 from "../images/icon11.jpeg";
import Footer4 from "../components/Footer4";

const AllCards = () => {
  const navigate = useNavigate();

  // const AllCards = () => {
  const cards = [
    {
      image: icon1,
      title: "Real Estate",
      topics: [
        {
          name: "Residential Rentals",
          path: "/real-estate/residential-rentals",
        },
        {
          name: "Commercial Properties",
          path: "/real-estate/commercial-properties",
        },
        { name: "Buy/Sell Homes", path: "/real-estate/buy-sell-homes" },
        { name: "Land/Plots", path: "/real-estate/land-plots" },
        {
          name: "Shared Accommodation",
          path: "/real-estate/shared-accommodation",
        },
      ],
    },
    {
      image: icon2,
      title: "Vehicles",
      topics: [
        { name: "Cars", path: "/vehicles/cars" },
        {
          name: "Motorcycles & Scooters",
          path: "/vehicles/motorcycles-scooters",
        },
        {
          name: "Trucks & Commercial Vehicles",
          path: "/vehicles/trucks-commercial",
        },
        { name: "Bicycles", path: "/vehicles/bicycles" },
        {
          name: "Spare Parts & Accessories",
          path: "/vehicles/spare-parts-accessories",
        },
      ],
    },
    {
      image: icon3,
      title: "Jobs",
      topics: [
        { name: "Full-Time Jobs", path: "/jobs/full-time-jobs" },
        { name: "Part-Time Jobs", path: "/jobs/part-time-jobs" },
        { name: "Freelance/Gigs", path: "/jobs/freelance-gigs" },
        { name: "Internships", path: "/jobs/internships" },
        { name: "Work-from-Home Opportunities", path: "/jobs/work-from-home" },
      ],
    },
    {
      image: icon12,
      title: "Services",
      topics: [
        { name: "Home & Garden Services", path: "/services/home-garden" },
        { name: "Beauty & Wellness", path: "/services/beauty-wellness" },
        { name: "Business & IT Services", path: "/services/business-it" },
        { name: "Educational Services", path: "/services/educational" },
        { name: "Event Services", path: "/services/event" },
      ],
    },
    {
      image: icon13,
      title: "Electronics & Appliances",
      topics: [
        { name: "Mobile Phones", path: "/electronics/mobile-phones" },
        { name: "Laptops & Computers", path: "/electronics/laptops" },
        { name: "Home Appliances", path: "/electronics/home-appliances" },
        { name: "TVs, Audio, Video", path: "/electronics/tvs-audio" },
        { name: "Cameras & Drones", path: "/electronics/cameras-drones" },
      ],
    },
    {
      image: icon14,
      title: "Fashion & Accessories",
      topics: [
        { name: "Clothing (Men, Women, Kids)", path: "/fashion/clothing" },
        { name: "Shoes & Footwear", path: "/fashion/shoes" },
        { name: "Jewelry & Watches", path: "/fashion/jewelry" },
        { name: "Handbags & Wallets", path: "/fashion/handbags" },
        { name: "Sunglasses & Eyewear", path: "/fashion/sunglasses" },
      ],
    },
    {
      image: icon4,
      title: "Home & Furniture",
      topics: [
        { name: "Furniture", path: "/home-furniture/furniture" },
        { name: "Home Decor", path: "/home-furniture/home-decor" },
        { name: "Kitchen & Dining", path: "/home-furniture/kitchen-dining" },
        { name: "Lighting & Fans", path: "/home-furniture/lighting-fans" },
        { name: "Garden & Outdoor", path: "/home-furniture/garden-outdoor" },
      ],
    },
    {
      image: icon5,
      title: "Pets & Animals",
      topics: [
        { name: "Dogs & Puppies", path: "/pets/dogs" },
        { name: "Cats & Kittens", path: "/pets/cats" },
        { name: "Birds & Fish", path: "/pets/birds-fish" },
        { name: "Pet Supplies & Accessories", path: "/pets/supplies" },
        { name: "Farm Animals", path: "/pets/farm-animals" },
      ],
    },
    {
      image: icon6,
      title: "Books, Music & Hobbies",
      topics: [
        { name: "Books (New & Used)", path: "/hobbies/books" },
        { name: "Musical Instruments", path: "/hobbies/musical-instruments" },
        { name: "Video Games & Consoles", path: "/hobbies/video-games" },
        { name: "Collectibles", path: "/hobbies/collectibles" },
        { name: "Sports Equipment", path: "/hobbies/sports-equipment" },
      ],
    },
    {
      image: icon7,
      title: "Health & Beauty",
      topics: [
        { name: "Beauty Products", path: "/health-beauty/beauty-products" },
        { name: "Fitness Equipment", path: "/health-beauty/fitness-equipment" },
        {
          name: "Health Supplements",
          path: "/health-beauty/health-supplements",
        },
        { name: "Personal Care Items", path: "/health-beauty/personal-care" },
      ],
    },
    {
      image: icon8,
      title: "Baby & Kids",
      topics: [
        { name: "Baby Clothes & Shoes", path: "/baby-kids/clothes-shoes" },
        { name: "Toys & Games", path: "/baby-kids/toys-games" },
        {
          name: "Baby Gear (strollers, car seats)",
          path: "/baby-kids/baby-gear",
        },
        { name: "Kids' Furniture", path: "/baby-kids/kids-furniture" },
      ],
    },
    {
      image: icon9,
      title: "Freelance Gigs & Side Hustles",
      topics: [
        { name: "Content Creation", path: "/freelance/content-creation" },
        { name: "Graphic Design", path: "/freelance/graphic-design" },
        { name: "Coding & Development", path: "/freelance/coding" },
        { name: "Digital Marketing", path: "/freelance/digital-marketing" },
        {
          name: "Virtual Assistant Services",
          path: "/freelance/virtual-assistant",
        },
      ],
    },
    {
      image: icon10,
      title: "Community & Events",
      topics: [
        { name: "Classes & Workshops", path: "/community/classes" },
        { name: "Local Events", path: "/community/local-events" },
        { name: "Lost & Found", path: "/community/lost-found" },
        { name: "Volunteers & Donations", path: "/community/volunteers" },
        { name: "Sports & Recreational Activities", path: "/community/sports" },
      ],
    },
    {
      image: icon11,
      title: "Miscellaneous",
      topics: [
        { name: "Everything Else", path: "/miscellaneous/everything-else" },
        { name: "Unique Items", path: "/miscellaneous/unique-items" },
        { name: "Barter & Trade", path: "/miscellaneous/barter-trade" },
      ],
    },
  ];

  return (
    <div className="cards-container">
      <Navbar8 />
      <h1 className="main-title">All Categories</h1>
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
                <li
                  key={idx}
                  className="card-topic"
                  onClick={() => navigate(topic.path)}
                >
                  {topic.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer4 />
    </div>
  );
};

export default AllCards;

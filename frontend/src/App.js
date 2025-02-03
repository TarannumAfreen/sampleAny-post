import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import AllCards from "./views/AllCards";
import ResidentialRentals from "./pages/ResidentialRentals";
import NotFound from "./views/Not-found";
import PostAd from "./components/PostAd";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post-ad" component={PostAd} />
      <Route path="/all-cards" element={<AllCards />} />
      <Route
        path="/real-estate/residential-rentals"
        element={<ResidentialRentals />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

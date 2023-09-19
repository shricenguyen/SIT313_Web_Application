import React from "react";
import MainImage from "./MainDisplay/main-image.js";
import CardSection from "./MainDisplay/card-section.js";
import SubscriptionBar from "./MainDisplay/subscription-bar.js";

const MainDisplay = () => {
  return (
    <div>
      <MainImage />
      <CardSection title="Featured Freelancers" />
      <CardSection title="Featured Customers" />
      <SubscriptionBar />
    </div>
  );
};

export default MainDisplay;

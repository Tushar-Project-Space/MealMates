import React, { useState } from "react";
import Header from "../../Component/Common/header";
import TabOptions from "../../Component/Common/tabOptions";
import Footer from "../../Component/Common/footer";

import Delivery from "../../Component/delivery/index";
import DiningOut from "../../Component/diningOut";
import NightLife from "../../Component/nightLife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />

      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />

      {getCorrectScreen(activeTab)}

      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;

    case "Dining Out":
      return <DiningOut />;

    case "Nightlife":
      return <NightLife />;

    default:
      return <Delivery />;
  }
};

export default HomePage;

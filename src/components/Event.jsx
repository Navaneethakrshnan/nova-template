import React from "react";
import Header2 from "./Header2";
import Footer from "./Footer";
import UpcomingEvents from "./UpcomingEvents";
import MobileMenu from "./MobileMenu";

const Event = () => {
  return (
    <div>
      <div className="">
        <Header2 />
        <MobileMenu />
        <div className="pt-24 mb-64">
          <UpcomingEvents />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Event;

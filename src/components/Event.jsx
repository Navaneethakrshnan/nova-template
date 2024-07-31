import React from "react";
import Header2 from "./Header2";
import Footer from "./Footer";
import UpcomingEvents from "./UpcomingEvents";

const Event = () => {
  return (
    <div>
      <div className="mt-24">
        <Header2 />
        <div className="pt-4 h-screen border-black">
          <UpcomingEvents />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Event;

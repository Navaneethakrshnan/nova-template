import React from "react";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import TestimonialsSlider from "./TestimonialsSlider";
import Events from "./Events";
import Testimonial from "./Testimonial";
import Button from "./Button";
import UpcomingEvents from "./UpcomingEvents";
import Services from "./Services";
import Enquirey from "./Enquirey";
import WhyChooseUs from "./WhyChooseUs";
import Contact from "./Contact";
import Footer from "./Footer";
import RegistrationPage from "./RegistrationPage";
import EventLanding from "./EventLanding";

const Home = () => {
  return (
    <div>
      <MainMenu />
      <MobileMenu />
      <div className="mt-0 lg:mt-0">
        <Testimonial />
      </div>
      <div className="flex flex-col text-center mt-0 lg:pt-10 w-full ">
        <h1
          className="text-4xl font-medium title-font text-[#292662]"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          Recent Events
        </h1>
        <Events />
      </div>
      <Link>
        <Button />
      </Link>
      <div className="flex flex-col pt-12 text-center w-full">
        <h1
          className="text-4xl font-medium title-font text-[#292662]"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          Upcoming Events
        </h1>
        <UpcomingEvents />
      </div>
      <Link to="/events">
        <Button />
      </Link>
      <Services />
      <Enquirey />
      <WhyChooseUs />
      <Contact />
      {/* <RegistrationPage/>
      <EventLanding /> */}
      <Footer />
    </div>
  );
};

export default Home;

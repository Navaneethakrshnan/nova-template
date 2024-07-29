import React from "react";
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
import Header2 from "./Header2";
import EventLanding from "./EventLanding";

const Home = () => {
  return (
    <div>
      <MainMenu />
      <MobileMenu />
      {/* <Testimonial /> */}
       <Events />
      <Button />
      <UpcomingEvents />
      <Button />
      <Services />
      <Enquirey />
      <WhyChooseUs />
      <Contact />
      
      <Footer />
    </div>
  );
};

export default Home;

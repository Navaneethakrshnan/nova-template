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
      <Testimonial/>
      {/* <div class="flex flex-col text-center mt-12 lg:pt-20 w-full mb-20">
        <h1
          class="text-4xl font-mediumnt- title-font text-[#292662]"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          Recent Events
          <Events />
        </h1>
      </div>
      <Button />
      <div class="flex flex-col pt-12 text-center w-full mb-20">
        <h1
          class="text-4xl font-mediumnt- title-font text-[#292662]"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          Upcoming Events
        </h1>
        <UpcomingEvents />
      </div>
      <Button />
      <Services />
      <Enquirey />
      <WhyChooseUs />
      <Contact /> */}
      {/* <RegistrationPage/> */}
      {/* <EventLanding /> */}
      <Footer />
    </div>
  );
};

export default Home;

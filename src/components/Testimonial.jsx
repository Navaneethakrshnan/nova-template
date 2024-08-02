import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/img22.jpg";
import "./Testimonial.css"; // Import the CSS file

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      header:
        "NovaRace: Your Complete Race Management Solution, from Start Line to Finish Line",
    },
    {
      id: 2,
      header:
        "Timing Solutions Tailored to Your Race Needs - Contact NovaRace Today!",
    },
    {
      id: 3,
      header:
        "Simplify Event Management with NovaRace: Online Registration Made Easy!",
    },
  ];

  const SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div>
      <div className="bg-[#4e54c8] mb-12 z-40 -ml-28 w-[32.9rem] lg:w-[97rem]">
        <div
          className="absolute bottom-[50%] lg:bottom-36 left-0 right-4 z-[2] mx-[15%] mb-4 list-none flex justify-center p-0"
          data-twe-carousel-indicators
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              data-twe-target="#carouselExampleCaptions"
              data-twe-slide-to={index}
              className={`mx-[3px] box-content h-[12px] w-[12px] flex-initial cursor-pointer border-0 bg-white p-0 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none rounded-full ${
                currentSlide === index ? "bg-sky-600 w-[24px]" : ""
              }`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        <Slider ref={sliderRef} {...SliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div
              className="text-white ml-12 lg:ml-12 2xl:ml-2 h-[30rem] lg:h-[48rem] px-28 lg:px-32 flex justify-center"
              key={testimonial.id}
            >
              <div>
                {index === 0 ? (
                  <p
                    className="text-xl lg:text-5xl font-medium pt-40 lg:pt-72 leading-relaxed lg:leading-loose"
                    style={{
                      fontFamily: "Nunito Sans, sans-serif",
                    }}
                  >
                    {testimonial.header.split(" ").map((word, i) => (
                      <span
                        key={i}
                        className={word === "NovaRace:" ? "text-red-700" : ""}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </p>
                ) : (
                  <p
                    className="text-xl lg:text-5xl font-medium pt-40 lg:pt-72 leading-relaxed lg:leading-loose"
                    style={{
                      fontFamily: "Nunito Sans, sans-serif",
                    }}
                  >
                    {testimonial.header}
                  </p>
                )}
              </div>
              <button
                className="bg-[#0d6efd] rounded-md h-10 w-20 mt-8 z-10"
                style={{ fontFamily: "Varela Round, sans-serif" }}
              >
                Call Us
              </button>
            </div>
          ))}
        </Slider>
      </div>
      <div className="area">
        <ul className="circles">
          {[...Array(10)].map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;

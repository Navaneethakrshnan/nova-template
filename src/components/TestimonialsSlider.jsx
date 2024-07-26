import React from "react";
import Slider from "react-slick";

const TestimonialsSlider = () => {
  const phoneNumber = "9626560404";
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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <section className="testimonials-slider masthead -type-4">
        <div className="h-auto masthead-slider overflow-x-hidden overflow-y-hidden p-4">
          <div className="flex justify-center items-center text-center">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="testimonial px-3">
                  <h1
                    className="text-5xl lg:text-4xl md:text-3xl text-white"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    {testimonial.header.split(" ").map((word, i) => (
                      <span
                        key={i}
                        className={word === "NovaRace:" ? "text-red-600" : ""}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </h1>
                  <div className="inline-block mt-8">
                    <a
                      href={`https://wa.me/${phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-3 text-white bg-black border border-white py-2 px-4 rounded"
                    >
                      Call us
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <div className="area">
        <ul className="circles">
          {[...Array(10)].map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TestimonialsSlider;

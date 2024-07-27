import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    header:
      "NovaRace: Your Complete Race Management Solution, from Start Line to Finish Line",
  },
  {
    header:
      "Timing Solutions Tailored to Your Race Needs - Contact NovaRace Today!",
  },
  {
    header:
      "Simplify Event Management with NovaRace: Online Registration Made Easy!",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-96 mt-44 bg-slate-200">
      <div className="w-[100] m-auto">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#4e54c8] p-6 text-white text-center"
            >
              <div>
                <h2 className="font-semibold mb-4 text-5xl">{item.header}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

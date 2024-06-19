import React from "react";
import Slider from "react-slick";
import image4 from '../../assets/Image/air-cargo.jpg';
import image5 from '../../assets/Image/air.png';
import image6 from '../../assets/Image/arrow.png';
import image7 from '../../assets/Image/ship.jpg';
import { Button, Img, Line, Text } from '../../components';
import { Heading } from '../../components/Heading/index.jsx';

const services = [
  {
    id: 1,
    img: image4
  },
  {
    id: 2,
    img: image7,
  },
  {
    id: 3,
    img: image4,
  },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="container">
        <div data-aos="fade-up" className="grid grid-cols-1 mx-auto">
          <Slider {...settings}>
            {services.map(({ id, img }) => (
            
            
              <div key={id} className="p-1"> {/* Adjust the padding here */}
                <div className="flex w-[100%] sm:flex-col">
                  <div className="relative z-[2] flex w-full flex-col items-end justify-center sm:w-full sm:ml-[-75px]">
                    <Img
                      src={img}
                      alt="service image"
                      className="h-[274px] w-[275px] md:w-[220px]  object-cover"
                    />
                    <Img
                      src={image5}
                      alt="read more icon"
                      className="relative mt-[-70px] h-[71px] w-[72px] object-cover rounded-[50%]"
                    />
                  </div>
                  <div className="relative ml-[-1px] md:ml-[0px] h-[274px] mt-[4px] w-full  md:h-auto sm:ml-[8px] sm:w-[72%]">
                    <div className="h-[274px] w-[90%] md:w-[99%] sm:w[99%] border-[3px] border-solid border-gray-100 bg-white-A700" />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[82%] sm:w-[50%] flex-col items-start">
                      <Heading as="h5" className="!text-[23px] !text-black-900">
                        Air Freight Services
                      </Heading>
                      <Text as="p" className="mt-4 w-full !text-[14px] leading-[15px] text-black-900">
                        <>t
                          At our Auto Service garage, we are
                          <br />
                          fully appreciate how difficult occur
                          <br />
                          it is for people to find.
                        </>
                      </Text>
                      <div className="mt-[29px] flex items-center gap-[7px]">
                        <button shape="square" className="w-[10%] h-[10%] rounded-full">
                          <Img src={image6} />
                        </button>
                        <Heading size="xs" as="h6" className="!text-[14.5px] text-black-900_cc hover:text-orange-400">
                          ReadMore
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;

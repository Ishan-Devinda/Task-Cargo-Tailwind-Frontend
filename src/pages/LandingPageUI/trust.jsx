import React from "react";
import Slider from "react-slick";

import image6 from '../../assets/Image/arrow.png';
import image7 from '../../assets/Image/ship.jpg';
import image8 from '../../assets/Image/trusted.png';
import { Button, Img, Line, Text } from '../../components';
import { Heading } from '../../components/Heading/index.jsx';

const services = [
  {
    id: 1,
    img: image8
  },
  {
    id: 2,
    img: image7,
  },
  
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 2000,
    swipeToSlide: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
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
    <div className="py-1">
      <div className="container">
        <div data-aos="fade-up" className="grid grid-cols-1 mx-auto">
          <Slider {...settings}>
            {services.map(({ id, img }) => (
              <div key={id} className="p-1"> {/* Adjust the padding here */}
                
                
                
                <div> 
                 
                  <div className="flex self-stretch  h-[150px] md:h-[220px] bg-blue_gray-100">

                    <div className="mb-[110px] ml-[-40px]">

                    <Img
                      src={image8}
                      alt="read more icon"
                      className="  w-[300%] h-[300%] md:mt-[-200px] object-cover "
                    />

                    </div>
                  
                     <Text as="p" className="w-[100%] !text-[17px] md:!text-[12px] leading-[25px] md:leading-[20px] !text-black-900 mt-[20px] px-[20px]  text-justify">
                       Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisal pellentesque bibendum
                      </Text>
                 </div> 
                 <Heading  as="h3" className='!text-black-900 !font-bold !text-[18.5px] text-right ml-[400px] md:ml-[0px] mt-[5px]'> 
                   JOHN DEO </Heading>
                 <Text  as="p" className='!text-black-900 !text-[18.5px] text-right ml-[200px] md:ml-[0px] mt-[5px]'>
                   Managing otector
                 </Text>

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

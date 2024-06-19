import React from 'react';
import { Button, Img, Line, Text } from '../../components';
import { Heading } from '../../components/Heading/index.jsx';
import Header from '../../components/Navbar.jsx';
import Footer from '../../components/Footer/index.jsx';
import image1 from '../../assets/Image/cargo.jpg';
import image2 from '../../assets/Image/work2.jpg';
import image3 from '../../assets/Image/work1.png';
import image4 from '../../assets/Image/air-cargo.jpg';
import image5 from '../../assets/Image/calender.jpg';
import image6 from '../../assets/Image/msg.jpg';
import image7 from '../../assets/Image/ship.jpg'
import image8 from '../../assets/Image/logo1 (1).png';
import image9 from '../../assets/Image/logo1 (2).png';
import image10 from '../../assets/Image/logo1 (3).png';
import  image11 from '../../assets/Image/logo2 (1).png';
import image12 from '../../assets/Image/logo2 (2).png';
import useInterSection from './userInterSection.jsx';
import Services from './services.jsx'
import Trusted from './trust.jsx'


const LandingPageUIPage = () => {
  
  const [contentRef, isContentVisible] = useInterSection({ threshold: 0.1});

  return (
    <>
      <Header />
      <div className="flex w-full flex-col bg-white-A700 p-[80px] sm:p-5">
        <div className="mx-auto mb-[5px] mt-[-50px] flex w-full flex-col item-end">
          <div className="flex items-center self-stretch p-[3px] md:flex-col sm:p-5">
            {/* services overview section */}
            <div className="relative z-[1] flex w-[60%] h-[500px] justify-center bg-white-A700 p-[3px] md:w-full sm:p-5 mt-[-15px]">
              <div className="mt-[9px] flex w-[88%] flex-col gap-[1px] md:w-ful">
                {/* logistics highlight section */}
                <div className="ml-1.5 flex items-center gap-4 md:ml-0 mt-[30px] md:mt-[-10px]">
                  <Line className="bg-yellow-700 h-[20px] md:h-[20px] md:ml-[4px] mb-[2px] rotate-[0deg] md:w-[5px] md:rotate-[0deg] w-[5px]" />
                  <Text size="2xl" as="p" className="!text-[19.5px]">
                    LOGISTIC
                  </Text>
                </div>
                {/* company description section */}
                <div className="flex flex-col items-start">
                  <div className="flex flex-col items-start gap-[30px] md:gap-[10px] mt-[30px] md:mt-[10px]">
                    <Text size="3xl" as="p" className="!text-black-900 !font-bold">
                      Best Shipping
                    </Text>
                    <Heading size="5xl" as="h1" className="!text-yellow-700 !font-bold">
                      Partner
                    </Heading>
                  </div>
                  <Text size="s" as="p" className="ml-1.5 mt-[30px] md:mt-[10px] w-full !text-[13.5px] leading-[15px] md:ml-0 text-justify">
                    <>
                      Amet, tempus egestas facilisis volutpat viverra molestie lobortis
                      <br />
                      posuere maecenas.molestielobortisposuere maecenas.Eget
                      <br />
                      sapien,gravida nequi.
                    </>
                  </Text>
                  <button size="md" shape="square" className="mt-[30px] bg-[#f3c11d] h-[50px] min-w-[192px] text-white-A700 !text-[20px] hover:text-cyan-50 hover:bg-black-900 sm:px-5">
                    DISCOVER MORE
                  </button>
                </div>
              </div>
            </div>

            {/* main banner section */}
            <Img
            
              src={image1}
              alt="secondary image"
              className="relative mb-[26px] ml-[-52px] h-[619px] md:h-[350px] sm:h-[250px] sm:mt-[1px] md:mt-[-20px] w-[100%] object-cover md:ml-0 md:w-full transition-transform duration-700 ease-in-out "
            />
          </div>

          <div className="mr-[17px] mt-[60px] flex items-start justify-between gap-5 self-stretch p-[39px] ml-[60px] md:mr-0 md:flex-col sm:p-5">
            <div className="relative ml-[17px] md:ml-[50px] mt-[54px] h-[592px] w-[47%] md:m1-0 md:w-full">
              <Img
                 
                src={image3}
                alt="inventory image"
                className="absolute right-[0.00px] md:right-[50px] top-[0.00px] m-auto h-[510px] sm:h-[300px] md:mt-[-100px] md:h-[350px] w-[66%] md:w-[90%] object-cover transition-transform duration-700 ease-in-out "
              />
                <Img
                ref={contentRef}
                src={image2}
                alt="team image"
                className={`absolute bottom-[-30px] md:bottom-[300px] md:left-[-100px] left-[100px] m-auto h-[450px] md:h-[350px] sm:h-[250px] w-[40%] md:w-[70%] object-cover transition-transform duration-700 ease-in-out ${
                  isContentVisible ? 'animate-moveLeftToRight' : ''
                }`}
              />
            </div>

            <div
              ref={contentRef}
              className={`mr-[77px] mt-[108px] md:mt-[-200px] flex w-[35%] flex-col items-start gap-[22px] md:mr-0 md:w-full transition-transform duration-700 ease-in-out ${
                isContentVisible ? 'animate-moveRightToLeft' : ''
              }`}
            >
              {/* feature description section */}
              <div className="flex w-full md:w-full">
                <div className="flex w-full flex-col items-start gap-[11px]">
                  <Heading size="3xl" as="h2" className="!text-black-900 font-bold">
                    TransMax Logistics
                  </Heading>
                  <div className="flex flex-wrap items-start gap-[18px] self-stretchn">
                    <Heading size="3xl" as="h3" className="!font-bold !text-black-900">
                      Around
                    </Heading>
                    <Heading size="3xl" as="h4" className="!text-deep_orange-300 !font-bold">
                      the World
                    </Heading>
                  </div>
                </div>
              </div>
              <Text size="xl" as="p" className="w-full !text-[16.5px] leading-[19px] !font-semibold text-justify mt-[30px]">
                <>
                  Transmaxis the world's driving worldwide coordinations
                  <br />
                  supplier—we uphold industry and exchange the worldwide
                  <br />
                  trade of merchandise through land transport.
                </>
              </Text>
              <Text size="s" as="p" className="w-[100%] !text-[13.5px] leading-4 md:w-full">
                <>
                  Our worth added administrations ensure the progression of
                  <br />
                  goods proceeds consistently and supply chains stay lean and
                  <br />
                  streamlined for progress.
                </>
              </Text>
              <button size="sm" shape="csquare" className="ml-[0px] mt-[30px] min-w-[193px] h-[50px] bg-[#f3c11d] text-white-A700 md:m1-0 sm:px-5 !text-[20px] hover:text-cyan-50 hover:bg-black-900 sm:px-5">
                MOREABOUTUS
              </button>
            </div>
          </div>


         


            <div className="mt-[150px] flex w-[85%] flex-col gap-[45px] self-center md:w-full">
              <div className="flex flex-col items-start  sm:gap-[26px]">
               
               <Heading size="1xl" as="h3" className="self-center !text-green-900_cc  !font-bold">
                 Real Solution,Real Fast!
               </Heading>
              </div> 
              <div className="ml-[39px] flex flex-col items-end gap-[77px] md:m1-0 md:gap-[57px] sm:gap-[38px]"> 
                <Heading size="3xl" as="h4" className="self-center !text-black-900  md:mr-0 md:text-center mt-[-10px]">
                   Best Global Logistics Solutions.
                </Heading>
                <div className="flex gap-[0px] self-stretch md:flex-col">


                    <section>
                      <Services/>
                    </section>
                </div>

                
                 <Heading size="1xl" as="h3" className="self-start !text-gray-900 mt-[-70px] md:mt-[0px] ml-[100px]  !font-bold">
                 Logistic & Transport Solution Saves Your Time.
                 <text className="!font-bold text-black-900 ">
                 Find your Solutions
                 </text> 
                 </Heading>
                   <Img
                      src={image6}
                      alt="read more icon"
                      className="relatil mr-[775px] mt-[-100px] h-[30px] w-[30px] object-cover rounded-[50%]"
                    />
              </div>
            </div>






            <div className="flex w-[88%]  items-center justify-between gap-5 mt-[150px] md:w-full md:flex-col ml-[130px] md:ml-[50px]">
               <div className="relative h-[155px] md:ml-[-100px] w-[22%] md:h-auto md:w-full">
                 <Heading  as="h4" className="!font-bold text-yellow-100 !text-[150px] mt-[50px]" >
                  890
                 </Heading>
                 <div className="absolute left-0 right-0 top-[22%] m-auto flex w-[92%]">
                   <div className="flex w-full items-center justify-between gap-5">
                     <Heading size="5xl" as="h5" className="!text-black-900 mt-[-20px] hover:text-yellow-700 ">
                       890 
                     </Heading>
                     <div className="flex flex-col items-start gap-[8px] mt-[-15px] mr-[30px] ">
                       <Text as="p" className="!text-[21.5px] !text-black-900 !font-semibold  hover:text-yellow-700 ">
                         Delivered 
                       </Text>
                       <Text size="4xl" as="p" className="!text-[21.5px] !text-black-900 !font-semibold">
                         packages 
                       </Text>
                     </div>
                   </div>
                 </div>
               </div> 

               <div className="relative md:mt-[80px] md:ml-[-100px] h-[155px] w-[22%] md:h-auto md:w-full">
                 <Heading  as="h4" className="!font-bold text-yellow-100 !text-[150px] mt-[50px]" >
                  137
                 </Heading>
                 <div className="absolute left-0 right-0 top-[22%] m-auto flex w-[92%]">
                   <div className="flex w-full items-center justify-between gap-5">
                     <Heading size="5xl" as="h5" className="!text-black-900 mt-[-20px]">
                       137 
                     </Heading>
                     <div className="flex flex-col items-start gap-[8px] mt-[-15px] mr-[30px] ">
                       <Text as="p" className="!text-[21.5px] !text-black-900 !font-semibold">
                         Countries
                       </Text>
                       <Text size="4xl" as="p" className="!text-[21.5px] !text-black-900 !font-semibold">
                         Covered 
                       </Text>
                     </div>
                   </div>
                 </div>
               </div> 

               <div className="relative h-[155px] md:ml-[-100px] w-[22%] md:h-auto md:w-full md:mt-[80px]">
                 <Heading  as="h4" className="!font-bold text-yellow-100 !text-[150px] mt-[50px]" >
                  740
                 </Heading>
                 <div className="absolute left-0 right-0 top-[22%] m-auto flex w-[92%]">
                   <div className="flex w-full items-center justify-between gap-5">
                     <Heading size="5xl" as="h5" className="!text-black-900 mt-[-20px]">
                       740
                     </Heading>
                     <div className="flex flex-col items-start gap-[8px] mt-[-15px] mr-[30px] ">
                       <Text as="p" className="!text-[21.5px] !text-black-900 !font-semibold">
                         Tons of
                       </Text>
                       <Text size="4xl" as="p" className="!text-[21.5px] !text-black-900 !font-semibold">
                         Goods
                       </Text>
                     </div>
                   </div>
                 </div>
               </div> 
               <div className="relative h-[155px] w-[22%] md:ml-[-100px] md:h-auto md:w-full md:mt-[80px]">
                 <Heading  as="h4" className="!font-bold text-yellow-100 !text-[150px] mt-[50px]" >
                  600
                 </Heading>
                 <div className="absolute left-0 right-0 top-[22%] m-auto flex w-[92%]">
                   <div className="flex w-full items-center justify-between gap-5">
                     <Heading size="5xl" as="h5" className="!text-black-900 mt-[-20px]">
                       600
                     </Heading>
                     <div className="flex flex-col items-start gap-[8px] mt-[-15px] mr-[30px] ">
                       <Text as="p" className="!text-[21.5px] !text-black-900 !font-semibold">
                         Statisfied
                       </Text>
                       <Text size="4xl" as="p" className="!text-[21.5px] !text-black-900 !font-semibold">
                         Client 
                       </Text>
                     </div>
                   </div>
                 </div>
               </div> 
               
           </div> 





           {/* testimonials section */} 
           <div className=" mt-[150px] flex w-[100%] h-[400px] md:h-[500px] flex-col items-start gap-[20px] self-start md:m1-0 md:w-full sm:gap-[27px] bg-slate-500">
          
            <div className="flex w-[89%] items-center justify-between gap-5 self-end md:w-full md:flex-col mt-[30px]">
               <div className="flex w-[48%] flex-col items-start gap-[17px] md:w-full">
                 <Heading size="2xl" as="h3" className='!text-black-900 !font-bold '> 
                   TRUSTED CLIENTS </Heading>
                 <Text size="xl" as="p" className='!text-black-900'>
                   LOREM IPSUM DOLOR SIT AMET CONSECTETUR
                 </Text>
                 <section>
                  <Trusted/>
                 </section>


                </div> 
{/* why choose us section */} 
                <div className="flex w-[46%] md:mt-[100px] flex-col items-center md:w-full mt-[10px] ">
                   <Heading size="2xl" as="h4" className="self-start !text-black-900 !font-bold" >
                     WHY CHOOSE US </Heading>
                    <Text size="xl" as="p" className="mt-4 self-start !text-black-900"> LOREM IPSUM DOLOR SIT AMET CONSECTETUR 
                    </Text> 
               <div className="mt-[40px] self-stretch">
                 <div className="flex flex-col ">
                   <div className="h-px bg-gray-700" />
                    <div className="flex items-center justify-between gap-10">
                       <Text as="p" className="!text-[15px] mt-[20px] ">
                         Dui ac hendrerit elementum quam ipsum auctor lorem
                          </Text> 
                          <div className="h-[20px] w-[20px] self-end mr-[20px] bg-black-900 " />
                    </div> 
                   </div> 
                </div> 

                <div className="mt-[20px] self-stretch">
                   <div className="flex flex-col gap-1">
                     <div className="h-px bg-gray-700" /> 
                     <div className="flex items-center justify-between gap-5">
                       <Text as="p" className="!text-[15px] mt-[15px]">
                         Mauris vel magna a est lobortis volutpat </Text>
                          <div className="h-[20px] w-[20px] self-end bg-black-900 mr-[20px]" />
                      </div>
                       <div className="h-px bg-gray-700 mt-[15px]" >
                         </div>
                       </div> 
                       <div className="mt-[15px] flex w-[93%] items-start justify-between gap-5 md:w-full sm:flex-col">
                         <Text as="p" className="!text-[15px]"> 
                         Sed bibendum ornare lorem mauris feugiat suspendisse neque </Text>
                         <div className="h-[20px] w-[20px] mr-[-30px] bg-black-900" />
                           </div>
                            <div className="self-stretch-> <div className="flex flex-col gap-2>
                             <div className="h-px bg-gray-700 mt-[15px]"/>
                              <div className="flex items-start justify-between gap-5">
                                 <Text as="p" className="!text-[15px] mt-[15px]">
                                   Nulla scelerisque dul hendrerit elementum quam 
                                   </Text> 
                                   <div className="h-[20px] w-[18px] mt-[20px] bg-black-900 mr-[20px]" />
                               </div>
                            </div>
                        </div>
                     </div>
                 </div>
             </div> 

             <Heading size="3xl" as="h4" className="self-center !text-black-900  md:mr-0 md:mt-[600px] mt-[150px]">
                   Our Clients
                </Heading>



             <div className="flex w-[88%] items-center justify-between gap-5 mt-[80px] md:w-[80%] md:flex-col ml-[130px] md:ml-[50px]">

              
               <div className="relative h-[155px] w-[200px] md:h-auto md:w-full transition-transform duration-300 transform hover:scale-105">
                 <Img src={image8}>

                 </Img>
                 
               </div> 
               <div className="relative h-[155px] w-[200px] md:h-auto md:w-full transition-transform duration-300 transform hover:scale-105">
                 <Img src={image9}>
                  
                 </Img>
                 
               </div> 
               <div className="relative h-[155px] w-[200px] md:h-auto md:w-full transition-transform duration-300 transform hover:scale-105">
                 <Img src={image10}>
                  
                 </Img>
                 
               </div> 
               <div className="relative h-[155px] w-[200px] md:h-auto md:w-full transition-transform duration-300 transform hover:scale-105">
                 <Img src={image11}>
                  
                 </Img>
                 
               </div> 
               <div className="relative h-[155px] w-[200px] md:h-auto md:w-full transition-transform duration-300 transform hover:scale-105">
                 <Img src={image12}>
                  
                 </Img>
                 
               </div> 
             </div>



             <div className="mt-[150px] flex w-[85%] flex-col gap-[45px] self-center md:w-full">
              <div className="flex flex-col items-start  sm:gap-[26px]">
               
               <Heading size="1xl" as="h3" className="self-center !text-green-900_cc  !font-bold">
                   Integer Congueelit
               </Heading>
              </div> 
              <div className="ml-[39px] flex flex-col items-end gap-[77px] md:m1-0 md:gap-[57px] sm:gap-[38px]"> 
                <Heading size="3xl" as="h4" className="self-center !text-black-900  md:mr-0 mt-[-10px]">
                Latest Newes
                </Heading>
                <div className="flex gap-[0px] md:gap-[10px] self-stretch md:flex-col-2">


                
                <div className="flex w-[100%] sm:flex-col">
                  <div className="relative z-[2] flex w-full flex-col items-end justify-center sm:w-full">
                    <Img
                      src={image4}
                      alt="service image"
                      className="h-[274px] w-[275px] object-cover"
                    />
                    <Img
                      src={image5}
                      alt="read more icon"
                      className="relative mt-[-70px] h-[71px] w-[72px] object-cover "
                    />
                  </div>
                  <div className="relative ml-[-1px] md:gap-[10px] h-[274px] mt-[4px] w-full md:h-auto sm:ml-0 sm:w-full " >
                    <div className="h-[274px] w-[90%] sm:w-[99%] border-[3px] border-solid border-gray-100 bg-white-A700 hover:bg-yellow-300" />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[82%] flex-col items-start  hover:bg-yellow-300">
                      <Heading as="h5" className="!text-[18px] md:!text-[14px] !text-black-900 hover:text-white-A700">
                        CURABITURLOREM USIM QUIS
                      </Heading>

                      <div className="mt-[20px] flex items-center gap-[7px]">
                        <Heading size="xs" as="h6" className="!text-[14.5px] text-black-900_cc hover:text-orange-400">
                          Admin
                        </Heading>
                        <button shape="square" className="w-[10%] h-[10%] rounded-full">
                          <Img src={image6} />
                        </button>
                        
                      </div>
                      <Text as="p" className="mt-4 w-full !text-[14px] leading-[20px] text-black-900 hover:text-white-A700 ">
                        <>t
                          At our Auto Service garage, we are
                          <br />
                          fully appreciate how difficult occur
                          <br />
                          it is for people to find.
                        </>
                      </Text>
                     
                    </div>
                  </div>
                </div>


               
                <div className="flex w-[100%] sm:flex-col">
                  <div className="relative z-[2] flex w-full flex-col items-end justify-center sm:w-full">
                    <Img
                      src={image4}
                      alt="service image"
                      className="h-[274px] w-[275px] object-cover"
                    />
                    <Img
                      src={image5}
                      alt="read more icon"
                      className="relative mt-[-70px] h-[71px] w-[72px] object-cover "
                    />
                  </div>
                  <div className="relative ml-[-1px] h-[274px] mt-[4px] w-full md:h-auto sm:ml-0 sm:w-full " >
                    <div className="h-[274px] w-[90%] md:w-[99%] border-[3px] border-solid border-gray-100 bg-white-A700 hover:bg-yellow-300" />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[82%] flex-col items-start  hover:bg-yellow-300">
                      <Heading as="h5" className="!text-[18px] md:!text-[14px] !text-black-900 hover:text-white-A700">
                        CURABITURLOREM USIM QUIS
                      </Heading>

                      <div className="mt-[20px] flex items-center gap-[7px]">
                        <Heading size="xs" as="h6" className="!text-[14.5px] text-black-900_cc hover:text-orange-400">
                          Admin
                        </Heading>
                        <button shape="square" className="w-[10%] h-[10%] rounded-full">
                          <Img src={image6} />
                        </button>
                        
                      </div>
                      <Text as="p" className="mt-4 w-full !text-[14px] leading-[20px] text-black-900 hover:text-white-A700 ">
                        <>t
                          At our Auto Service garage, we are
                          <br />
                          fully appreciate how difficult occur
                          <br />
                          it is for people to find.
                        </>
                      </Text>
                     
                    </div>
                  </div>
                </div>

                
              
                </div>



                <div className="flex gap-[0px] md:gap-[10px] self-stretch md:flex-col-2">


                
                
                <div className="flex w-[100%] sm:flex-col">
                  <div className="relative z-[2] flex w-full flex-col items-end justify-center sm:w-full">
                    <Img
                      src={image4}
                      alt="service image"
                      className="h-[274px] w-[275px] object-cover"
                    />
                    <Img
                      src={image5}
                      alt="read more icon"
                      className="relative mt-[-70px] h-[71px] w-[72px] object-cover "
                    />
                  </div>
                  <div className="relative ml-[-1px] h-[274px] mt-[4px] w-full md:h-auto sm:ml-0 sm:w-full " >
                    <div className="h-[274px] w-[90%] md:w-[99%] border-[3px] border-solid border-gray-100 bg-white-A700 hover:bg-yellow-300" />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[82%] flex-col items-start  hover:bg-yellow-300">
                      <Heading as="h5" className="!text-[18px] md:!text-[14px] !text-black-900 hover:text-white-A700">
                        CURABITURLOREM USIM QUIS
                      </Heading>

                      <div className="mt-[20px] flex items-center gap-[7px]">
                        <Heading size="xs" as="h6" className="!text-[14.5px] text-black-900_cc hover:text-orange-400">
                          Admin
                        </Heading>
                        <button shape="square" className="w-[10%] h-[10%] rounded-full">
                          <Img src={image6} />
                        </button>
                        
                      </div>
                      <Text as="p" className="mt-4 w-full !text-[14px] leading-[20px] text-black-900 hover:text-white-A700 ">
                        <>t
                          At our Auto Service garage, we are
                          <br />
                          fully appreciate how difficult occur
                          <br />
                          it is for people to find.
                        </>
                      </Text>
                     
                    </div>
                  </div>
                </div>


                
                <div className="flex w-[100%] sm:flex-col">
                  <div className="relative z-[2] flex w-full flex-col items-end justify-center sm:w-full">
                    <Img
                      src={image4}
                      alt="service image"
                      className="h-[274px] w-[275px] object-cover"
                    />
                    <Img
                      src={image5}
                      alt="read more icon"
                      className="relative mt-[-70px] h-[71px] w-[72px] object-cover "
                    />
                  </div>
                  <div className="relative ml-[-1px] h-[274px] mt-[4px] w-full md:h-auto sm:ml-0 sm:w-full " >
                    <div className="h-[274px] w-[90%] md:w-[99%] border-[3px] border-solid border-gray-100 bg-white-A700 hover:bg-yellow-300" />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[82%] flex-col items-start  hover:bg-yellow-300">
                      <Heading as="h5" className="md:!text-[14px] !text-[18px] !text-black-900 hover:text-white-A700">
                        CURABITURLOREM USIM QUIS
                      </Heading>

                      <div className="mt-[20px] flex items-center gap-[7px]">
                        <Heading size="xs" as="h6" className="!text-[14.5px] text-black-900_cc hover:text-orange-400">
                          Admin
                        </Heading>
                        <button shape="square" className="w-[10%] h-[10%] rounded-full">
                          <Img src={image6} />
                        </button>
                        
                      </div>
                      <Text as="p" className="mt-4 w-full !text-[14px] leading-[20px] text-black-900 hover:text-white-A700 ">
                        <>t
                          At our Auto Service garage, we are
                          <br />
                          fully appreciate how difficult occur
                          <br />
                          it is for people to find.
                        </>
                      </Text>
                     
                    </div>
                  </div>
                </div>

                </div>

                
                 
              </div>
            </div>








            
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default LandingPageUIPage;

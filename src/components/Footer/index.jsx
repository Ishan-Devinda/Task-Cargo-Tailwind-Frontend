import React from "react";
import image1 from "../../assets/Image/air-cargo.jpg"

import { Img } from "../../components/Img";

const Footer = () => {
  return (
    <>
        <footer class=" bg-gray-700 w-full md:ml-[13px] mt-[100px] ">
              <div class="mx-auto w-full max-w-screen-xl gap-20">


              <div>
      <form action="">
        <div
          class="gird-row-1 grid-cols-3 grid items-center justify-center gap-4 md:grid-cols-3 mt-[20px]">
          <div class="md:mb-6 md:ms-auto ml-[250px] md:ml-[10px]  text-white-A700 !text-[40px]">
            <p>
              <strong>Weekly Newesletter</strong>
            </p>
          </div>

       
          <div class="relative md:mb-6 bg-white-A700 h-[50px] ml-[200px] md:ml-[-110px] md:mt-[150px]" data-twe-input-wrapper-init>
            <input
              type="email"
              class="peer block min-h-[auto] w-full rounded border-0 mt-[15px] bg-white-A700 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInputEmail"
              placeholder="Enter your mail " />
           
          </div>

          
          <div class="mb-6 md:me-auto mt-[20px] md:mt-[150px] md:ml-[-10px] md:w-[100px] bg-orange-600 w-[200px] h-[50px] rounded-[5px]">
            <button
              type="submit"
              class="inline-block rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal mt-[10px] text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>


                <div class="grid grid-cols-4 gap-4 px-[250px] md:px-4 m py-6 lg:py-8 md:grid-cols-2 mt-5">
                  <div >
                      <h2 class="mb-10 text-sm font-semibold text-[24px] text-white-A700 uppercase dark:text-white">About Us</h2>
                      <ul class="text-gray-500  dark:text-gray-400 font-medium">
                          
                          <li class="mb-4">
                              <a  class=" text-orange-600 hover:underline hover:text-cyan-50">- - - - - - - - - - -</a>
                          </li>
                          <li class="mb-4">
                              <a  class=" hover:underline hover:text-cyan-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit</a>
                          </li>
                          <li class="mb-4">
                              <a href="" class="hover:underline hover:text-cyan-50"></a>
                          </li>
                          <li class="mb-4">
                              <a href="" class="hover:underline hover:text-cyan-50">| (+94)11 434 7575</a>
                          </li>
                          <li class="mb-4">
                              <a href="" class="hover:underline hover:text-cyan-50">| 42 liya, colombo 00600</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-10 text-sm font-semibold text-white-A700 text-[24px] uppercase dark:text-white">Latest Newes</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a  class="hover:underline text-orange-600 hover:text-cyan-50">- - - - - - - - - </a>
                          </li>
                          <li class="mb-4">
                              <a href="" class="hover:underline hover:text-cyan-50">Sed ut perspiciatis undo omnis iste natures error sit voluptatem 
                              <br/><br/> 5 Miniuites Ago </a>
                          </li>
                          <li class="mb-4">
                              <a href="" class="hover:underline hover:text-cyan-50">Sed ut perspiciatis undo omnis iste natures error sit voluptatem 
                              <br/><br/> 5 Miniuites Ago </a>
                          </li>
                          
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-10 text-sm font-semibold text-white-A700 text-[24px] uppercase dark:text-white">Custermer Services</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a  class="hover:underline text-orange-600 hover:text-cyan-50">- - - - - - - - - -</a>
                          </li>
                          <li class="mb-4">
                              <a href="" class="hover:underline hover:text-cyan-50">Support Forums</a>
                          </li>
                          <li class="mb-4">
                              <a href="" class="hover:underline hover:text-cyan-50">Communication</a>
                          </li>
                          <li class="mb-4">
                              <a href="" class="hover:underline hover:text-cyan-50">FAQS</a>
                          </li>
                          <li class="mb-4">
                              <a href="" class="hover:underline hover:text-cyan-50">Privacy Policy</a>
                          </li>
                          <li class="mb-4">
                              <a href="" class="hover:underline hover:text-cyan-50">Rules & Condition</a>
                          </li>
                          <li class="mb-4">
                              <a href="" class="hover:underline hover:text-cyan-50">Contact us</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-10 text-sm font-semibold text-white-A700 text-[24px] uppercase dark:text-white leading-none">customer services</h2>
                      <li class="mb-4">
                              <a  class="hover:underline ml-[-20px] text-orange-600 hover:text-cyan-50">- - - - - - - - - -</a>
                          </li>
                      <div class="flex mt-10 sm:justify-center md:mt-0 space-x-3 rtl:space-x-reverse">
                        
                       
                        <a href="" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <Img  
                           className="h-[70px] w-[70px] bottom-[100%]"
                            src={image1}/>
                          
                        </a>
                        <a href="" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <Img
                                className=" h-[70px]  w-[70px] mt-[-0px]"
                                src={image1}
                                
                              />
                            
                        </a>
                        <a href="" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <Img
                              className=" h-[70px]  w-[70px] mt-[-0px]"
                              src={image1}
                              alt="instagram"
                            />
                        </a>
                        
                  </div>
                  <div class="flex mt-1 sm:justify-center md:mt-0 space-x-3 rtl:space-x-reverse">
                        
                       
                        <a href="" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <Img  
                           className="h-[70px] w-[70px] bottom-[100%]"
                            src={image1}/>
                          
                        </a>
                        <a href="" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <Img
                                className=" h-[70px]  w-[70px] mt-[-0px]"
                                src={image1}
                                
                              />
                            
                        </a>
                        <a href="" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <Img
                              className=" h-[70px]  w-[70px] mt-[-0px]"
                              src={image1}
                              alt="instagram"
                            />
                        </a>
                        
                  </div>
                  </div>

                  
                
                </div >

               <div class="flex flex-row sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
    <div class="mb-4 sm:mb-0">
        <h2 class="text-sm ml-[300px] md:ml-[10px] mb-[10px] text-gray-500 dark:text-gray-300 sm:ml-0 sm:mb-0 sm:text-center">
            Copyright © 2024 <a href="#">Ishan Devinda™</a> | All Rights Reserved.
        </h2>
    </div>
    <div class="flex space-x-3 rtl:space-x-reverse md:ml-[0px] ml-[600px]">
        <a href="" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <img class="h-[30px] w-[30px]" src="images/img_twitter.png" alt="Twitter" />
        </a>
        <a href="" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <img class="h-[65px] w-[65px] mt-[-20px]" src="images/img_facebook.png" alt="Facebook" />
        </a>
        <a href="" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <img class="h-[25px] w-[25px] object-cover" src="images/img_instagram.png" alt="Instagram" />
        </a>
    </div>
</div>

              
                
              </div>
        </footer>
    </>
  );
};



export default Footer;
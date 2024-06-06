import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const WorkSection = () => {
  return (
    <div className=" py-9">
      <div className="container">
        <h3 className="mx-auto fonts-w my-0  text-center tracking-wide leading-8 md:pb-10 text-[43px] md:text-8xl lg:text-9xl xl:text-[150px] xl:leading-[186px] font-alexandria">
          How it works?
        </h3>
        {/*   <div className='w-9/12 md:w-full mx-auto md:flex justify-start items-center gap-x-4 pt-3 howwork'>
            <div className='pt-6 pb-3 md:w-1/2'>
                <h1 className='font-alexandria font-light  highlight text-xl md:text-3xl lg:text-5xl xl:text-6xl mb-3.5'>1.</h1>

            <h3 className=' font-alexandria font-semibold text-[32px] xl:text-[32px]'>Create Your Profile: </h3>
            <p className=' font-alexandria font-light text-lg md:text-xl'>Sign up and tell us about your style preferences, sizes, and fashion needs.</p>
            </div>
            <div className='flex justify-center  md:w-1/2'>
             
                <object type="image/svg+xml" data={phone} className='wrok-section-img w-44 h-96 md:h-[85rem] work-img'></object>
            </div>
            <div className='btn-contacner mt-6 flex justify-center md:mt-52  md:w-1/2'>
                <button className='borderColor px-4 py-1 text-center hover:bg-primaryText transition-all hover:text-black try-btn font-alexandria rounded-sm font-normal text-lg md:text-xl xl:text-2xl ;lg:h-[34px] lg:w-[238px]'>Try it Now</button>
            </div>
        </div> */}

        <div className="">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="w-9/12 md:w-full mx-auto md:flex justify-start items-center gap-x-4 pt-3 howwork ">
                <div className="image-revese-div">
                  <div className="pt-6 pb-3 md:w-1/2">

                    <div className="flex md:block justify-start   gap-x-2">
                      <div>

                        <h1 className="items-start text-left font-alexandria font-light  highlight text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-3.5">
                          1.
                        </h1>

                      </div>
                      <div>

                        <h3 className="weBelive-heading text-left font-alexandria md:font-medium font-bold  text-[32px] xl:text-[32px]">
                          Create Your Profile:{" "}
                        </h3>


                        <p className="text-left font-alexandria font-light text-lg md:text-xl">
                          Sign up and tell us about your style preferences, sizes, and
                          fashion needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center  md:w-1/2">
                    <object
                      type="image/svg+xml"
                      data='/assets/work-phone.svg'
                      className="wrok-section-img w-44 h-96 md:h-[85rem] work-img"
                    ></object>
                  </div>
                </div>
                <div className="btn-contacner mt-6 flex justify-center md:mt-52  md:w-1/2">
                  <button className="borderColor px-4 py-1 text-center hover:bg-primaryText transition-all hover:text-black try-btn font-alexandria rounded-sm font-normal text-lg md:text-xl xl:text-2xl ;lg:h-[34px] lg:w-[238px] border-2 border-black">
                    Try it Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className="w-9/12 md:w-full mx-auto md:flex justify-start items-center gap-x-4 pt-3 howwork ">
                <div className="image-revese-div">
                  <div className="pt-6 pb-3 md:w-1/2">

                    <div className="flex md:block justify-start   gap-x-2">
                      <div>

                        <h1 className="items-start text-left font-alexandria font-light  highlight text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-3.5">
                          2.
                        </h1>
                      </div>
                      <div>

                        <h3 className="weBelive-heading text-left font-alexandria md:font-medium font-bold  text-[32px] xl:text-[32px]">
                          Receive Personalized Recommendations:
                        </h3>


                        <p className="text-left font-alexandria font-light text-lg md:text-xl">
                          Our advanced AI stylist analyzes your profile to curate
                          outfits and suggest items that you&apos;ll love.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center  md:w-1/2 md:ml-14 lg:ml-0">
                    <object
                      type="image/svg+xml"
                      data='/assets/work-phone-2.svg'
                      className="wrok-section-img w-44 h-96 md:h-[85rem] work-img"
                    ></object>
                  </div>
                </div>
                <div className="btn-contacner mt-6 flex justify-center md:mt-52  md:w-1/2">
                  <button className="borderColor px-4 py-1 text-center hover:bg-primaryText transition-all hover:text-black try-btn font-alexandria rounded-sm font-normal text-lg md:text-xl xl:text-2xl ;lg:h-[34px] lg:w-[238px] border-2 border-black">
                    Try it Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-9/12 md:w-full mx-auto md:flex justify-start items-center gap-x-4 pt-3 howwork ">
                <div className="image-revese-div">
                  <div className="pt-6 pb-3 md:w-1/2">
                    <div className="flex md:block justify-start gap-x-2">
                      <div>

                        <h1 className="text-left font-alexandria font-light  highlight text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-3.5">
                          3.
                        </h1>
                      </div>
                      <div>

                        <h3 className=" weBelive-heading text-left  font-alexandria md:font-medium font-bold text-[32px] xl:text-[32px]">
                          Shop with Confidence:{" "}
                        </h3>
                        <p className="text-left  font-alexandria font-light text-lg md:text-xl">
                          Purchase your favorite pieces directly through our platform
                          from a variety of brands and retailers. Enjoy exclusive
                          discounts and offers tailored just for you!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center  md:w-1/2">
                    <object
                      type="image/svg+xml"
                      data='/assets/work-phone-2.svg'
                      className="wrok-section-img w-44 h-96 md:h-[85rem] work-img"
                    ></object>
                  </div>
                </div>
                <div className="btn-contacner mt-6 flex justify-center md:mt-52  md:w-1/2">
                  <button className="borderColor px-4 py-1 text-center hover:bg-primaryText transition-all hover:text-black try-btn font-alexandria rounded-sm font-normal text-lg md:text-xl xl:text-2xl ;lg:h-[34px] lg:w-[238px] border-2 border-black">
                    Try it Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-9/12 md:w-full mx-auto md:flex justify-start items-center gap-x-4 pt-3 howwork ">

                <div className="image-revese-div">
                  <div className="pt-6 pb-3 md:w-1/2">
                    <div className="flex md:block justify-start  gap-x-2">
                      <div>

                        <h1 className=" weBelive-heading text-left font-alexandria  font-light  highlight text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-3.5 ">
                          4.
                        </h1>
                      </div>
                      <div>

                        <h3 className="text-left  font-alexandria md:font-medium font-bold text-[32px] xl:text-[32px]">
                          Visualize Your Outfits:
                        </h3>
                        <p className="text-left  font-alexandria font-light text-lg md:text-xl">
                          Use our interactive tools to see how clothes look on your
                          virtual avatar, helping you make better decisions without
                          the fitting room hassle.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center  md:w-1/2">
                    <object
                      type="image/svg+xml"
                      data='/assets/work-phone-2.svg'
                      className="wrok-section-img w-44 h-96 md:h-[85rem] work-img"
                    ></object>
                  </div>
                </div>
                <div className="btn-contacner mt-6 flex justify-center md:mt-52  md:w-1/2">
                  <button className="borderColor px-4 py-1 text-center hover:bg-primaryText transition-all hover:text-black try-btn font-alexandria rounded-sm font-normal text-lg md:text-xl xl:text-2xl ;lg:h-[34px] lg:w-[238px] border-2 border-black">
                    Try it Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;

import React from "react";
// import img from "../../assets/contact-img.png";
// import img from "../../assets/new-contact.png";
// import img3 from "../../assets/new-contact-desktop-img.svg";
// import img2 from "../../assets/contact-second.svg";
// import google from "../../assets/google.png";
// import apple from "../../assets/apple.png";
const Contact = () => {
  return (
    <div className=" py-10  relative overflow-hidden">
      <div className="container ">
       {/*  <div>
          <h3 className="get-in-text fonts-w text-4xl md:text-6xl lg:text-7xl xl:text-[80px]  font-alexandria    md:text-left">
            Get in touch
          </h3>
          <p className="get-in-text  md:text-left text-lg md:text-xl lg:text-2xl font-alexandria font-light mt-3 ">
            To discuss your specific needs of your business
          </p>
        </div> */}

        <div className="w-11/12 md:w-full  mx-auto row">
          <div className="col-md-6 order-2 order-md-1">
          <div>
          <h3 className="get-in-text fonts-w text-[34px] leading-[67px] md:text-5xl lg:text-7xl xl:text-[80px]  font-alexandria  md:text-left">
            Get in touch
          </h3>
          <p className="get-in-text  md:text-left text-lg md:text-xl lg:text-2xl font-alexandria font-light mt-3 ">
            To discuss your specific needs of your business
          </p>
        </div>
      

            <form className="mt-10 md:mt-10 flex flex-col md:w-9/12">
              <input
                type="text"
                placeholder="Name"
                className="w-full  border-b outline-none bg-transparent border-[#D9D9D9] font-light pb-1 text-lg font-alexandria lg:text-xl md:mb-5 lg:mb-7"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mt-4 md:mt-5 border-b outline-none bg-transparent border-[#D9D9D9]  font-light pb-1 text-lg font-alexandria lg:text-xl    md:mb-24 "
              />

              <button className="submit-btn w-fit  font-alexandria font-light border-2 border-black px-7 py-1 transition-all hover:bg-primaryText hover:text-black  md:py-3 md:px-12 lg:px-14 text-lg md:text-xl lg:text-2xl lg:h-[64px] lg:w-[238px] ">
                Submit
              </button>
            </form>
      
          </div>
          <div className="col-md-6 order-1 order-md-2 mb-5">
            <div className="md:mt-0 ">

           
              <img
                src='/assets/new-contact.png'
                alt="Re-dress image"
                className=" justify-end hidden md:flex md:mt-12 ml-16"
              />

               <object type="image/svg+xml" data='/assets/contact-second.svg' className='flex md:hidden justify-center w-100'></object>
              
              <div className="hidden  contcact-img-donw md:flex justify-center md:mt-20 md:ml-9 lg:ml-9 gap-x-10  md:ml down-icon ">
                <img
                  src='/assets/apple.png'
                  alt="Apple app douwnload for re-dress"
                  className="flex justify-center  gap-x-3 rounded-sm w-32 lg:w-40 cursor-pointer"
                />
                <img
                  src='/assets/google.png'
                  alt="Android app douwnload for re-dress"
                  className=" gap-x-3  rounded-sm w-32 lg:w-40 cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden contcact-img-donw flex justify-center md:mt-20 md:ml-9      lg:ml-9 gap-x-10  md:ml down-icon ">
                <img
                  src='/assets/apple.png'
                  alt="Apple app douwnload for re-dress"
                  className="flex justify-center  gap-x-3 rounded-sm w-32 lg:w-40 cursor-pointer"
                />
                <img
                  src='/assets/google.png'
                  alt="Android app douwnload for re-dress"
                  className=" gap-x-3  rounded-sm w-32 lg:w-40 cursor-pointer "
                />
              </div>
      </div>
    </div>
  );
};

export default Contact;

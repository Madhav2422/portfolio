import React from 'react';
import ContactMeLeft from './ContactMeLeft';
import ContactMeRight from './ContactMeRight';

const ContactMeMain = () => {
  return (
    <div id="contact" className=" scroll-mt-28  max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4">
      {/* Heading */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-white  text-5xl md:text-5xl font-bold relative inline-block text-center">
          Get In Touch
          <span className="absolute left-1/2 -bottom-1 w-1/2 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-md transform -translate-x-1/2"></span>
        </h2>
      </div>

      {/* Updated Main Flex Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <ContactMeLeft />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <ContactMeRight />
        </div>
      </div>
    </div>
  );
};

export default ContactMeMain;

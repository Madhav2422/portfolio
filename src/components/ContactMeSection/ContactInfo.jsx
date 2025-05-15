import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const iconStyle = "text-white text-2xl"; // Icon inside circle
const circleStyle = "w-12 h-12 flex items-center justify-center rounded-full bg-[#254E58]";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2 className="text-4xl font-bold text-white">Contact Information</h2>
        <p className="text-white mt-3 text-lg">
          Feel free to reach out to me any time. I'm always open to discussing new projects,
          creative ideas, or opportunities to be part of your vision.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Email */}
        <div>
          <div className="flex items-center gap-4">
            <div className={circleStyle}>
              <MdEmail className={iconStyle} />
            </div>
            <span className="text-black font-bold text-2xl">Email</span>
          </div>
          <p className="text-white text-lg ml-16 mt-2">madhavhirani2422@gmail.com</p>
        </div>

        {/* Phone */}
        <div>
          <div className="flex items-center gap-4">
            <div className={circleStyle}>
              <MdPhone className={iconStyle} />
            </div>
            <span className="text-black font-bold text-2xl">Phone</span>
          </div>
          <p className="text-white text-lg ml-16 mt-2">+91-7043067250</p>
        </div>

        {/* Location */}
        <div>
          <div className="flex items-center gap-4">
            <div className={circleStyle}>
              <MdLocationOn className={iconStyle} />
            </div>
            <span className="text-black font-bold text-2xl">Location</span>
          </div>
          <p className="text-white text-lg ml-16 mt-2">Morbi, Gujarat</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

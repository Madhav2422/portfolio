import React from 'react';

const FooterMiddle = () => {
  return (
    <div className="text-white flex flex-col gap-3">
      <h3 className="text-2xl font-extrabold mb-3 border-b-2 border-white inline-block ">Quick Links</h3>
      <a href="#home" className="text-lg hover:underline">Home</a>
      <a href="#about" className="text-lg hover:underline">About</a>
      <a href="#portfolio" className="text-lg hover:underline">Portfolio</a>
      <a href="#contact" className="text-lg hover:underline">Contact</a>
    </div>
  );
};

export default FooterMiddle;



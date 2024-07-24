import React from "react";

const AboutBanner = () => {
  return (
    <div
      className="py-40 text-center text-black px-4"
      style={{
        backgroundImage: 'url("/about.png")', // Replace with your actual image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">About Us</h2>
      <p className="text-xl lg:w-3/5 mx-auto mb-5">
        Discover the rich history, visionary goals, and values that shape our vibrant learning community.
      </p>
    </div>
  );
};

export default AboutBanner;

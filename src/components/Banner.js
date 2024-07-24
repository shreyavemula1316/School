import React from 'react';

const Banner = () => {
  return (
    <div className="px-4 py-32 banner-background mx-auto">
      <div className="text-center text-black">
      
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to Model School
        </h1>
        <p className="text-black lg:w-3/5 mx-auto mb-5">
          Where we nurture excellence and inspire a love for learning. Our dedicated faculty, innovative curriculum, and state-of-the-art facilities create an environment where students thrive academically and personally.
        </p>
        {/* Quick Links */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:justify-center md:gap-8">
          <a href="#admissions" className="bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-violet-500 transition duration-300">Admissions</a>
          {/* Removed Faculty Members link */}
          <a href="#students" className="bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-violet-500 transition duration-300">Student Life</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';

const Links = () => {
  return (
    <div className='mb-12 md:mb-0'>
      <h2 className='text-2xl font-bold mb-4 text-white'>Quick Links</h2>
      <ul className='space-y-2'>
        <li><a href='/' className='text-gray-400 hover:text-white'>Home</a></li>
        <li><a href='/about' className='text-gray-400 hover:text-white'>About Us</a></li>
        <li><a href='/academics' className='text-gray-400 hover:text-white'>Academics</a></li>
        <li><a href='/gallery' className='text-gray-400 hover:text-white'>Gallery</a></li>
        <li><a href='/contact' className='text-gray-400 hover:text-white'>Contact Us</a></li>
        <li><a href='/admissions' className='text-gray-400 hover:text-white'>Admissions</a></li>
        <li><a href='/student-activities' className='text-gray-400 hover:text-white'>Student Activities</a></li>
      </ul>
    </div>
  );
};

export default Links;

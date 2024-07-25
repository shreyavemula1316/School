import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Social = () => {
  return (
    <div className='mb-12 md:mb-0'>
      <h2 className='text-2xl font-bold mb-4 text-white'>Follow Us</h2>
      <div className='flex justify-center md:justify-start space-x-6'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition-colors duration-300'>
          <FaFacebookF size={30} />
        </a>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition-colors duration-300'>
          <FaTwitter size={30} />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition-colors duration-300'>
          <FaInstagram size={30} />
        </a>
        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition-colors duration-300'>
          <FaLinkedinIn size={30} />
        </a>
      </div>
    </div>
  );
};

export default Social;

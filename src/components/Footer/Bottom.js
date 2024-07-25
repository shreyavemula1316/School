import React from 'react';

const Bottom = () => {
  return (
    <div className='border-t border-gray-700 pt-8 text-center'>
      <p className='text-sm'>
        &copy; {new Date().getFullYear()} Model School. All rights reserved.
      </p>
    </div>
  );
};

export default Bottom;

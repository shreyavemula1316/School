// Home.js
import React from 'react';
import Banner from '../components/Banner';
import Admissions from './Admissions';
import Students from './Students';

const Home = () => {
  return (
    <div>
      <Banner />
      <Admissions/>
      <Students/>
    </div>
  );
};

export default Home;

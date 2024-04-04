import React from 'react';
import Breakfast from '../components/popular/Breakfast';
import Dinner from '../components/popular/Dinner';
import Lunch from '../components/popular/Lunch';
import SmallChop from '../components/popular/SmallChop';

const Home = () => {
  return (
    <div className="">
      <Breakfast />
      <Lunch />
      <Dinner />
      <SmallChop />
    </div>
  );
};

export default Home;

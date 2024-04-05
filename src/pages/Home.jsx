import React from 'react';
import Breakfast from '../components/popular/Breakfast';
import Dinner from '../components/popular/Dinner';
import Lunch from '../components/popular/Lunch';
import SmallChop from '../components/popular/SmallChop';
import { Routes, Route } from 'react-router-dom';
const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/smallchop" element={<SmallChop />} />
      </Routes>
    </div>
  );
};

export default Home;

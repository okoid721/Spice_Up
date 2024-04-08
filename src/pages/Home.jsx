import React from 'react';
import Breakfast from '../components/popular/Breakfast';
import Dinner from '../components/popular/Dinner';
import Lunch from '../components/popular/Lunch';
import AddItem from '../components/popular/AddItem';
import SmallChop from '../components/popular/SmallChop';
import { Routes, Route } from 'react-router-dom';
import AllItems from '../components/popular/AllItems';
const Home = () => {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<AllItems />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/dinner" element={<Dinner />} />s
        <Route path="/smallchop" element={<SmallChop />} />
        <Route path="/additems" element={<AddItem />} />
      </Routes>
    </div>
  );
};

export default Home;

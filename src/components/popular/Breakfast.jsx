import React from 'react';
import Container from '../Container';
import BreakfastHead from '../containers/breakfast/BreakfastHead';
import BreakfastMap from '../containers/breakfast/BreakfastMap';
import Popular from './Popular';
const Breakfast = () => {
  return (
    <Container>
      <div className="lg:block  hidden">
        <h1 className="text-center mt-5 font-extrabold text-3xl underline">
          Breakfast Treding
        </h1>
        <BreakfastHead />
      </div>
      <div className=" mt-5 ">
        <h1 className="text-center mt-5 font-extrabold text-3xl underline">
          Breakfast Recipe
        </h1>
        <BreakfastMap />
      </div>
      ;
    </Container>
  );
};

export default Breakfast;

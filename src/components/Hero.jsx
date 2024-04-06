import React from 'react';
import HeroNav from './containers/Hero/HeroNav';
import HeroHome from './containers/Hero/HeroHome';

function Hero() {
  return (
    <div className="w-full h-screen lg:overflow-hidden">
      <HeroNav />
      <HeroHome />
    </div>
  );
}

export default Hero;

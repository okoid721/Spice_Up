import React from 'react';
import { IoPerson } from 'react-icons/io5';
import { MdFreeBreakfast } from 'react-icons/md';
import { MdLunchDining } from 'react-icons/md';
import { MdDinnerDining } from 'react-icons/md';
import { GiRoastChicken } from 'react-icons/gi';
import { IoIosAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Navsmall from './Navsmall';

const Nav = () => {
  return (
    <div>
      <div className=" ">
        <div className=" w-full bg-[aliceblue]  shadow-xl py-6 sticky top-0 z-10 lg:px-6 px-2 ">
          <div className="flex flex-row items-center justify-between">
            <Link to="/home">
              <h1 className="font-extrabold  flex text-3xl ">SPICE_☝🏿</h1>
            </Link>

            <div className="">
              <Link to="/auth/login">
                <button className="text-2xl  font-bold hover:underline flex lg:flex-row items-center py-2 px-6">
                  <IoPerson />
                  Logout
                </button>
              </Link>
            </div>
          </div>
          <div className=" flex flex-row  mt-4 items-center justify-around w-full ">
            <Link to="/home/breakfast">
              <h1 className="hover:underline focus:underline flex lg:flex-col items-center flex-row">
                <MdFreeBreakfast size={30} />
                Breakfast
              </h1>
            </Link>
            <Link to="/home/lunch">
              <h1 className="hover:underline focus:underline flex lg:flex-col items-center flex-row">
                <MdLunchDining size={30} />
                Lunch
              </h1>
            </Link>
            <Link to="/home/dinner">
              <h1 className="hover:underline focus:underline flex lg:flex-col items-center flex-row">
                <MdDinnerDining size={30} />
                Dinner
              </h1>
            </Link>
            <Link to="/home/smallchop">
              <h1 className="hover:underline focus:underline flex lg:flex-col items-center flex-row">
                <GiRoastChicken size={30} />
                SmallChop
              </h1>
            </Link>
            <a
              href="https://admin-recipe.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="hover:underline focus:underline flex lg:flex-col items-center flex-row">
                <IoIosAdd size={30} />
                Add Your MEAL
              </h1>
            </a>
            <Link to="/auth/login">
              <button className="lg:text-2xl lg:hidden  font-bold hover:underline flex lg:flex-col flex-row items-center text-[20px] ">
                <IoPerson />
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Navsmall />
    </div>
  );
};

export default Nav;

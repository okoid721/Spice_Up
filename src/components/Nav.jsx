import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className=" w-ful bg-[aliceblue] shadow-xl py-6 sticky lg:px-6 px-2">
      <div className=" flex flex-row items-center justify-between">
        <h1 className=" lg:font-extrabold lg:text-3xl font-semibold  ">
          SPICE_☝🏿
        </h1>
        <div className=" flex items-center bg-white w-fit lg:px-7 px-2 py-2 lg:font-extrabold rounded-lg shadow-xl">
          <input
            type="search"
            placeholder="Search...."
            className=" bg-transparent outline-none rounded-none"
          />
          <FaSearch size={30} className=" " />
        </div>
        <div>
          <button className=" lg:text-2xl font-bold hover:underline flex flex-col lg:flex-row items-center py-2 px-6">
            <IoPerson />
            Signin
          </button>
        </div>
      </div>
      <div className="  flex-row justify-around mt-8 font-extrabold hidden lg:flex cursor-pointer ">
        <h1 className=" hover:underline focus:underline">Breakfast</h1>
        <h1 className=" hover:underline focus:underline">Launch</h1>
        <h1 className=" hover:underline focus:underline">Dinner</h1>
        <h1 className=" hover:underline focus:underline">SmallChop</h1>
        <h1 className=" hover:underline focus:underline">
          Add Your Favourite meal
        </h1>
      </div>
    </div>
  );
};

export default Nav;

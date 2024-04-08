import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { FaBarsStaggered } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { MdFreeBreakfast } from 'react-icons/md';
import { MdLunchDining } from 'react-icons/md';
import { MdDinnerDining } from 'react-icons/md';
import { GiRoastChicken } from 'react-icons/gi';
import { IoIosAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Navsmall = () => {
  const [open, setOpen] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <div className=" relative w-screen h-[300px] lg:hidden block">
      <div className=" w-full bg-[aliceblue]   shadow-xl py-6 sticky top-0 z-10 lg:px-6 px-2 ">
        <div className=" flex flex-row justify-between px-2 mb-2">
          <Link to="/home">
            <h1 className="font-extrabold lg:hidden block text-3xl ">
              SPICE_UP
            </h1>
          </Link>
          <div
            className=" flex relative lg:items-center items-start flex-col justify-between lg:flex-row "
            onClick={toggleMenu}
          >
            <button className=" w-8 h-8" onClick={() => setOpen(!open)}>
              <FaBarsStaggered size={30} />
            </button>
          </div>
        </div>
        <div className=" items-center  flex lg:hidden bg-white w-fit lg:px-7 px-2 py-2 lg:font-extrabold rounded-lg shadow-xl">
          <input
            type="search"
            placeholder="Search...."
            className="bg-transparent outline-none rounded-none"
          />
          <FaSearch size={30} className="" />
        </div>
      </div>
      <div className="  " onClick={handleOutsideClick}>
        {open && (
          <motion.div
            className=" absolute w-full h-full top-0 z-10 bg-[aliceblue]"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="lg:flex-row flex-col gap-x-36 mt-8 font-extrabold   lg:flex cursor-pointer">
              <div className=" flex flex-row justify-between px-5 ">
                <Link to="/home">
                  <h1 className="font-extrabold lg:hidden block text-3xl ">
                    SPICE_UP
                  </h1>
                </Link>
                <div
                  className=" flex relative lg:items-center items-start flex-col justify-between lg:flex-row "
                  onClick={toggleMenu}
                >
                  <button className=" w-8 h-8" onClick={() => setOpen(!open)}>
                    <IoMdArrowRoundBack color="black" size={30} />
                  </button>
                </div>
              </div>
              <div className=" mt-4 px-3">
                <Link to="/home">
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
                <h1 className="hover:underline focus:underline flex lg:flex-col items-center flex-row">
                  <IoIosAdd size={30} />
                  Add Your MEAL
                </h1>
                <Link to="/auth/login">
                  <button className="lg:text-2xl lg:hidden  font-bold hover:underline flex lg:flex-col flex-row items-center text-[20px] ">
                    <IoPerson />
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navsmall;
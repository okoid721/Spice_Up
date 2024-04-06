import { Link } from 'react-router-dom';
function HeroNav() {
  return (
    <div className="w-screen ">
      <div className="w-full bg-[#d7d7d7] items-center py-4 lg:px-8 p-4 flex justify-between sticky top-0">
        <div className=" flex items-center flex-row lg:text-2xl text-lg font-bold gap-1 ">
          Welcome To{' '}
          <span className=" font-extrabold lg:text-3xl text-xl text-green-500">
            Spice_Up
          </span>
        </div>
        <div>
          <Link to="/auth/login">
            <button className=" py-2 px-8 shadow-lg bg-green-400 text-[20px] rounded-md font-bold ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroNav;

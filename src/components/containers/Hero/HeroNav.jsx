function HeroNav() {
  return (
    <div className="w-screen">
      <div className="w-full bg-[#d7d7d7] items-center py-4 px-8 flex justify-between">
        <div className=" flex items-center flex-row text-2xl font-bold gap-1 ">
          Welcome To{' '}
          <span className=" font-extrabold text-3xl text-green-500">
            Spice_Up
          </span>
        </div>
        <div>
          <button className=" py-2 px-8 shadow-lg bg-green-400 text-[20px] rounded-md font-bold ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroNav;

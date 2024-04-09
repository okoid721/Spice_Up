import React from 'react';
import TruncateText from '../../TruncateText';

function LunchMap() {
  const [breakfast, setBreakfast] = React.useState([]);
  React.useEffect(() => {
    getLaunch();
  }, []);
  const getLaunch = async () => {
    try {
      const response = await fetch(
        `https://recipe-bakend.onrender.com/api/food/get-launch`
      );
      const data = await response.json();
      console.log('Data from API:', data);
      setBreakfast(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="w-full h-screen grid lg:grid-cols-3 grid-cols-1 gap-16 mb-8 mt-8">
      {breakfast.map((data, i) => {
        return (
          <div
            key={i}
            className="w-[300px]  h-[500px] shadow-lg flex flex-col bg-[#f5f5f5] rounded-[10px] items-center flex-wrap cursor-pointer"
          >
            <img
              src={data.image}
              alt={data.name}
              className="card rounded-t-[10px]"
            />
            <div className="flex flex-col items-center ">
              <h2 className=" font-extrabold text-2xl mt-5 mb-5 hover:underline">
                {data.name}
              </h2>
              <p className=" px-4 font-semibold hover:underline">
                <TruncateText text={data.description} maxLength={100} />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default LunchMap;

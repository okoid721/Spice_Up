import React, { useEffect, useState } from 'react';
import TruncateText from '../TruncateText';
const AllItems = () => {
  const [foodData, setFoodData] = useState({
    breakfasts: [],
    dinners: [],
    launches: [],
    smallChops: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://recipe-bakend.onrender.com/api/food/get-all'
      );
      const data = await response.json();
      console.log('Data from API:', data);
      setFoodData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex items-center flex-col ">
      <div className=" flex items-center justify-center font-extrabold uppercase mb-10 underline">
        All Data
      </div>
      <div className="">
        {Object.keys(foodData).map((category) => (
          <div
            key={category}
            className=" flex flex-col flex-wrap items-center  gap-4"
          >
            <div className=" flex flex-wrap flex-row gap-8 items-center mt-10 justify-center">
              {foodData[category].map((item) => (
                <div
                  key={item._id}
                  className=" w-[300px]  h-[500px] shadow-lg flex flex-col bg-[#f5f5f5] rounded-[10px] items-center flex-wrap cursor-pointer "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card rounded-t-[10px]"
                  />
                  <div className="flex flex-col items-center ">
                    <h2 className=" font-extrabold text-2xl mt-5 mb-5 hover:underline">
                      {item.name}
                    </h2>
                    <p className=" px-4 font-semibold hover:underline">
                      <TruncateText text={item.description} maxLength={100} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;

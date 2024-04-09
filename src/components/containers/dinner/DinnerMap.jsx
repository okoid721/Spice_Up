import React, { useEffect, useState } from 'react';
import TruncateText from '../../TruncateText';

function DinnerMap() {
  const [breakfast, setBreakfast] = React.useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  React.useEffect(() => {
    getBreakfast();
  }, []);
  const getBreakfast = async () => {
    try {
      const response = await fetch(
        `https://recipe-bakend.onrender.com/api/food/get-dinner`
      );
      const data = await response.json();
      console.log('Data from API:', data);
      setBreakfast(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getBreakfast();
  }, []);

  const handleClick = (data) => {
    setSelectedItem(data);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  return (
    <div className="w-full h-screen grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 mb-8 mt-8">
      {breakfast.map((data, i) => (
        <div
          key={i}
          className="w-[300px] h-[500px] shadow-lg flex flex-col bg-[#f5f5f5] rounded-[10px] items-center flex-wrap cursor-pointer"
          onClick={() => handleClick(data)}
        >
          <img
            src={data.image}
            alt={data.name}
            className="card rounded-t-[10px]"
          />
          <div className="flex flex-col items-center ">
            <h2 className="font-extrabold text-2xl mt-5 mb-5 ">{data.name}</h2>
            <p className="px-4 font-semibold ">
              <TruncateText text={data.description} maxLength={100} />
            </p>
          </div>
        </div>
      ))}
      {selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className=" px-8">
            <div className="bg-white p-8 rounded-lg lg:w-[700px] md:w-[600px] w-[350px] h-[350px] md:h-[500px]  lg:h-[600px] overflow-auto flex flex-col items-center gap-5">
              <div className=" flex flex-col items-center gap-10">
                <h2 className="font-bold text-2xl underline">
                  {selectedItem.name}
                </h2>
                <p className="font-semibold flex lg:flex-row flex-col lg:gap-4 gap-0 ">
                  <strong>Ingredient:</strong> {selectedItem.ingredients}
                </p>
                <p className=" font-semibold flex  lg:flex-row flex-col lg:gap-4 gap-0 ">
                  <strong>Directions:</strong>
                  {selectedItem.directions}
                </p>
                <p className="  flex  lg:flex-row flex-col lg:gap-4 gap-0">
                  <strong>Description:</strong>
                  {selectedItem.description}
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DinnerMap;

import React, { useEffect, useState } from 'react';
import TruncateText from '../TruncateText';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const AllItems = () => {
  const [foodData, setFoodData] = useState({
    breakfasts: [],
    dinners: [],
    launches: [],
    smallChops: [],
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleClick = (data) => {
    setSelectedItem(data);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to filter foodData based on search query
  const filteredFoodData = () => {
    if (!searchQuery) {
      return foodData;
    }

    const filteredData = {};

    Object.keys(foodData).forEach((category) => {
      const filteredItems = foodData[category].filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      filteredData[category] = filteredItems;
    });

    return filteredData;
  };

  return (
    <div>
      <div className="flex items-center flex-col">
        <div className="flex items-center justify-center font-extrabold uppercase lg:mb-10 mb-0 underline">
          Welcome To<span className="text-3xl text-green-400"> Spice up </span>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className="items-center mt-2  flex bg-white w-fit lg:px-7 px-2 py-2 font-extrabold rounded-lg shadow-xl">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-transparent outline-none rounded-none"
            />
            <FaSearch size={30} className="" />
          </div>
          {Object.keys(filteredFoodData()).map((category) => (
            <div
              key={category}
              className="flex flex-col flex-wrap items-center gap-4"
            >
              <div className="flex flex-wrap flex-row gap-8 items-center mt-10 justify-center">
                {filteredFoodData()[category].map((item) => (
                  <div
                    key={item._id}
                    className="w-[300px] h-[500px] shadow-lg flex flex-col bg-[#f5f5f5] rounded-[10px] items-center flex-wrap cursor-pointer"
                    onClick={() => handleClick(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card rounded-t-[10px]"
                    />
                    <div className="flex flex-col items-center ">
                      <h2 className="font-extrabold text-2xl mt-5 mb-5 hover:underline">
                        {item.name}
                      </h2>
                      <p className="px-4 font-semibold hover:underline">
                        <TruncateText text={item.description} maxLength={100} />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {selectedItem && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="px-8">
                <div className="bg-white p-8 rounded-lg lg:w-[700px] md:w-[600px] w-[350px] h-[350px] md:h-[500px] lg:h-[600px] overflow-auto flex flex-col items-center gap-5">
                  <div className="flex flex-col items-center gap-10">
                    <h2 className="font-bold text-2xl underline">
                      {selectedItem.name}
                    </h2>
                    <p className="font-semibold flex lg:flex-row flex-col lg:gap-4 gap-0 ">
                      <strong>Ingredient:</strong> {selectedItem.ingredients}
                    </p>
                    <p className="font-semibold flex lg:flex-row flex-col lg:gap-4 gap-0 ">
                      <strong>Directions:</strong>
                      {selectedItem.directions}
                    </p>
                    <p className="flex lg:flex-row flex-col lg:gap-4 gap-0">
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
      </div>
    </div>
  );
};

export default AllItems;

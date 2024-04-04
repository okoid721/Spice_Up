/* eslint-disable jsx-a11y/img-redundant-alt */
// import React, { useEffect, useState } from 'react';

// const Hero = () => {
//   const [foodData, setFoodData] = useState({
//     breakfasts: [],
//     dinners: [],
//     launches: [],
//     smallChops: [],
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         'https://recipe-bakend.onrender.com/api/food/get-all'
//       );
//       const data = await response.json();
//       console.log('Data from API:', data);
//       setFoodData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="flex lg:flex-row flex-col py-4 px-11">
//         <div>Hero</div>
//         <div className="w-[700px] h-[700px]">
//           {Object.keys(foodData).map((category) => (
//             <div key={category}>
//               <h2>{category}</h2>
//               {foodData[category].map((item) => (
//                 <div key={item._id}>
//                   <img src={item.image[0]} alt={item.name} />
//                   <h3>{item.name}</h3>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [breakfastImage, setBreakfastImage] = useState('');
  const [top, setTop] = useState([]);

  useEffect(() => {
    fetchData();
    getTop();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://recipe-bakend.onrender.com/api/food/get-all'
      );
      const data = await response.json();
      console.log('Data from API:', data);
      // Accessing the first item from the breakfasts category
      if (data.breakfasts.length > 0) {
        setBreakfastImage(data.breakfasts[1].image);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getTop = async () => {
    const check = localStorage.getItem('breakfast');
    if (check) {
      setTop(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://recipe-bakend.onrender.com/api/food/get-breakfast`
      );
      const data = await api.json();
      localStorage.setItem('breakfast', JSON.stringify(data));
      setTop(data);
      console.log(data);
    }
  };

  return (
    <div>
      <div className="flex lg:flex-row flex-col py-4 px-16 justify-between">
        <div className="w-[700px] h-[500px]">
          {breakfastImage && (
            <div>
              <img src={breakfastImage} alt="Breakfast" />
            </div>
          )}
        </div>
        <div className>
          {top.map((data, i) => {
            return (
              <div key={i} className=" flex flex-col w-36 h-20 gap-4">
                <img src={data.image} alt={`Image ${i}`} />
                <p>{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;

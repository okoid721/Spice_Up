import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import isStyledComponent from 'styled-components';

const Vegi = () => {
  const [vegi, setVegi] = React.useState([]);
  React.useEffect(() => {
    getVegi();
  }, []);
  const getVegi = async () => {
    const check = localStorage.getItem('vegi');
    if (check) {
      setVegi(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://recipe-bakend.onrender.com/api/food/get-breakfast`
      );
      const data = await api.json();
      localStorage.setItem('vegi', JSON.stringify(data));
      setVegi(data);
      console.log(data);
    }
  };
  return (
    <div className="my-16 mx-0 hidden md:block  ">
      <h2 className=" font-sans font-extrabold text-3xl underline ">
        Vegitable Pick
      </h2>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: true,
          gap: '1rem',
          autoplay: true,
        }}
      >
        {vegi.map((data, index) => {
          return (
            <SplideSlide key={index}>
              <div className=" lg:min-h-[300px] h-[200px]  lg:rounded-[2rem] overflow-hidden p-4 relative">
                <p className=" absolute z-10 left-0 bottom-0 right-0 text-white w-[100%] text-center font-bold text-[1rem] h-[40%] flex justify-center items-center ">
                  {data.name}
                </p>
                <img
                  src={data.image}
                  alt={data.name}
                  className=" lg:rounded-[1rem] rounded shadow-xl absolute left-0  w-full h-[100%] object-cover "
                />
                <Gradient />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};
const Gradient = isStyledComponent.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
`;
export default Vegi;

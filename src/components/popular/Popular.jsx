import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Gradient from '../../style/Gradient';

const Popular = () => {
  const [popular, setPopular] = React.useState([]);
  React.useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const api = await fetch(
      `https://recipe-bakend.onrender.com/api/smallChop/get-smallchop`
    );
    const data = await api.json();
    setPopular(data);
  };
  return (
    <div className="my-16 mx-0 ">
      <h2>Popular Picks</h2>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: true,
          gap: '1rem',
        }}
      >
        {popular.map((data) => {
          return (
            <SplideSlide>
              <div
                key={data.id}
                className=" lg:min-h-[350px] h-[200px]  rounded-[2rem] overflow-hidden p-4 relative"
              >
                <p className=" absolute z-10 left-0 bottom-0 right-0 text-white w-[100%] text-center font-bold text-[1rem] h-[40%] flex justify-center items-center ">
                  {data.name}
                </p>
                <img
                  src={data.image}
                  alt={data.name}
                  className=" rounded-[1rem] absolute left-0  w-full h-[100%] object-cover "
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

export default Popular;

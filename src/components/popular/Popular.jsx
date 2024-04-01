import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from 'styled-components';

const Popular = () => {
  const [popular, setPopular] = React.useState([]);
  React.useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const check = localStorage.getItem('popular');
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://recipe-bakend.onrender.com/api/smallChop/get-smallchop`
      );
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data));
      setPopular(data);
      console.log(data);
    }
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
          autoplay: true,
          rewind: true,
        }}
      >
        {popular.map((data) => {
          return (
            <SplideSlide key={data.id}>
              <div className=" lg:min-h-[300px] h-[150px]  lg:rounded-[2rem] overflow-hidden p-4 relative">
                <p className=" absolute z-10 left-0 bottom-0 right-0 text-white w-[100%] text-center font-bold text-[1rem] h-[40%] flex justify-center items-center ">
                  {data.name}
                </p>
                <img
                  src={data.image}
                  alt={data.name}
                  className=" lg:rounded-[1rem] rounded-[10px] absolute left-0  w-full h-[100%] object-cover "
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

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default Popular;

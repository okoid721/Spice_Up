import React from 'react';
import Container from '../Container';
import BreakfastHead from '../containers/breakfast/BreakfastHead';
const Breakfast = () => {
  const [breakfast, setBreakfast] = React.useState([]);
  React.useEffect(() => {
    getBreakfast();
  }, []);
  const getBreakfast = async () => {
    const check = localStorage.getItem('breakfast');
    if (check) {
      setBreakfast(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://recipe-bakend.onrender.com/api/food/get-breakfast`
      );
      const data = await api.json();
      localStorage.setItem('breakfast', JSON.stringify(data));
      setBreakfast(data);
      console.log(data);
    }
  };
  return (
    <Container>
      <BreakfastHead />
      <div className=" font-extrabold text-3xl underline">Breakfast Meal</div>;
    </Container>
  );
};

export default Breakfast;

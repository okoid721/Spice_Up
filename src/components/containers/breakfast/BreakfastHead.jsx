import React from 'react';
import Container from '../../Container';
function BreakfastHead() {
  const [breakfastImage, setBreakfastImage] = React.useState('');
  const [breakfastTitle, setBreakfastTitle] = React.useState('');
  const [breakfastDescription, setBreakfastDescription] = React.useState('');

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://recipe-bakend.onrender.com/api/food/get-breakfast'
      );
      const data = await response.json();
      console.log('Data from API:', data);
      // Accessing the first item from the breakfasts category
      if (data.length > 3) {
        const breakfast = data[3];
        setBreakfastImage(data[3].image);
        setBreakfastTitle(data[3].name);
        setBreakfastDescription(data[3].ingredients);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className=" w-[900px] h-[300px] bg-[#f5f5f5]  gap-4 flex items-center justify-between">
      <img src={breakfastImage} alt="Breakfast" className="admin" />
      <div className=" flex flex-col items-center w-[800px] px-8">
        <h2 className="font-extrabold text-3xl underline mb-2">
          {breakfastTitle}
        </h2>
        <p className=" flex flex-col">
          <h3 className=" text-2xl font-extrabold">Ingredients:</h3>
          {breakfastDescription}
        </p>
      </div>
    </div>
  );
}

export default BreakfastHead;

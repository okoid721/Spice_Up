import React from 'react';
import TruncateText from '../../TruncateText';
function SmallchopHead() {
  const [LunchImage, setLunchImage] = React.useState('');
  const [lunchTitle, setLunchTitle] = React.useState('');
  const [lunchDescription, setLunchDescription] = React.useState('');

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://recipe-bakend.onrender.com/api/food/get-smallchop'
      );
      const data = await response.json();
      console.log('Data from API:', data);
      // Accessing the first item from the breakfasts category
      if (data.length > 0) {
        const lunch = data[0];
        setLunchImage(data[0].image);
        setLunchTitle(data[0].name);
        setLunchDescription(data[0].ingredients);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className=" w-[900px] h-[300px] bg-[#f5f5f5]  gap-4 flex items-center justify-between">
      <img src={LunchImage} alt="lunch" className="admin" />
      <div className=" flex flex-col items-center w-[800px] px-8">
        <h2 className="font-extrabold text-3xl underline mb-2">{lunchTitle}</h2>
        <p className=" flex flex-col">
          <h3 className=" text-2xl font-extrabold">Ingredients:</h3>
          <TruncateText text={lunchDescription} maxLength={200} />
        </p>
      </div>
    </div>
  );
}

export default SmallchopHead;

import React from 'react';

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
    <div>
      {popular.map((data) => {
        return (
          <div key={data.id}>
            <h2>{data.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;

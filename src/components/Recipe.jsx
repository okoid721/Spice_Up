import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://recipe-bakend.onrender.com/api/food/get/${id}`
        );
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h2>Category: {recipe.category}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;

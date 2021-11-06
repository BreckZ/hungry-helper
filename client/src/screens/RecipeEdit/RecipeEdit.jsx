import "./RecipeEdit.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RecipeEdit(props) {
  const {
    recipes,
    handleRecipeUpdate,
    // handleIngredientUpdate,
    // currentUser,
    // recipeId,
  } = props;
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    serving_size: 0,
    image: "",
    directions: "",
    user_id: "",
    ingredients: [],
  });

  const { title, serving_size, image, directions, user_id } = formData;

  console.log(user_id)
  
  useEffect(() => {
    const prefillFormData = () => {
      const recipeItem = recipes?.find((recipe) => recipe.id === Number(id));
      setFormData({
        title: recipeItem.title,
        serving_size: recipeItem.serving_size,
        description: recipeItem.description,
        image: recipeItem.image,
        directions: recipeItem.directions,
        user_id: recipeItem.user_id,
        ingredients: recipeItem.ingredients,
      });
    };
    if (recipes.length) {
      prefillFormData();
    }
  }, [id, recipes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleIngredientChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      ingredients: prevState.ingredients.map((ing, index) => {
        return index === Number(name)
          ? {
              ...ing,
              food_name: value,
            }
          : ing;
      }),
    }));
  };

  const addIngredient = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients, { food_name: "" }],
    }));
  };
  // console.log(user_id) // figure out why this isn't being used
  const handleRemoveInput = (i) => {
    setFormData((prevState) => ({
      ...prevState,
      ingredients: prevState.ingredients.filter((_ing, index) => {
        return index !== i
      })
    }));
  }

  return (
    <>
      <span className="edit-recipe-banner">EDIT RECIPE</span>
      <form
        className="edit-recipe-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleRecipeUpdate(id, formData);
        }}
      >
        <label>
          TITLE:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          SERVING SIZE:
          <input
            type="text"
            name="serving_size"
            value={serving_size}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          DIRECTIONS:
          <input
            type="text"
            name="directions"
            value={directions}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          IMAGE:
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleChange}
          />
        </label>
        <br />
        {formData.ingredients.map((ing, index) => (
          <div>
            <input
              name={index}
              value={ing.food_name}
              onChange={handleIngredientChange}
            />
            {formData.ingredients.length > 1 &&
              <button
              onClick={(e) => {
                e.preventDefault()
                handleRemoveInput(index)
              }}
              >-</button>}
          </div>
        ))}
        <br />
        <button onClick={addIngredient}>+</button>
        <br />
        <button>SUBMIT</button>
      </form>
    </>
  );
}

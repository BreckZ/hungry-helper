import "./RecipeCreate.css";

import { useState } from "react";
import IngredientForm from "../../components/IngredientForm/IngredientForm";
// import { Link } from "react-router-dom";

export default function RecipeCreate(props) {
  const { handleRecipeCreate, handleIngredientCreate, currentUser, recipeId } = props;

  const [toggle, setToggle] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    serving_size: 0,
    image: '',
    directions: '',
    user_id: '',
  });
  
  const { title, serving_size, image, directions, user_id } = formData;
  console.log(user_id)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      user_id: currentUser.id, // Setting the current user_id before posting
      [name]: value,
    }));
  };

  // console.log(user_id) // figure out why this isn't being used

  return (
    <>
      <span className='create-recipe-banner'>CREATE A RECIPE</span>
      <form
        className='create-recipe-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleRecipeCreate(formData);
          setToggle(true)
        }}
      >
        <label>
          TITLE:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            disabled={toggle}
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
            disabled={toggle}
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
            disabled={toggle}
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
            disabled={toggle}
          />
        </label>
        <br />
        {/* <label>
          INGREDIENTS:
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleChange}
          />
        </label> */}
        {/* <br />
        <span>ADD </span><span> DELETE</span> */}
        <br />
        <button disabled={toggle} >NEXT</button>
      </form>
      {toggle && <IngredientForm
        recipeId={recipeId}
        handleIngredientCreate={handleIngredientCreate}
      />}
    </>
  );
}

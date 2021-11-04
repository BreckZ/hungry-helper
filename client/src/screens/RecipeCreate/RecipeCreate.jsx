import "./RecipeCreate.css";

import { useState } from "react";
// import { Link } from "react-router-dom";

export default function RecipeCreate(props) {
  const { handleRecipeCreate, currentUser } = props;
  const [formData, setFormData] = useState({
    title: '',
    serving_size: 0,
    image: '',
    directions: '',
    user_id: '',
  });
  const { title, serving_size, image, directions, user_id } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      user_id: currentUser.id, // Setting the current user_id before posting
      [name]: value,
    }));
  };

  return (
    <>
      <span className='create-recipe-banner'>CREATE A RECIPE</span>
      <form
        className='create-recipe-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleRecipeCreate(formData);
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
        <button>CREATE</button>
      </form>
    </>
  );
}

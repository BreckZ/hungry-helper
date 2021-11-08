import "./RecipeCreate.css";

import { useState } from "react";
import IngredientForm from "../../components/IngredientForm/IngredientForm";
// import { Link } from "react-router-dom";

export default function RecipeCreate(props) {
  const { handleRecipeCreate, handleIngredientCreate, currentUser, recipeId } =
    props;

  const [toggle, setToggle] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    serving_size: 0,
    image: "",
    directions: "",
    user_id: "",
  });

  const { title, serving_size, image, directions, user_id } = formData;
  console.log(user_id);

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
      <div className="create-recipe-ruler">
        <div className="create-recipe-container">
            <form
              className="create-recipe-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleRecipeCreate(formData);
                setToggle(true);
              }}
            >
              <span className="create-recipe-banner">CREATE A RECIPE</span>
              <label className="create-form-label">
                TITLE:
                <input
                  className="create-form-input"
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  disabled={toggle}
                />
              </label>
              <label className="create-form-label">
                SERVING SIZE:
                <input
                  className="create-form-input"
                  type="text"
                  name="serving_size"
                  value={serving_size}
                  onChange={handleChange}
                  disabled={toggle}
                />
              </label>
              <label className="create-form-label">
                DIRECTIONS:
                <textarea
                  className="create-form-input"
                  rows="10"
                  type="text"
                  name="directions"
                  value={directions}
                  onChange={handleChange}
                  disabled={toggle}
                />
              </label>
              <label className="create-form-label">
                IMAGE:
                <input
                  className="create-form-input"
                  type="text"
                  name="image"
                  value={image}
                  onChange={handleChange}
                  disabled={toggle}
                />
              </label>
              <button
                className="create-form-ing-button active"
                disabled={toggle}
              >
                ADD INGREDIENTS
              </button>
              <br />
              {toggle && (
                <IngredientForm
                  className="create-form-input"
                  recipeId={recipeId}
                  handleIngredientCreate={handleIngredientCreate}
                />
              )}
            </form>
          </div>
      </div>
    </>
  );
}

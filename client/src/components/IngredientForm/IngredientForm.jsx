import './IngredientForm.css'
import { useState } from "react";
import { Link } from 'react-router-dom';

function IngredientForm(props) {
  const { handleIngredientCreate, recipeId } = props;
  const [formData, setFormData] = useState([
    {
      food_name: "",
      recipe_id: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const form = [...formData];
    form[index][name] = value;
    form[index].recipe_id = recipeId;
    setFormData(form);
    // setFormData((prevState) => ({
    //   ...prevState,
    //   recipe_id: "",
    //   [name]: value,
    // }));
  };

  const handleAddInput = () => {
    setFormData([...formData, { food_name: "", recipe_id: "" }]);
    // const form = [...formData];
    // form.push({ food_name: '', recipe_id: '' })
    // setFormData(form)
    console.log(recipeId);
  };

  const handleRemoveInput = (index) => {
    const form = [...formData];
    form.splice(index, 1);
    setFormData(form);
  };

  return (
    <>
      <div className="ing-form-banner">INGREDIENTS:</div>
      <form
        className="ing-form"
        onSubmit={(e) => {
          e.preventDefault();
          formData.map((ingredient) => handleIngredientCreate(ingredient));
        }}
      >
        {formData.map((input, index) => {
          return (
            <div
              className="ing-form-container"
              key={index}>
              <input
                className="ing-form-input"
                type="text"
                name="food_name"
                value={input.food_name}
                placeholder="ingredient"
                onChange={(e) => handleChange(e, index)}
              />
              {formData.length !== 1 && (
                <button
                  className="ing-form-delete-button"
                  type="button"
                  name="remove"
                  onClick={() => handleRemoveInput(index)}
                >
                X
                </button>
              )}
            </div>
          );
        })}

        <button
          className="ing-form-button"
          type="button"
          name="add"
          onClick={handleAddInput}>
          ADD
        </button>
        <br />
        <Link to="/recipes">
        <button className="ing-form-button">SUBMIT</button>
        </Link>
      </form>
    </>
  );
}

export default IngredientForm;

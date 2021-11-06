import { useState } from "react";

function IngredientForm(props) {
  const {handleIngredientCreate, recipeId} = props
  const [formData, setFormData] = useState([
    {
      food_name: '',
      recipe_id: '',
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const form = [...formData]
    form[index][name] = value;
    form[index].recipe_id = recipeId
    setFormData(form)
    // setFormData((prevState) => ({
    //   ...prevState,
    //   recipe_id: "",
    //   [name]: value,
    // }));
  };

  const handleAddInput = () => {
    setFormData([...formData, { food_name: '', recipe_id: '' }]);
    // const form = [...formData];
    // form.push({ food_name: '', recipe_id: '' })
    // setFormData(form)
    console.log(recipeId)
  };

  const handleRemoveInput = (index) => {
    const form = [...formData];
    form.splice(index, 1)
    setFormData(form)
  }

  return (
    <>
      <div>INGREDIENTS:</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          formData.map((ingredient) => handleIngredientCreate(ingredient))
        }}>
      {formData.map((input, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              name="food_name"
              value={input.food_name}
              placeholder="food_name"
              onChange={(e) => handleChange(e, index)}
            />
            {/* <input
              type="text"
              name="recipe_id"
              value={input.recipe_id}
              placeholder="recipe_id"
              onChange={(e) => handleChange(e, index)}
            /> */}
            {formData.length !== 1 && <button type="button" name="remove"
              onClick={() => handleRemoveInput(index)}>
              -
            </button>}
            <br />
          </div>
        );
      })}
        
      <button type="button" name="add" onClick={handleAddInput}>
        +
      </button>
      <br />
            <button>SUBMIT</button>
      </form>
      <br />
      {JSON.stringify(formData, null, 2)}
    </>
  );
}

export default IngredientForm;



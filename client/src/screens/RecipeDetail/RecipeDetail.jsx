import "./RecipeDetail.css";

import { useState, useEffect } from "react";
import { getOneRecipe } from "../../services/recipes";
import { getAllIngredients } from "../../services/ingredients";
import { useParams, Link } from "react-router-dom";

function RecipeDetail(props) {
  const { currentUser, handleRecipeDelete } = props;
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      const recipe = await getOneRecipe(id);
      const recipeIngredients = await getAllIngredients();
      setRecipe(recipe);
      setIngredients(
        recipeIngredients?.filter(
          (ingredient) => ingredient.recipe_id === Number(id)
        )
      );
    };
    fetchDetail();
  }, [id]);
  console.log(id);
  return (
    <>
      <div className="detail-ruler">
        <div className="detail-image-container">
          <img className="detail-image" src={recipe.image} alt={recipe.title} />
        </div>
        <div className="detail-container">
          <div className="detail-title">{recipe.title}</div>
          <div className="detail-serving">Serves: {recipe.serving_size}</div>
          <div className="preparation">
            <div className="detail-ingredients">
              <span className="ingredients">Ingredients:</span>
              {ingredients?.map((list) => {
                return <div key={list?.id}>{list?.food_name}</div>;
              })}
            </div>
            <div className="detail-directions">
              <span className="directions">Directions:</span>
              <div>{recipe.directions}</div>
            </div>
          </div>
          {currentUser?.id === recipe.user_id && (
            <>
              <div className="detail-button-container">
                <Link to={`/recipes/${id}/edit`}>
                  <button className="detail-button">EDIT</button>
                </Link>
                <button
                  className="detail-button"
                  onClick={() => handleRecipeDelete(id)}
                >
                  DELETE
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;

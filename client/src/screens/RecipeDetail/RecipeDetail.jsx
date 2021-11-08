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
        <div className="detail-container">
          <div className="detail-image-container">
            <img
              className="detail-image"
              src={recipe.image}
              alt={recipe.title}
            />
          </div>
          <div>{recipe.title}</div>
          <div>
            {ingredients?.map((list) => {
              return <div key={list?.id}>{list?.food_name}</div>;
            })}
          </div>
          {currentUser?.id === recipe.user_id && (
            <>
              <Link to={`/recipes/${id}/edit`}>
                <button>EDIT</button>
              </Link>
              <button onClick={() => handleRecipeDelete(id)}>DELETE</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;

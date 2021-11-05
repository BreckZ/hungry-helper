import "./RecipeCard.css";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  const { recipe } = props;

  return (
    <div className='recipe-card-container'>
      <Link className='recipe-polaroid' to={`/recipes/${recipe.id}`}>
          <div className='recipe-details'>{recipe.image}</div>
          <div className='recipe-details'>{recipe.title}</div>
          <div className='recipe-details'>SERVES: {recipe.serving_size}</div>
      </Link>
    </div>
  );
}

export default RecipeCard;

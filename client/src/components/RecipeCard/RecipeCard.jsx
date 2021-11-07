import "./RecipeCard.css";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  const { recipe } = props;

  return (
    <div className='recipe-card-container'>
      <Link className='recipe-polaroid' to={`/recipes/${recipe.id}`}>
          <img className='recipe-field image' src={recipe.image} alt={recipe.title} />
          <div className='recipe-field title'>{recipe.title}</div>
          <div className='recipe-field serving'>SERVES: {recipe.serving_size}</div>
      </Link>
    </div>
  );
}

export default RecipeCard;

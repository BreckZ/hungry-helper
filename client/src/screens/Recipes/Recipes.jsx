import "./Recipes.css";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function Recipes(props) {
  const { recipes } = props;

  return (
    <>
      <div>BROWSE RECIPES</div>
      <div className='recipes-container'>
        {recipes.map((recipe, index) => (
          <RecipeCard recipe={recipe} key={index} />
        )).reverse()}
      </div>
    </>
  );
}

export default Recipes;

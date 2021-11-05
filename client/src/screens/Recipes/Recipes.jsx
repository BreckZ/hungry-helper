import "./Recipes.css";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function Recipes(props) {
  const { recipes } = props;
  
  return (
    <>
      <div>RECIPES</div>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))};
    </>
  );
}

export default Recipes;

import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { deleteRecipe, getAllRecipes, postRecipe, putRecipe } from '../services/recipes';
// import { deleteIngredient, getAllIngredients, postIngredient, putIngredient } from '../services/ingredients';
import Recipes from '../screens/Recipes/Recipes';
import RecipeCreate from '../screens/RecipeCreate/RecipeCreate';
import RecipeEdit from '../screens/RecipeEdit/RecipeEdit';
import RecipeDetail from '../screens/RecipeDetail/RecipeDetail';

export default function MainContainer(props) {
  const [recipes, setRecipes] = useState([]);
  // const [ingredients, setIngredients] = useState([]);
  const history = useHistory();
  const { currentUser } = props

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeList = await getAllRecipes();
      setRecipes(recipeList);
    };
    fetchRecipes();
  }, []);

  // useEffect(() => {
  //   const fetchIngredients = async () => {
  //     const ingredientList = await getAllIngredients();
  //     setIngredients(ingredientList);
  //   };
  //   fetchIngredients();
  // }, []);

  const handleRecipeCreate = async (formData) => {
    const newRecipe = await postRecipe(formData);
    setRecipes((prevState) => [...prevState, newRecipe]);
    history.push('/recipes');
  };

  const handleRecipeUpdate = async (id, formData) => {
    const newRecipe = await putRecipe(id, formData);
    setRecipes((prevState) =>
      prevState.map((recipe) => {
        return recipe.id === Number(id) ? newRecipe : recipe;
      })
    );
    history.push('/recipes');
  };

  const handleRecipeDelete = async (id) => {
    await deleteRecipe(id);
    setRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id));
  };

  return (
    <Switch>
      <Route path='/recipes/:id/edit'>
        <RecipeEdit recipes={recipes} handleRecipeUpdate={handleRecipeUpdate} />
      </Route>
      <Route path='/recipes/create'>
        <RecipeCreate handleRecipeCreate={handleRecipeCreate} currentUser={currentUser} />
      </Route>
      <Route path='/recipes/:id'>
        <RecipeDetail recipes={recipes} handleRecipeDelete={handleRecipeDelete} />
      </Route>
      <Route path='/recipes'>
        <Recipes recipes={recipes} />
      </Route>
    </Switch>
  );
}
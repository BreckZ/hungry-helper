import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { deleteRecipe, getAllRecipes, postRecipe, putRecipe } from '../services/recipes';
import { deleteIngredient, getAllIngredients, postIngredient, putIngredient } from '../services/ingredients';
import Home from '../screens/Home/Home'
import Recipes from '../screens/Recipes/Recipes';
import RecipeCreate from '../screens/RecipeCreate/RecipeCreate';
import RecipeEdit from '../screens/RecipeEdit/RecipeEdit';
import RecipeDetail from '../screens/RecipeDetail/RecipeDetail';

export default function MainContainer(props) {
  const { currentUser } = props
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipeId, setRecipeId] = useState(0);
  const [toggle, setToggle] = useState(true)
  const history = useHistory();

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeList = await getAllRecipes();
      setRecipes(recipeList);
    };
    fetchRecipes();
  }, [toggle]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const ingredientList = await getAllIngredients();
      setIngredients(ingredientList);
    };
    fetchIngredients();
  }, []);

  const handleRecipeCreate = async (formData) => {
    const newRecipe = await postRecipe(formData);
    setRecipeId(newRecipe.id)
    setRecipes((prevState) => [...prevState, newRecipe]);
    // return newRecipe.id
    // history.push('/recipes');
  };

  const handleIngredientCreate = async (formData) => {
    try { 
    const newIngredient = await postIngredient(formData);
    setIngredients((prevState) => [...prevState, newIngredient]);
    history.push('/recipes');
    } catch (error) {
      console.log(error)
  }
  };

  const handleRecipeUpdate = async (id, formData) => {
    try {
      const newRecipe = await putRecipe(id, formData);
      setRecipes((prevState) =>
        prevState.map((recipe) => {
          return recipe.id === Number(id) ? newRecipe : recipe;
        })
      );
      // setToggle(prevState => !prevState)
      history.push('/recipes');
    } catch (error) {
      console.log(error)
    }
  };

  const handleIngredientUpdate = async (id, formData) => {
    try {
      const newIngredient = await putIngredient(id, formData);
      setIngredients((prevState) =>
        prevState.map((ingredient) => {
          return ingredient.id === Number(id) ? newIngredient : ingredient;
        })
      );
      history.push('/recipes');
    } catch (error) {
      console.log(error)
    }
  };

  const handleRecipeDelete = async (id) => {
    try {
      await deleteRecipe(id);
      setRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id));
    } catch (error) {
      console.log(error)
    }
    setToggle(prevState => !prevState)
    history.push('/recipes')
  };

  const handleIngredientDelete = async (id) => {
    try {
      await deleteIngredient(id);
      setIngredients((prevState) => prevState.filter((ingredient) => ingredient.id !== id));
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Switch>
      <Route path='/recipes/:id/edit'>
        <RecipeEdit
          recipes={recipes}
          ingredients={ingredients}
          handleRecipeUpdate={handleRecipeUpdate}
          handleIngredientUpdate={handleIngredientUpdate}
          
          />
      </Route>
      <Route path='/recipes/create'>
        <RecipeCreate
          currentUser={currentUser}
          handleRecipeCreate={handleRecipeCreate}
          handleIngredientCreate={handleIngredientCreate}
          recipeId={recipeId}
        />
      </Route>
      <Route path='/recipes/:id'>
        <RecipeDetail
          currentUser={currentUser}
          recipes={recipes}
          ingredients={ingredients}
          handleRecipeDelete={handleRecipeDelete}
          handleIngredientDelete={handleIngredientDelete}
        />
      </Route>
      <Route path='/recipes'>
        <Recipes
          recipes={recipes}
          ingredients={ingredients}
        />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}
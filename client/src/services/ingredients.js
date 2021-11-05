import api from './api-config';

export const getAllIngredients = async () => {
  const resp = await api.get('/ingredients');
  return resp.data;
};

export const getOneIngredient = async (id) => {
  const resp = await api.get(`/ingredients/${id}`);
  return resp.data;
};

export const postIngredient = async (ingredientData) => {
  const resp = await api.post('/ingredients', { ingredient: ingredientData });
  return resp.data;
};

export const putIngredient = async (id, ingredientData) => {
  const resp = await api.put(`/ingredients/${id}`, { ingredient: ingredientData });
  return resp.data;
};

export const deleteIngredient = async (id) => {
  const resp = await api.delete(`/ingredients/${id}`);
  return resp;
};
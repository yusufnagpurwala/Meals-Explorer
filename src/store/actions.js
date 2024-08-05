import axiosClient from '../AxiosClient';

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`) 
  .then(({ data }) => {
    debugger;
    commit('setSearchMeals', data.meals) //Commit calls Mutation 
  })
}
export function searchMealsbyLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`) 
  .then(({ data }) => {
    debugger;
    commit('setMealsByLetter', data.meals) //Commit calls Mutation 
  })
}
export function searchMealsByIngredient({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`) 
  .then(({ data }) => {
    debugger;
    commit('setMealsByIngredient', data.meals) //Commit calls Mutation 
  })
}
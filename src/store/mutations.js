export function setSearchMeals(state, meals) {
  state.searchedMeals = meals || [] // This function calls state,serachedMeals which is a array of data
}
export function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals || [] // This function calls state,mealsByLetter which is a array of data
}
export function setMealsByIngredient(state, meals) {
  state.mealsByIngredient = meals || [] // This function calls state,mealsByIngredient which is a array of data
}
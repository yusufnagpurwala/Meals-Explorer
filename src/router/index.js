import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import Home from '../views/Home.vue'    
import MealsbyName from '../views/MealsbyName.vue'    
import MealsbyLetter from '../views/MealsbyLetter.vue'    
import MealsbyIngredient from '../views/MealsbyIngredient.vue'    
import MealDetails from '../views/MealDetails.vue'    
import Ingredients from '../views/Ingredients.vue'    

const routes = [
    {
      path: '/',
      component: DefaultLayout,
      children: [
      {
          path: '/',
          name: 'home',
          component: Home 
      },
      {
          path: '/byName/:name?',
          name: 'byName',
          component: MealsbyName
      },
      {
          path: '/byLetter/:letter?',
          name: 'byLetter',
          component: MealsbyLetter
      },
      {
          path: '/byIngredient/:ingredient',
          name: 'byIngredient',
          component: MealsbyIngredient
      },
      {
          path: '/ingredients',
          name: 'ingredients',
          component: Ingredients 
      }
  ]
},
  {
    path: '/guest',
    component: GuestLayout
  },
  {
    path: '/meal/:id',
    name: 'mealDetails',
    component: MealDetails
  }
    
]; 


const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router; 
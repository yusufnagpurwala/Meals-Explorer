<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../AxiosClient';
import MealItem from '../components/MealItem.vue';


const meals = ref([]); 

onMounted(async () => {
  for(let i =1; i < 20; i++) {
    axiosClient.get(`random.php`)
    .then(({data}) => meals.value.push(data.meals[0])) 
  }
}); 

console.log(meals); 
</script>

<template>

  <div>
    <h1 
      class="flex justify-center text-5xl font-sans mt-5 text-orange-600 font-bold">
      <span class="material-symbols-outlined text-5xl">food_bank</span> Meals Explorer 
    </h1>
    <h3 class="flex justify-center text-xl font-sans mt-3 pb-0 text-orange-600 font-semibold"> Search. Explore. Cook. </h3>
  </div>

<div class="bg-gray-200 h-full grid grid-cols-1 md:grid-cols-3 p-8 gap-5">
     <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
</template>
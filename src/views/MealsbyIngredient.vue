<script setup>
import { computed, onMounted } from 'vue';
import MealItem from '../components/MealItem.vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute(); 
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient) 
})
</script>

<template>
  <!-- <pre>{{  meals }}</pre> -->
  <div class="bg-gray-200 h-full grid grid-cols-1 md:grid-cols-3 p-8 gap-5">
     <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
  <div v-if="!meals.length">
    <h1 class="flex justify-center mt-7 font-sans font-semibold text-lg">No Meals Available </h1>
  </div>
</template>
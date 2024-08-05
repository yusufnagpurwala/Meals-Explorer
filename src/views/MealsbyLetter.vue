<script setup>
import { computed } from '@vue/reactivity';
import store from '../store';
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';

const route = useRoute();
watch(route, ()=> {
  store.dispatch('searchMealsbyLetter', route.params.letter)
})
const letters = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'.split("");

const meals = computed(() => store.state.mealsByLetter);

onMounted(() => {
  store.dispatch('searchMealsbyLetter', route.params.letter)
})
</script>

<template>
  <div class="flex flex-col p-8">
    <div class="flex flex-wrap gap-2 justify-center mt-3 max-w-[100%]">
        <router-link :to="{name: 'byLetter', params: {letter} }" 
          v-for="letter of letters" :key="letter" 
          class="ease-out duration-30 hover:scale-110 hover:text-orange-600">

              {{ letter }}

        </router-link>
    </div>
  </div>
    <!-- <pre>{{ meals }}</pre> -->
    <div class="bg-gray-200 h-full grid grid-cols-1 md:grid-cols-3 p-8 gap-5">
     <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>

  <div v-if="!meals.length">
    <h1 class="flex justify-center mt-7 font-sans font-semibold text-lg">No Meals Available... </h1>
  </div>
  
</template>
<script setup>
import { onMounted, ref } from 'vue'
import store from '../store';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
import MealItem from '../components/MealItem.vue';

const route = useRoute(); 
const keyword = ref(''); 

const meals = computed(() => store.state.searchedMeals) // Returns the searched Meals(data)

function searchMeals() {
  if(keyword.value) {
    store.dispatch('searchMeals', keyword.value)
  }  else {
    store.commit('setSearchMeals', []); 
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if(keyword.value) {
    searchMeals(); 
  }
})

console.log(meals.lenght)
</script>

<template>
  <div class="p-8">
    <input 
    type="search" 
    v-model="keyword"
    @input="searchMeals"
    class="rounded border-2 border-grey-200 w-full" 
    @change="searchMeals" 
    placeholder="Serach for Meals"/>

  </div>

    <div class="bg-gray-200 h-full grid grid-cols-1 md:grid-cols-3 p-8 gap-5">  
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>

    <div v-if="!meals.length">
    <h1 class="flex justify-center mt-7 font-sans font-semibold text-lg">No Meals Available </h1>
  </div>
</template>
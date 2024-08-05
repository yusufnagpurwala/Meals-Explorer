<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from 'vue';
import axiosClient from '../AxiosClient';

const keyword = ref(""); 
const ingredients = ref([]); 
const computedIngredients = computed(() => { 
  return ingredients.value.filter((i) => 
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  ); 
}); 

onMounted(() =>{
  axiosClient.get('list.php?i=list')  
   .then(({data})=>{
    ingredients.value = data.meals
   })
});
</script>

<template>
  <div class="bg-gray-200">
    <div class="flex justify-center text-3xl font-sans pt-3 text-orange-600 font-bold">Ingredients</div>

    <div class="p-8">
       <input 
      type="search" 
      v-model="keyword"
      class="rounded border-2 border-grey-200 w-full mb-3"  
      placeholder='Serach for Ingredients'/>
  </div>


  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <router-link :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}" 
    :key="ingredient.idIngredient"
    v-for="ingredient of computedIngredients" 
    class="block border rounded-xl bg-slate-100 ease-out duration-300 hover:scale-105 shadow-md max-w-[70%] mx-20 my-5">
      <h1 class="flex justify-center text-3xl font-sans p-5 text-orange-600 font-bold">
        {{ ingredient.strIngredient }} </h1>
  </router-link>
</div>
  </div>
</template>

<script setup>

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
});

</script>

<template>
  <div 
      class="rounded-xl bg-slate-100 ease-out duration-300 hover:scale-105 shadow-md max-w-[100%]"> 
      <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
        <img 
          :src="meal.strMealThumb" :alt="meal.strMeal" 
          class="rounded-t-xl w-full h-60 object-cover" />
      </router-link>

      <div class="p-5">

        <h3 class="font-bold">{{ meal.strMeal }}</h3>

        <p class="font-semibold py-3"> 
           {{ $filters.truncateWords(meal.strInstructions, 30) }}  
           <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}" class="text-blue-500"> Read More..</router-link>
        </p>
        <div class="py-3 flex justify-between max-w-[100%]">
          <a 
          :href="meal.strYoutube" target="_blank" 
          class="border-2 border-red-600 rounded-xl px-3 py-2 hover:bg-red-600 hover:text-slate-200 transition ease-out duration-500 justify-center"> 
          Youtube
          </a>
          <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}" 
          class="border-2 border-blue-600 bg-blue-600 text-slate-200 rounded-xl px-3 py-2 hover:text-blue-600 hover:bg-white transition ease-out duration-500 justify-center"> 
          View Details 
        </router-link>
        </div>
      </div>
    </div> 
</template>../filter/filters
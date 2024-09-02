<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../AxiosClient';
import Navbar from '../components/Navbar.vue'

const meal = ref({});
const route = useRoute(); 

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`) 
  .then(({ data }) =>{
    debugger;
    meal.value = data.meals[0] || {};
  }) 
})
</script>

<template>

  <Navbar />
  <div class="bg-gray-200">
      <!-- <pre>{{ meal }}</pre> -->
      <div class="flex justify-center">
         <h1 class="text-4xl font-sans font-bold p-8 Title text-orange-600">{{ meal.strMeal }}</h1> 
      </div>
      <div class="flex px-10 mr-10 position-absolute">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-h-[350px] rounded-xl mr-[15%]"/>
        <div class="grid grid-cols-1 sm:grid-cols-2 max-w-[900px]">
          <div class="">
            <h2 class="mb-2 text-xl font-sans font-bold"> Ingredients </h2>
              <div>
                <ul class="py-3 font-sans font-semibold">
                <template v-for="(el, index) of new Array(20)">
                 <li v-if="meal[`strIngredient${index + 1}`]">
                  {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }} 
                </li>
              </template>
            </ul>
          </div>
        </div>
        <div class="px-10">
          <h2 class="mb-2 text-xl font-sans font-bold"> Measures </h2>
            <ul class="py-3 font-sans font-semibold">
              <template v-for="(el, index) of new Array(20)">
                <li v-if="meal[`strMeasure${index + 1}`]">
                  {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }} 
                </li>
              </template>
            </ul>
        </div>
      </div>

      </div>

      <div class="inline-flex justify-between ml-5 font-semibold max-w-[400px]">
        <div class="p-5">
          <strong>Category:</strong> {{ meal.strCategory }} 
        </div>
        <div class="p-5">
          <strong>Area:</strong> {{ meal.strArea }} 
        </div>
        <div class="p-5">
          <strong>Tags:</strong> {{ meal.strTags }} 
        </div>
      </div>
      <div class="px-10 max-w-[100%] mb-2 font-sans font-semibold text-lg">
        <h2 class="font-bold flex justify-center text-3xl text-orange-600 mb-4"> How to Prepare ? </h2>
       <p class="pb-5">{{ meal.strInstructions }}
        <a :href="meal.strYoutube" target="_blank" class="text-blue-600 hover:underline"> Watch Full video on Youtube.</a>
       </p>
      </div>
  </div>
</template>

<style scoped>
/* .Title {
  background: linear-gradient(90deg, #f1c40f, #e67e22, #e74c3c);
  color: transparent;
  background-clip: text;
} */

/* px-10 max-w-[100%] */
</style>
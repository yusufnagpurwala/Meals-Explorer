<script setup>
</script>

<template>
<header class="bg-slate-300 shadow max-h-16 flex justify-between items-stretch max-w-[100%]">
  <nav class="flex justify-between p-8 sticky">
  <router-link :to="{name: 'home'}" class="inline-flex items-center mx-2 h-full text-orange-600">
   <span class="material-symbols-outlined mt-3">food_bank</span><span class="material-symbols-outlined mt-1">Meals</span>
  </router-link>
  <div class="gap-1 flex items-center ml-4 mt-1">
   <router-link :to="{name: 'byName'}" class="px-2 items-center inline-flex hover:text-orange-600 h-full">
     Search Meals
   </router-link>
   <router-link :to="{name: 'byLetter'}" class="px-2 items-center inline-flex hover:text-orange-600 h-full">
      Meals By Letters
   </router-link>
   <router-link :to="{name: 'ingredients'}" class="px-2 items-center inline-flex hover:text-orange-600 h-full">
     Meals By Ingredients 
   </router-link>
  </div>
  </nav>
 </header>
</template>
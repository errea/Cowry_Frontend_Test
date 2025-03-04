<template>
    <div class="relative lg:w-full w-[8rem] md:w-[50rem] flex flex-col items-center justify-center bottom-[5rem]">
        <input 
            v-model="searchQuery"
            @keyup.enter="handleSearch"
            type="search"
            class="text-xl text-semi-bold h-[6rem] w-[100rem] pl-16 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
            placeholder="Search for photo"
            />
            
        <div class="absolute inset-y-0 left-[44rem] pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { useRouter } from 'vue-router';

const emit = defineEmits(['search-results'])
const router = useRouter();
const searchQuery = ref('')
// const loading = ref(false)

const handleSearch = () => {

  if (searchQuery.value && searchQuery.value.trim()) {
//   router.push({ name: 'search', query: { query: searchQuery.value } })
router.push({
      path: '/search',
      query: { q: searchQuery.value.trim() }
    });
    searchQuery.value = '';
}

}

// Debounce implementation
let timeoutId
const handleSearchResult = () => {
  clearTimeout(timeoutId)
  timeoutId = setTimeout(performSearch, 300)
}
</script>

<style>
/* Add any custom styles here if needed */
</style>
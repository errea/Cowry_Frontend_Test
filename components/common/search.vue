<template>
    <div class="relative lg:w-full w-[8rem] md:w-[50rem] flex flex-col items-center justify-center">
        <input v-model="searchQuery" @input="handleSearch" type="search"
            class="text-xl text-semi-bold h-[6rem] w-[100rem] pl-16 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
            placeholder="Search for photo" />
        <div class="absolute inset-y-0 left-[44rem] pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        </div>
        <!-- <div v-if="loading" class="loading">Searching...</div> -->
        <SearchLoaderPreviewer v-if="loading" :query="searchQuery" />
    </div>
</template>

<script setup>
import SearchLoaderPreviewer from '~/components/common/SearchLoaderPreviewer.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios'

const emit = defineEmits(['search-results'])
const router = useRouter();
const searchQuery = ref('')
const loading = ref(false)

const UNSPLASH_ENDPOINT = 'https://api.unsplash.com/search/photos?query='
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

const handleSearch = () => {
  if (!searchQuery.value.trim()) {
    emit('search-results', { results: [], query: '' })
    return
  }

  if (searchQuery.value && searchQuery.value.trim()) {
  router.push(`/search/${encodeURIComponent(searchQuery.value.trim())}`);
}

  loading.value = true
  axios.get(UNSPLASH_ENDPOINT, {
    params: {
      query: searchQuery.value,
      per_page: 8,
      client_id: ACCESS_KEY
    }
  })
  .then(response => {
    const results = response.data.results.map(result => ({
      name: result.user.name,
      location: result.user.location || 'No location specified',
      avatar: result.user.profile_image?.medium
    }))
    emit('search-results', {
      results,
      query: searchQuery.value
    })
  })
  .catch(error => {
    console.error('Search error:', error)
    emit('search-results', { results: [], query: searchQuery.value })
  })
  .finally(() => {
    loading.value = false
  })
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
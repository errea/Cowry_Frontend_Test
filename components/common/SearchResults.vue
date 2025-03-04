<template>
    <div class="flex absolute top-[4rem] pl-[10rem]">
        <p class=" text-[#262e4d] text-[5rem]">Search Results for</p>
        <h2 class="results-title">"{{ query }}"</h2>
    </div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else class="w-full h-full absolute top-[16rem] left-0">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div v-for="(result, index) in photos" :key="index"
                    class="rounded-lg overflow-hidden shadow-lg cursor-pointer">
                    <img :src="result.avatar" :alt="result.description" class="w-full h-full object-cover" />
                    <div class="text-white absolute bottom-[-5rem] pl-4">
                        <p class="text-2xl">By {{ result.name }}</p>
                        <p class="text-base">{{ result.location }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="no-results">
      No results found.
    </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';
const router = useRouter();
const route = useRoute();
const photos = ref([]);
const loading = ref(false);
const searchTerm = ref(route.params.query || '');

defineProps({
    query: {
      type: String,
      required: true
    }
})

// onMounted(async () => {
//   if (searchTerm.value) {
//     // await fetchSearchResults(searchTerm.value);
//     await fetchSearchResults(route.params.query);
//   }
// });

onMounted(async () => {
  await fetchSearchResults();
});

    watch(() => route.params.query, (newQuery) => {
  if (newQuery) {
    fetchSearchResults(newQuery);
  }
}, { immediate: true });


watchEffect(async () => {
  try {
    loading.value = true;
    const query = route.query.q || 'Africa';
    const response = await getPhotos(query);
    searchResults.value = response.results;
  } catch (error) {
    console.error('Search error:', error);
  } finally {
    loading.value = false;
  }
});

async function fetchSearchResults(query) {
  try {
    loading.value = true;
    const query = route.query.q || 'Africa';
    const response = await axios.get(UNSPLASH_API_URL, {
      params: {
        query,
        per_page: 9,
        client_id: UNSPLASH_ACCESS_KEY
      }
    });
    photos.value = response.data.results || [];
  } catch (error) {
    console.error('Error fetching search results:', error);
  } finally {
    loading.value = false;
  }
}

</script>


<style scoped>
.search-results {
    max-width: 600px;
    margin: 2rem auto;
}

.results-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
}

.results-list {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.result-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #eee;
}

.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
}

.user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.user-name {
    font-size: 1rem;
    margin: 0;
    color: #333;
}

.user-location {
    font-size: 0.875rem;
    margin: 0.25rem 0 0;
    color: #666;
}
.no-results {
  margin-top: 20px;
  text-align: center;
  color: #666;
}
</style>

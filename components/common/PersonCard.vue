<template>
    <div class="p-8">
        <!-- Image Grid -->
            <SearchLoaderPreviewer v-if="loading" :query="searchQuery" />
        <div v-else class="w-full h-full absolute top-[16rem] left-0">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div 
                        v-for="image in images" 
                        :key="image.id"
                        class="rounded-lg overflow-hidden shadow-lg cursor-pointer" 
                        @click="openSlider(index)"
                        >
                        <img 
                        :src="image.urls.small"
                        :alt="image.description" 
                        class="w-full h-full object-cover"
                        />
                        <div class="text-container absolute">
                            <p class="text-2xl">By {{ image.user.name || 'Okereafor' }}</p>
                            <p class="text-base">{{ image.user.location || 'USA' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Image Slider -->
        <ImageSlider
            :images="images"
            :initial-index="selectedIndex"
            :is-open="showSlider"
            @close="showSlider = false"
            />
    </div>
</template>

<script setup>
import SearchLoaderPreviewer from '~/components/common/SearchLoaderPreviewer.vue'
import ImageSlider from '~/components/common/ImageSlider.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY; // Replaced with my Unsplash API key
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos?query=';

// Reactive state
const searchQuery = ref('african'); // Default search query //'fun' ? 'africa' : query
const showSlider = ref(false);
const selectedIndex = ref(0)
const images = ref([]);
const loading = ref(false);

const openSlider = (index) => {
  selectedIndex.value = index;
  showSlider.value = true;
};

// Fetch images from Unsplash
const fetchImages = async () => {
    try {
        loading.value = true;
        const response = await axios.get(UNSPLASH_API_URL, {
            params: {
                query: searchQuery.value,
                per_page: 8, // Number of images to fetch
                client_id: UNSPLASH_ACCESS_KEY,
            },
        });
        images.value = response.data.results;
    } catch (error) {
        console.error('Error fetching images:', error);
    } finally {
        loading.value = false;
    }
};

// Fetch images when the component is mounted
onMounted(() => {
    fetchImages();
});
</script>

<style scoped>
.text-container {
    padding: 1rem;
    color: white;
    left: 47%;
    top: 100%;
    transform: translate(-50%, -50%);
}
.image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
}
.photo-item {   
  cursor: pointer;
  transition: transform 0.2s;
}

.photo-item:hover {
  transform: scale(1.03);
}
</style>
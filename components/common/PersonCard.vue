<template>
    <!-- <div class="w-full h-full absolute top-[16rem] left-0">
        <div class="max-w-7xl mx-auto">
            <div v-if="images.length" class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(column, index) in columns" :key="index"
                    class="bg-no-repeat relative h-[28rem] w-[22rem] rounded-lg shadow-lg overflow-hidden"
                    >
                    <img class="w-full h-full object-cover" :src="column.image" alt="" />
                    <div class="text-white absolute top-[22rem] pl-2">
                        <h2 class="text-2xl">{{ column.name }}</h2>
                        <p class="mt-1">{{ column.location }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div> -->


    <div class="p-8">
        <!-- Search Bar -->
        <!-- <div class="mb-8">
            <input v-model="searchQuery" type="text" placeholder="Search for photos"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                @keyup.enter="fetchImages" />
        </div> -->

        <!-- Image Grid -->
        <div v-if="loading" class="text-center">Loading...</div>
        <div v-else class="w-full h-full absolute top-[16rem] left-0">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div v-for="image in images" :key="image.id" class="rounded-lg overflow-hidden shadow-lg cursor-pointer">
                        <img :src="image.urls.small" :alt="image.description" class="w-full h-full object-cover" />
                        <div class="text-white absolute bottom-[-5rem] pl-4">
                            <p class="text-2xl">By {{ image.user.name }}</p>
                            <p class="text-base">{{ image.user.location }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = 'ILFKrnnOEKuPpEeR0jJag8MOLph8rje3j0tASj1BGIc'; // Replace with your Unsplash API key
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos?query=';

// Reactive state
const searchQuery = ref('random'); // Default search query
const images = ref([]);
const loading = ref(false);

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

<style lang="scss" scoped></style>
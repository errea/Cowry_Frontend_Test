<template>
    <div class="relative w-full max-w-3xl mx-auto overflow-hidden">
      <!-- Slider Container -->
      <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <!-- Slide 1 -->
        <div v-for="(slide, index) in slides" :key="index" class="min-w-full flex-shrink-0 p-4">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img :src="slide.image" alt="User Image" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-xl font-semibold">{{ slide.name }}</h3>
              <p class="text-gray-600">{{ slide.location }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Navigation Buttons -->
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        slides: [
          {
            image: "https://via.placeholder.com/400x200", // Replace with actual image URL
            name: "Jordan Okeke",
            location: "Pretoria, South Africa",
          },
          {
            image: "https://via.placeholder.com/400x200", // Replace with actual image URL
            name: "Princess Somalike",
            location: "Ibadan, Nigeria",
          },
          // Add more slides as needed
        ],
      };
    },
    methods: {
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      },
    },
  };
  </script>
  
  <style>
  /* Add custom styles if needed */
  </style>
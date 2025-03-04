<template>
    <div class="min-h-[200px] flex items-center justify-center p-8">
      <div class="flex flex-col items-center gap-4 max-w-md mx-auto text-center">
        <!-- Spinner -->
        <div class="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        
        <!-- Text -->
        <div class="text-gray-600 text-lg animate-pulse">
          Searching for "{{ query }}"...
        </div>
      </div>
    </div>
  </template>

<script setup>

definePageMeta({
  layout: 'loader',
})

defineProps({
    query: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    padding: 2rem;
    text-align: center;
}

.loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 600px;
    color: #666;
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #646cff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

.loading-text {
    font-size: 1.1rem;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}
</style>
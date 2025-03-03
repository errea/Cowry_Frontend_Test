<template>
    <!-- <div class="search-results">
      <div class="results-list">
        <div v-for="(result, index) in results" :key="index" class="result-item">
          <div class="user-avatar">
            <img :src="result.avatar" alt="User avatar" />
          </div>
          <div class="user-info">
            <h3 class="user-name">{{ result.name }}</h3>
            <p class="user-location">{{ result.location }}</p>
          </div>
        </div>
      </div>
    </div> -->

    <div class="w-full h-full absolute top-[16rem] left-0">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div v-for="(result, index) in results" :key="index"
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
</template>


<script setup>
defineProps({
    results: {
        type: Array,
        default: () => []
    }
})
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
</style>

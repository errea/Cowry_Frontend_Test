<template>
    <div class="min-h-screen">
        <div class="w-full h-80 flex justify-center items-center bg-[#dde3eb] gap-2">
            <p class=" text-[#262e4d] text-[5rem]">Search Results for</p>
            <h2 class="results-title">""</h2>
        </div>
        <slot />
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.results-title {
  font-size: 5rem;
  color: #acb2be;
}
</style>
<template>
    <div class="relative w-full flex items-center justify-center">
        <input type="text"
            class="text-xl text-semi-bold h-[6rem] w-[100rem] pl-16 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
            placeholder="Search for photo" />
        <div class="absolute inset-y-0 left-[44rem] pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
};
</script>

<style>
/* Add any custom styles here if needed */
</style>
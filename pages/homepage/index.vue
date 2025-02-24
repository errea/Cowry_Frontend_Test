<template>
  <div>
    <h1 class="text-3xl font-bold text-center">Welcome to the About </h1>
    <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img class="size-48 shadow-xl rounded-md" alt="" :src="cover" />
      </div>
      <div class="flex flex-col items-center md:items-start">
        <span class="text-2xl font-medium">{{ title }}</span>
        <span class="font-medium text-sky-500">{{ subtitle }}</span>
        <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>{{ issue }}</span>
          <span>·</span>
          <span>{{ year }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>
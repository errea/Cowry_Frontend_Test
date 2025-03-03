<template>
    <div>
      <SearchResults v-if="searchData.results.length" :results="searchData.results" :query="searchData.query" />
    </div>
  </template>
  
  <script setup>
  import SearchResults from '~/components/common/SearchResults.vue'
  const { id } = useRoute().params
  
  definePageMeta({
    layout: 'search',
  })
  const searchData = ref({ results: [], query: '' })
  </script>
  
  <style lang="scss" scoped>
  
  </style>
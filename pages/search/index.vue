<template>
  <div>
    <SearchResults :query="query" />
  </div>
</template>

<script setup>
import SearchResults from '~/components/common/SearchResults.vue'
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const route = useRoute();
const searchResults = ref([]);
const searchData = ref({ results: [], query: '' })

</script>

<style lang="scss" scoped>

</style>
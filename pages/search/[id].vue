<template>
    <div>
      <p> Search Result display here {{ id }}</p>
    </div>
  </template>
  
  <script setup>
  import { definePageMeta } from 'nuxt/dist/pages/runtime';

  const { id } = useRoute().params
  
  definePageMeta({
    layout: 'search',
  })
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>
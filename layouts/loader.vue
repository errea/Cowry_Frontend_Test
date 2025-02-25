<template>
    <div class="min-h-screen">
        <div class="w-full h-80 flex justify-center bg-[#dde3eb] text-white">
            <p>Search Results for
                <span class="text-blue-500">"{{ $route.query.q }}"</span>
            </p>
        </div>
        <slot />
    </div>
</template>

<script setup>
import { definePayloadPlugin } from 'nuxt/app';

definePayloadPlugin('search', {
  query: 'q'
});
</script>

<style lang="scss" scoped></style>
<template>
    <div class="min-h-screen">
        <div class="w-full h-80 flex justify-center bg-[#dde3eb] text-white">
            <Search />
        </div>
        <slot />
    </div>
</template>

<script>
import Search from '~/components/common/Search.vue'

export default {
    components: {
        Search
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped></style>
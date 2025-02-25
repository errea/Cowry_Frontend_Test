<template>
    <div>
        <div class="p-6">
            <PersonCard />
        </div>
    </div>
</template>

<script>
import PersonCard from '~/components/common/PersonCard.vue'

export default {
    components: {
        PersonCard
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped></style>
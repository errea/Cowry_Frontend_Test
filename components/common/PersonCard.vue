<template>
    <div class="w-full h-full absolute top-[16rem] left-0">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(column, index) in columns" :key="index"
                    class="bg-no-repeat relative h-[28rem] w-[22rem] rounded-lg shadow-lg overflow-hidden"
                    >
                    <img class="w-full h-full object-cover" :src="column.image" alt="" />
                    <div class="text-white absolute top-[22rem] pl-2">
                        <h2 class="text-2xl">{{ column.name }}</h2>
                        <p class="mt-1">{{ column.location }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const columns = [
    {
        name: "Jordan Okeke",
        location: "Lupus, Nigaria",
        image: "/images/image-1.jpg",
    },
    {
        name: "Okere Herbert",
        location: "London, United Kingdom",
        image: "/images/image-1.jpg",
    },
    {
        name: "Jordan Okeke",
        location: "Lupus, Nigaria",
        image: "/images/image-1.jpg",
    },
    {
        name: "Okere Herbert",
        location: "London, United Kingdom",
        image: "/images/image-1.jpg",
    },
    {
        name: "Jordan Okeke",
        location: "Lupus, Nigaria",
        image: "/images/image-1.jpg",
    },
    {
        name: "Okere Herbert",
        location: "London, United Kingdom",
        image: "/images/image-1.jpg",
    },
]
</script>




<script setup>

</script>

<style lang="scss" scoped></style>

<!-- :style="{ backgroundImage: `url(${column.image})` }" -->
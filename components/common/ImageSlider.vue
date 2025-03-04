<template>
  <div v-if="isOpen" class="slider-overlay" @click.self="closeSlider">
    <div class="slider-container">
      <button class="nav-btn prev" @click="prevImage">❮</button>
      
      <div class="slider-content">
        <img 
          :src="currentImage.urls.regular" 
          :alt="currentImage.alt_description"
          class="slider-image"
        />
      </div>

      <button class="nav-btn next" @click="nextImage">❯</button>
      <button class="close-btn" @click="closeSlider">×</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  images: Array,
  initialIndex: Number,
  isOpen: Boolean
});

const emit = defineEmits(['close']);

const currentIndex = ref(props.initialIndex);
const isOpen = ref(props.show);

const currentImage = computed(() => 
  props.images[currentIndex.value] || {}
);

watch(() => props.initialIndex, (newVal) => {
  currentIndex.value = newVal;
});

const prevImage = () => {
  currentIndex.value = currentIndex.value > 0 
    ? currentIndex.value - 1 
    : props.images.length - 1;
};

const nextImage = () => {
  currentIndex.value = currentIndex.value < props.images.length - 1 
    ? currentIndex.value + 1 
    : 0;
};

const closeSlider = () => {
  isOpen.value = false;
  emit('close');
};
</script>

<style scoped>
.slider-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.slider-container {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.slider-image {
  max-height: 80vh;
  max-width: 100%;
  object-fit: contain;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 2rem;
}

.prev { left: 0; }
.next { right: 0; }

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}
</style>
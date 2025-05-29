<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  show: boolean
  message: string
}>()

const emit = defineEmits(['close'])
</script>

<template>
  <div v-if="props.show"
    class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
    <div class="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-2xl text-center text-gray-800 animate-fade-in">

      <!-- ICON -->
      <div class="flex justify-center mb-4">
        <svg class="h-12 w-12 text-green-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>

      <!-- MESSAGE -->
      <p class="text-xl font-semibold mb-2">{{ props.message }}</p>
      <p class="text-sm text-gray-500 mb-6">You can close this message when you're ready.</p>

      <!-- BUTTON -->
      <button @click="emit('close')"
        class="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition shadow-md hover:shadow-lg active:scale-95">
        Got it
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>

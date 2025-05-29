<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import Modal from './Modal.vue'

const name = ref('')
const email = ref('')
const message = ref('')

const isLoading = ref(false)
const showModal = ref(false)
const modalMessage = ref('')

const backendUrl = import.meta.env.VITE_API_URL

const sendForm = async () => {
  isLoading.value = true
  try {
    const res = await axios.post(`${backendUrl}/contact`, {
      name: name.value,
      email: email.value,
      message: message.value
    })
    modalMessage.value = res.data.message || 'Message sent successfully!'
    showModal.value = true
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (err) {
    modalMessage.value = 'Error sending message. Please try again later.'
    showModal.value = true
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section id="contact" class="min-h-screen w-full px-4 pt-16 pb-32 flex flex-col items-center text-white">
    <h1 class="text-4xl md:text-5xl font-bold mb-12 text-center mt-8">CONTACT ME</h1>
    <div class="w-full max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl">
      <form @submit.prevent="sendForm" class="flex flex-col gap-6">
        <!-- NAME -->
        <div class="flex flex-col">
          <label for="name" class="mb-1 text-sm sm:text-base font-semibold text-white">
            Name
          </label>
          <input v-model="name" id="name" type="text" required
            class="p-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your name" />
        </div>

        <!-- EMAIL -->
        <div class="flex flex-col">
          <label for="email" class="mb-1 text-sm sm:text-base font-semibold text-white">
            Email
          </label>
          <input v-model="email" id="email" type="email" required
            class="p-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your email" />
        </div>

        <!-- MESSAGE -->
        <div class="flex flex-col">
          <label for="message" class="mb-1 text-sm sm:text-base font-semibold text-white">
            Message
          </label>
          <textarea v-model="message" id="message" rows="5" required
            class="p-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            placeholder="Enter your message"></textarea>
        </div>

        <!-- BUTTON -->
        <div class="flex justify-center mt-4">
          <button type="submit" :disabled="isLoading"
            class="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition text-white font-semibold text-sm sm:text-base shadow-md hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
            <span v-if="isLoading">
              <svg class="animate-spin h-5 w-5 text-white inline-block" viewBox="0 0 24 24" fill="none">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            </span>
            <span v-else>Send Message</span>
          </button>
        </div>
      </form>
    </div>
    <!-- MODAL -->
    <Modal :show="showModal" :message="modalMessage" @close="showModal = false" />
  </section>
</template>

<style scoped></style>

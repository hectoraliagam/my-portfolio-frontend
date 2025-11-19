<script setup lang="ts">
const currentYear = new Date().getFullYear()

function goHome() {
  window.location.href = window.location.origin
}
</script>

<template>
  <footer class="bg-gradient-to-t from-black via-gray-900 to-gray-950 text-white pt-10 pb-6 sm:px-16 px-8">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center sm:gap-8 gap-4">
      <!-- ABOUT -->
      <div class="space-y-2">
        <h2 class="sm:text-xl text-lg font-semibold tracking-wide">HECTOR ALIAGA</h2>
        <p class="sm:text-sm text-xs text-gray-400 max-w-sm">
          Desarrollador apasionado por el desarrollo web, la automatización, y las soluciones innovadoras.
        </p>
      </div>
      
      <!-- SOCIAL -->
      <div class="w-full md:w-auto flex flex-col items-end text-right space-y-2">
        <h3 class="sm:text-lg text-base font-semibold text-white tracking-wide">REDES SOCIALES</h3>
        <div class="flex gap-4 text-xl">
          <a href="https://github.com/hectoraliagam" target="_blank" aria-label="GitHub" class="hover:text-blue-400">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://linkedin.com/in/hectoraliagam" target="_blank" aria-label="LinkedIn" class="hover:text-blue-400">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a href="https://t.me/hectoraliagam" target="_blank" aria-label="Telegram" class="hover:text-blue-400">
            <font-awesome-icon :icon="['fab', 'telegram']" />
          </a>
          <a href="https://www.youtube.com/@hectoraliagam" target="_blank" aria-label="YouTube" class="hover:text-red-500">
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
          <a href="https://x.com/hectoraliagam" target="_blank" aria-label="X" class="hover:text-gray-400">
            <font-awesome-icon :icon="['fab', 'x-twitter']" />
          </a>
          <a href="https://dev.to/hectoraliagam" target="_blank" aria-label="Dev.to" class="hover:text-blue-400">
            <font-awesome-icon :icon="['fab', 'dev']" />
          </a>
        </div>
      </div>
    </div>

    <!-- COPYRIGHT -->
    <div class="mt-8 text-center text-xs text-gray-500">
      © {{ currentYear }}. Hecho por
      <button @click="goHome" class="hover:text-indigo-400 font-semibold transition underline underline-offset-2">
        Hector Aliaga
      </button>
    </div>
  </footer>
</template>

<style scoped>
</style>

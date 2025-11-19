<script setup lang="ts">
import { ref } from 'vue'
import Profile from '@/assets/profile.jpg'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-gradient-to-tl from-blue-950 via-blue-900 to-blue-950 text-white font-extrabold shadow-lg">
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4 relative">

      <!-- PROFILE -->
      <div class="flex items-center gap-3 min-w-[180px]">
        <img :src="Profile" alt="Hector Aliaga" class="w-9 h-9 object-cover rounded-full border-2 border-blue-900" />
        <h1 class="text-lg md:text-xl whitespace-nowrap">HECTOR ALIAGA</h1>
      </div>

      <!-- HAMBURGER MENU -->
      <button @click="toggleMenu"
        class="md:hidden focus:outline-none text-white text-2xl absolute right-4 top-1/2 transform -translate-y-1/2 z-50"
        aria-label="Menú">
        <font-awesome-icon :icon="['fas', isMenuOpen ? 'times' : 'bars']" />
      </button>

      <!-- LINKS -->
      <ul class="hidden md:flex lg:absolute md:static gap-4 lg:gap-6 text-sm md:text-base 
         lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2">
        <li><a href="/" class="hover:underline">INICIO</a></li>
        <li><a href="#about" class="hover:underline">SOBRE MÍ</a></li>
        <li><a href="#projects" class="hover:underline">MIS PROYECTOS</a></li>
        <li><a href="#contact" class="hover:underline">CONTÁCTAME</a></li>
      </ul>

      <!-- SOCIAL MEDIA -->
      <div class="hidden lg:flex items-center gap-4 justify-end min-w-[220px] text-2xl">
        <a href="https://github.com/hectoraliagam" target="_blank" aria-label="GitHub" class="hover:text-blue-400">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://linkedin.com/in/hectoraliagam" target="_blank" aria-label="LinkedIn" class="hover:text-blue-400">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://t.me/hectoraliagam" target="_blank" aria-label="Telegram" class="hover:text-blue-400">
          <font-awesome-icon :icon="['fab', 'telegram']" />
        </a>
        <a href="https://www.youtube.com/@hectoraliagam" target="_blank" aria-label="YouTube"
          class="hover:text-red-500">
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </a>
        <a href="https://x.com/hectoraliagam" target="_blank" aria-label="X" class="hover:text-gray-400">
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>
        <a href="https://dev.to/hectoraliagam" target="_blank" aria-label="Dev.to" class="hover:text-blue-400">
          <font-awesome-icon :icon="['fab', 'dev']" />
        </a>
      </div>
    </nav>

    <!-- MOBILE -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="md:hidden bg-indigo-950 border-t border-indigo-800 px-6 pb-4 z-40 relative">
        <ul class="flex flex-col gap-4 pt-4 text-base">
          <li><a href="/" class="hover:underline" @click="toggleMenu">INICIO</a></li>
          <li><a href="#about" class="hover:underline" @click="toggleMenu">SOBRE MÍ</a></li>
          <li><a href="#projects" class="hover:underline" @click="toggleMenu">MIS PROYECTOS</a></li>
          <li><a href="#contact" class="hover:underline" @click="toggleMenu">CONTÁCTAME</a></li>
        </ul>
        
        <div class="mt-4 flex gap-4 text-2xl">
          <a href="https://github.com/hectoraliagam" target="_blank" aria-label="GitHub" class="hover:text-blue-400">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://linkedin.com/in/hectoraliagam" target="_blank" aria-label="LinkedIn"
            class="hover:text-blue-400">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a href="https://t.me/hectoraliagam" target="_blank" aria-label="Telegram" class="hover:text-blue-400">
            <font-awesome-icon :icon="['fab', 'telegram']" />
          </a>
          <a href="https://www.youtube.com/@hectoraliagam" target="_blank" aria-label="YouTube"
            class="hover:text-red-500">
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
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

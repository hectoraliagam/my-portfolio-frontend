<script setup lang="ts">
import CountrindexPreview from '@/assets/projects/countrindex-preview.png'
import MiniCRMContactosPreview from '@/assets/projects/mini-crm-contactos-preview.png'
import MiniReportesCRMPreview from '@/assets/projects/mini-reportes-crm-preview.png'
</script>

<template>
  <section id="projects"
    class="min-h-screen flex flex-col items-center text-white gap-4 w-11/12 max-w-6xl mx-auto px-4">
    <h1 class="md:text-5xl mt-24 mb-16 font-bold text-4xl">
      MY PROJECTS
    </h1>
    <div class="grid md:grid-cols-2 gap-8 w-full mb-24">
      <!-- Card #1 -->
      <div class="card">
        <img :src="MiniCRMContactosPreview" alt="Mini CRM Contactos Preview" class="card-img" />
        <div class="card-content">
          <h2 class="title">Mini CRM Contactos</h2>
          <p class="subtitle">Sistema de gestión de contactos 100% frontend, diseñado con Vue 3, Vue Router, Vuex y
            Tailwind CSS.</p>
          <div class="minicards">
            <span class="minicard">Vue 3</span>
            <span class="minicard">Vue Router</span>
            <span class="minicard">Vuex 4</span>
            <span class="minicard">TypeScript</span>
            <span class="minicard">Tailwind CSS</span>
            <span class="minicard">Vite</span>
          </div>
          <a href="https://mini-crm-contactos.vercel.app/" target="_blank" class="link-demo">
            Live Demo
          </a>
        </div>
      </div>
      <!-- Card #2 -->
      <div class="card">
        <img :src="MiniReportesCRMPreview" alt="Mini Reportes CRM Preview" class="card-img" />
        <div class="card-content">
          <h2 class="title">Mini CRM Reportes</h2>
          <p class="subtitle">Panel web de reportes desarrollado con Vue 3 + TypeScript y Tailwind CSS.</p>
          <div class="minicards">
            <span class="minicard">Vue 3</span>
            <span class="minicard">Chart.js</span>
            <span class="minicard">Vue Router</span>
            <span class="minicard">TypeScript</span>
            <span class="minicard">Tailwind CSS</span>
            <span class="minicard">Vite</span>
          </div>
          <a href="https://dashboard-reportes.vercel.app/" target="_blank" class="link-demo">
            Live Demo
          </a>
        </div>
      </div>
      <!-- Card #3 -->
      <div class="card">
        <img :src="CountrindexPreview" alt="Countrindex Preview" class="card-img" />
        <div class="card-content">
          <h2 class="title">Countrindex</h2>
          <p class="subtitle">A responsive country explorer using Vue, Tailwind, and REST API.</p>
          <div class="minicards">
            <span class="minicard">Vue 3</span>
            <span class="minicard">Tailwind</span>
            <span class="minicard">REST API</span>
            <span class="minicard">TypeScript</span>
            <span class="minicard">Vite</span>
          </div>
          <a href="https://countrindex.vercel.app/" target="_blank" class="link-demo">
            Live Demo
          </a>
        </div>
      </div>
      <!-- Card #4 -->
    </div>
  </section>
</template>

<style scoped>
.card {
  @apply bg-blue-950 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]
}

.card-img {
  @apply w-full h-64 object-cover
}

.card-content {
  @apply p-6 flex flex-col gap-3
}

.title {
  @apply text-2xl font-bold
}

.subtitle {
  @apply text-blue-200 text-sm
}

.minicards {
  @apply flex flex-wrap gap-2 mt-4
}

.minicard {
  @apply bg-blue-800 text-white text-xs px-3 py-1 rounded-full
}

.link-demo {
  @apply mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm text-center font-semibold transition-colors
}
</style>

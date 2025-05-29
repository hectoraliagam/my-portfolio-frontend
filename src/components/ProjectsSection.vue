<script setup lang="ts">
import CountrindexPreview from '@/assets/projects/countrindex-preview.png'
</script>

<template>
  <section id="projects"
    class="min-h-screen flex flex-col items-center text-white gap-4 w-11/12 max-w-6xl mx-auto px-4">
    <h1 class="md:text-5xl mt-24 mb-16 font-bold text-4xl">
      MY PROJECTS
    </h1>
    <div class="grid md:grid-cols-2 gap-8 w-full mb-24">
      <div class="bg-blue-950 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
        <img :src="CountrindexPreview" alt="Countrindex Preview" class="w-full h-64 object-cover" />
        <div class="p-6 flex flex-col gap-3">
          <h2 class="text-2xl font-bold">Countrindex</h2>
          <p class="text-blue-200 text-sm">A responsive country explorer using Vue, Tailwind, and REST API.</p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="minicard">Vue 3</span>
            <span class="minicard">Tailwind</span>
            <span class="minicard">REST API</span>
            <span class="minicard">TypeScript</span>
            <span class="minicard">Vite</span>
          </div>
          <a href="https://countrindex.vercel.app" target="_blank"
            class="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm text-center font-semibold transition-colors">
            Live Demo
          </a>
        </div>
      </div>

      
    </div>
  </section>
</template>

<style scoped>
.minicard {
  @apply bg-blue-800 text-white text-xs px-3 py-1 rounded-full
}
</style>

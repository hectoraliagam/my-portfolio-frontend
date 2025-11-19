<script setup lang="ts">
import { nextTick } from 'vue';

function scrollTo(id: string) {
  nextTick(() => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

</script>

<template>
  <section id="home"
    class="min-h-screen flex flex-col justify-center items-center text-white w-11/12 max-w-6xl mx-auto px-4 gap-12">

    <!-- HEADER -->
    <div class="flex flex-wrap justify-center md:justify-center items-center text-center md:text-left gap-x-4 gap-y-2 animate-fade-in">

      <div class="flex flex-col">
        <span class="text-3xl sm:text-4xl font-light">¡Hola! Soy</span>
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold md:pt-0 sm:pt-1 pt-1.5">HECTOR ALIAGA</h1>
      </div>

      <p class="text-xl sm:text-3xl font-medium flex items-center gap-2 mt-2 md:mt-6">
        <span class="font-bold text-blue-300">FULLSTACK</span><span>developer 🚀</span>
      </p>
    </div>

    <!-- DESCRIPTION -->
    <div class="max-w-2xl md:text-left animate-fade-in delay-200">
      <h2 class="mb-2 text-xl sm:text-2xl font-semibold tracking-wide uppercase text-blue-300">Crea | Prueba | ¡Lánzalo!</h2>
      <p class="text-lg sm:text-xl text-gray-300 leading-relaxed text-pretty">
        Bienvenido a mi portafolio personal. Aquí presento mis proyectos desarrollados con tecnologías modernas como 
        <strong class="text-white">Vue 3</strong>, <strong class="text-white">TailwindCSS</strong>, 
        <strong class="text-white">FastAPI</strong>, y <strong class="text-white">PostgreSQL</strong>, 
        con un enfoque en el <span class="text-blue-100 font-semibold">diseño limpio</span>, la 
        <span class="text-blue-100 font-semibold">funcionalidad</span>, y el
        <span class="text-blue-100 font-semibold">rendimiento</span>.
      </p>
    </div>
    
    <button @click="scrollTo('projects')"
      class="bg-blue-950 px-6 py-3 rounded-full text-xl font-bold transition hover:bg-blue-900 hover:shadow-md hover:text-blue-100 animate-fade-in delay-400">
      VER PROYECTOS
    </button>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out both;
}
.animate-fade-in.delay-200 {
  animation-delay: 0.2s;
}
.animate-fade-in.delay-400 {
  animation-delay: 0.4s;
}
</style>

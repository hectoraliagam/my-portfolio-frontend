<script setup lang="ts">
import { nextTick } from 'vue';

const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'Vue 3', level: '80%' },
      { name: 'TailwindCSS', level: '85%' },
      { name: 'HTML', level: '95%' },
      { name: 'CSS', level: '90%' },
      { name: 'JavaScript (ES6+)', level: '70%' },
      { name: 'TypeScript', level: '65%' }
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', level: '70%' },
      { name: 'Express', level: '60%' },
      { name: 'FastAPI', level: '75%' },
      { name: 'PostgreSQL', level: '70%' },
      { name: 'REST APIs', level: '65%' },
    ],
  },
  {
    title: 'Others',
    items: [
      { name: 'Git', level: '80%' },
      { name: 'GitHub', level: '80%' },
      { name: 'Deployment (Vercel/Netlify)', level: '70%' },
      { name: 'Linux CLI', level: '65%' },
      { name: 'Basic web security', level: '70%' },
    ],
  },
];

function scrollTo(id: string) {
  nextTick(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
</script>

<template>
  <section id="about" class="min-h-screen w-full px-4 py-16 flex flex-col items-center text-white">
    <h1 class="text-4xl md:text-5xl font-bold mb-12 text-center mt-8">ABOUT ME</h1>
    <div
      class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl">
      <!-- SKILLS -->
      <div>
        <h2 class="text-3xl font-bold mb-6">SKILLS</h2>
        <template v-for="(category, index) in skills" :key="index">
          <h3 class="my-3 text-xl font-semibold text-blue-300">{{ category.title }}</h3>
          <ul class="flex flex-wrap gap-3 mb-6">
            <li v-for="(skill, i) in category.items" :key="i"
              class="relative px-4 py-2 rounded-full font-semibold text-sm sm:text-base text-white bg-white/10 shadow-md overflow-hidden group transition-all duration-300 hover:scale-105">
              <span class="relative z-10">{{ skill.name }}</span>
              <span
                class="absolute left-0 top-0 h-full bg-blue-500 opacity-20 z-0 transition-all duration-300 ease-in-out"
                :style="{ width: skill.level }"></span>
            </li>
          </ul>
        </template>
      </div>

      <!-- WHO AM I -->
      <div>
        <h2 class="text-3xl font-bold mb-6">WHO AM I?</h2>
        <p class="text-lg sm:text-xl leading-relaxed text-white/90 mb-8 text-pretty">
          I'm a self-taught developer from Lima, Peru, passionate about science and technology. Nearly two years ago, I
          began my journey into web development, and since then, I haven't stopped learning or building real-world
          projects. I completed two semesters at university, but due to family circumstances, I chose to pause my
          studies and focus on pursuing my goals independently. Today, I'm fully committed to continuous learning and
          turning my ambitions into reality.
        </p>

        <button @click="scrollTo('contact')"
          class="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition text-white font-semibold shadow-md hover:scale-105 active:scale-95">
          CONTACT
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

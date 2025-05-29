<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import Footer from '../components/Footer.vue'

const homeRef = ref<HTMLElement | null>(null)
const aboutRef = ref<HTMLElement | null>(null)
const projectsRef = ref<HTMLElement | null>(null)
const contactRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          history.replaceState(null, '', `/#${entry.target.id}`)
        }
      })
    },
    { threshold: 0.6 }
  )

  const targets = [
    homeRef.value,
    aboutRef.value,
    projectsRef.value,
    contactRef.value
  ]

  targets.forEach(el => el && observer.observe(el))
})

onUnmounted(() => {
  const targets = [homeRef.value, aboutRef.value, projectsRef.value, contactRef.value]
  targets.forEach(el => el && observer.unobserve(el))
})
</script>

<template>
  <Navbar />
  <div class="ocean-bg min-h-screen w-full">
    <section id="home" ref="homeRef"><HeroSection /></section>
    <section id="about" ref="aboutRef"><AboutSection /></section>
    <section id="projects" ref="projectsRef"><ProjectsSection /></section>
    <section id="contact" ref="contactRef"><ContactSection /></section>
  </div>
  <Footer />
</template>

<style scoped>
.ocean-bg {
  background: 
    radial-gradient(ellipse at center, rgba(30,64,175,0.6) 0%, transparent 70%),
    linear-gradient(to bottom, #2f79d4 0%, #1248a0 40%, #071d66 60%, #000000 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
}
</style>

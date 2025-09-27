<template>
  <div class="min-h-screen font-sans text-yellow-900 bg-gradient-to-br from-yellow-50 via-white to-yellow-100" style="font-family: 'Kanit', 'Prompt', 'Noto Sans Thai', 'Noto Sans', Arial, sans-serif;">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-yellow-200 shadow-xl">
      <div class="container mx-auto px-6 py-2 flex items-center justify-between">
        <!-- Logo & Title -->
        <NuxtLink to="/" class="flex items-center gap-4 group">
          <div class="rounded-full bg-gradient-to-tr from-yellow-400 via-yellow-200 to-white border-4 border-yellow-500 shadow-xl p-1 transition-transform duration-300 group-hover:scale-110">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Logo_Rajabhat_Sisaket_University.png"
              alt="SSKRU Logo"
              class="w-14 h-14 object-contain drop-shadow-lg"
              @error="onLogoError"
            />
          </div>
          <div>
            <h1 class="text-3xl font-extrabold text-yellow-800 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 bg-clip-text text-transparent animate-gradient drop-shadow-lg tracking-tight">
              {{ isEnglish ? 'Clubs of Sisaket Rajabhat University' : 'ชมรมมหาวิทยาลัยราชภัฏศรีสะเกษ' }}
            </h1>
            <p class="text-xs text-yellow-700 tracking-wider font-semibold uppercase">{{ isEnglish ? 'SSKRU CLUBS' : 'SSKRU CLUBS' }}</p>
          </div>
        </NuxtLink>
        <!-- Navigation -->
        <nav class="hidden md:flex gap-6 items-center">
          <NuxtLink to="/" class="nav-link px-4 py-2 rounded-full font-semibold text-yellow-800 hover:bg-yellow-100 hover:text-yellow-900 transition shadow-sm hover:shadow-md">{{ isEnglish ? 'Home' : 'หน้าแรก' }}</NuxtLink>
          <a href="#about" class="nav-link px-4 py-2 rounded-full font-semibold text-yellow-800 hover:bg-yellow-100 hover:text-yellow-900 transition shadow-sm hover:shadow-md">{{ isEnglish ? 'About Clubs' : 'เกี่ยวกับชมรม' }}</a>
          <a href="#clubs" class="nav-link px-4 py-2 rounded-full font-semibold text-yellow-800 hover:bg-yellow-100 hover:text-yellow-900 transition shadow-sm hover:shadow-md">{{ isEnglish ? 'Clubs List' : 'รายชื่อชมรม' }}</a>
          <a href="#events" class="nav-link px-4 py-2 rounded-full font-semibold text-yellow-800 hover:bg-yellow-100 hover:text-yellow-900 transition shadow-sm hover:shadow-md">{{ isEnglish ? 'Events' : 'กิจกรรม' }}</a>
          <a href="#contact" class="nav-link px-4 py-2 rounded-full font-semibold text-yellow-800 hover:bg-yellow-100 hover:text-yellow-900 transition shadow-sm hover:shadow-md">{{ isEnglish ? 'Contact' : 'ติดต่อ' }}</a>
        </nav>
        <!-- Actions -->
        <div class="flex items-center gap-2">
          <button
            class="hidden md:inline-block px-4 py-2 rounded-full border-2 border-yellow-500 text-yellow-800 font-bold bg-white/90 hover:bg-yellow-100 transition hover:scale-105 shadow-md"
            @click="toggleLanguage"
          >
            {{ isEnglish ? 'TH' : 'EN' }}
          </button>
          <button
            class="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold shadow-lg hover:from-yellow-600 hover:to-yellow-800 transition hover:scale-105 flex items-center gap-2"
            @click="showSearch = true"
          >
            <span class="material-icons text-base">search</span>
            {{ isEnglish ? 'Search' : 'ค้นหา' }}
          </button>
        </div>
      </div>
      <!-- Decorative bottom border -->
      <div class="h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 opacity-80"></div>
    </header>

    <!-- Search Modal -->
    <transition name="fade-hero-content">
      <div
        v-if="showSearch"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        @click.self="showSearch = false"
      >
        <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
          <button class="absolute top-2 right-2 text-yellow-700 hover:text-yellow-900" @click="showSearch = false">
            <span class="material-icons">close</span>
          </button>
          <h3 class="text-xl font-bold text-yellow-700 mb-4 flex items-center gap-2">
            <span class="material-icons">search</span>
            {{ isEnglish ? 'Search' : 'ค้นหา' }}
          </h3>
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="isEnglish ? 'Type to search...' : 'พิมพ์เพื่อค้นหา...'"
            class="w-full border border-yellow-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            @keyup.enter="doSearch"
          />
          <button
            class="mt-4 w-full px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold shadow hover:from-yellow-600 hover:to-yellow-800 transition hover:scale-105"
            @click="doSearch"
          >
            {{ isEnglish ? 'Search' : 'ค้นหา' }}
          </button>
          <div v-if="searchResult" class="mt-4 text-yellow-700">
            {{ searchResult }}
          </div>
        </div>
      </div>
    </transition>

    <!-- Hero -->
    <section class="h-[90vh] flex items-center hero-bg relative overflow-hidden">
      <transition-group name="fade-hero" tag="div" class="absolute inset-0 w-full h-full">
        <img
          v-for="(img, idx) in heroImages"
          v-show="heroIndex === idx"
          :key="img"
          :src="img"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          :class="{'opacity-100': heroIndex === idx, 'opacity-0': heroIndex !== idx}"
          alt="hero background"
        />
      </transition-group>
      <div class="absolute inset-0 bg-gradient-to-br from-yellow-100/70 via-white/60 to-yellow-200/70"></div>
      <div class="container mx-auto px-10 relative z-10">
        <transition name="fade-hero-content" mode="out-in">
          <div
            :key="heroIndex"
            class="max-w-3xl glass p-10 rounded-3xl shadow-2xl border border-yellow-100"
          >
            <h2 class="text-4xl md:text-5xl font-extrabold text-yellow-700 drop-shadow flex items-center gap-3 animate-fadein">
              <span class="inline-block animate-bounce">🌟</span>
              <span class="bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 bg-clip-text text-transparent animate-gradient">
                {{ isEnglish ? 'Welcome to Clubs of Sisaket Rajabhat University' : 'ยินดีต้อนรับสู่ชมรม มหาวิทยาลัยราชภัฏศรีสะเกษ' }}
              </span>
            </h2>
            <p class="mt-4 text-lg text-yellow-800 font-medium animate-fadein delay-200">
              {{ isEnglish
                ? 'Empowering creativity, developing student potential — Great activities for everyone'
                : 'รวมพลังสร้างสรรค์ พัฒนาศักยภาพนักศึกษา — ' }}
              <span class="text-yellow-700 font-bold animate-pulse">
                {{ isEnglish ? 'Great activities for all' : 'กิจกรรมดี ๆ เพื่อทุกคน' }}
              </span>
            </p>
            <div class="mt-8 flex gap-4">
              <a
                href="#clubs"
                class="px-6 py-3 rounded-full bg-yellow-600 text-white font-semibold shadow hover:bg-yellow-700 transition flex items-center gap-2 hover:scale-105"
                ><span class="material-icons text-lg">groups</span> {{ isEnglish ? 'View Clubs' : 'ดูรายชื่อชมรม' }}</a
              >
              <a href="#events" class="px-6 py-3 rounded-full border border-yellow-600 text-yellow-700 font-semibold hover:bg-yellow-50 transition flex items-center gap-2 hover:scale-105"
                ><span class="material-icons text-lg">event</span> {{ isEnglish ? 'Latest Events' : 'กิจกรรมล่าสุด' }}</a
              >
            </div>
          </div>
        </transition>
      </div>
    </section>

    <!-- ... (rest of your template remains unchanged) ... -->
    <!-- Quick links, Clubs, News, Footer -->
    <!-- ... -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const heroImages = [
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=60',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1600&q=60',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1600&q=60'
]
const heroIndex = ref(0)

let intervalId
onMounted(() => {
  intervalId = setInterval(() => {
    heroIndex.value = (heroIndex.value + 1) % heroImages.length
  }, 6000)
})
onBeforeUnmount(() => {
  clearInterval(intervalId)
})

// ฟังก์ชันแก้ไข error รูปโลโก้
function onLogoError(e) {
  e.target.src = 'https://via.placeholder.com/48'
}

// Language toggle
const isEnglish = ref(false)
function toggleLanguage() {
  isEnglish.value = !isEnglish.value
}

// Search modal
const showSearch = ref(false)
const searchQuery = ref('')
const searchResult = ref('')

function doSearch() {
  // ตัวอย่างการค้นหา (mock)
  if (!searchQuery.value.trim()) {
    searchResult.value = isEnglish.value ? 'Please enter a search term.' : 'กรุณากรอกคำค้นหา'
    return
  }
  searchResult.value = isEnglish.value
    ? `No results found for "${searchQuery.value}".`
    : `ไม่พบผลลัพธ์สำหรับ "${searchQuery.value}"`
}
</script>

<template>
  <div class="min-h-screen font-sans text-yellow-900 bg-gradient-to-br from-yellow-50 via-white to-yellow-100" style="font-family: 'Kanit', 'Prompt', 'Noto Sans Thai', 'Noto Sans', Arial, sans-serif;">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-yellow-200 shadow-xl">
      <div class="container mx-auto px-6 py-2 flex items-center justify-between">
        <!-- Logo & Title -->
        <NuxtLink to="/" class="flex items-center gap-4 group">
          <div class="rounded-full bg-gradient-to-tr from-yellow-400 via-yellow-200 to-white border-4 border-yellow-500 shadow-xl p-1 transition-transform duration-300 group-hover:scale-110">
            <img
              src="/images/logo.gif"
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
        <nav class="hidden md:flex items-center text-sm lg:text-base font-medium space-x-5 lg:space-x-7">
  <NuxtLink to="/" class="hover:text-yellow-500 text-yellow-700 transition-colors">
    Home
  </NuxtLink>

  <!-- About -->
  <div class="relative group">
    <NuxtLink to="/about" class="hover:text-yellow-500 text-yellow-700 transition-colors">
      เกี่ยวกับ
    </NuxtLink>
    <div
      class="absolute left-0 mt-3 w-56 bg-white border border-yellow-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200"
    >
      <NuxtLink to="/about/mission" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">พันธกิจ</NuxtLink>
      <NuxtLink to="/about/philosophy" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">ปรัชญา</NuxtLink>
      <NuxtLink to="/about/policy" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">นโยบาย</NuxtLink>
      <NuxtLink to="/about/staff" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">บุคลากร</NuxtLink>
      <NuxtLink to="/about/structure" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">โครงสร้างการบริหาร</NuxtLink>
      <NuxtLink to="/about/vision" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">วิสัยทัศน์</NuxtLink>
    </div>
  </div>

  <!-- Departments -->
  <div class="relative group">
    <NuxtLink to="/departments" class="hover:text-yellow-500 text-yellow-700 transition-colors">
      ฝ่ายงาน
    </NuxtLink>
    <div
      class="absolute left-0 mt-3 w-64 bg-white border border-yellow-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200"
    >
      <NuxtLink to="/departments/activities" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">ฝ่ายกิจกรรมนักศึกษา กีฬาและนันทนาการ</NuxtLink>
      <NuxtLink to="/departments/discipline" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">ฝ่ายวินัยและพัฒนานักศึกษา</NuxtLink>
      <NuxtLink to="/departments/general" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">ฝ่ายบริหารงานทั่วไป</NuxtLink>
      <NuxtLink to="/departments/scholarship" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">ฝ่ายทุนการศึกษาและแนะแนว</NuxtLink>
      <NuxtLink to="/departments/welfare" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">ฝ่ายบริการ สวัสดิการ และให้คำปรึกษา</NuxtLink>
    </div>
  </div>

  <!-- News -->
  <div class="relative group">
    <NuxtLink to="/news" class="hover:text-yellow-500 text-yellow-700 transition-colors">
      ข่าวสาร
    </NuxtLink>
    <div
      class="absolute left-0 mt-3 w-56 bg-white border border-yellow-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200"
    >
      <NuxtLink to="/news/category/education" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">หมวดทั่วไป1</NuxtLink>
      <NuxtLink to="/news/category/etc" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">หมวดทั่วไป2</NuxtLink>
      <NuxtLink to="/news/category/general" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">หมวดทั่วไป3</NuxtLink>
      <NuxtLink to="/news/category/sports" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">หมวดทั่วไป4</NuxtLink>
      <NuxtLink to="/news/event-calendar" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">ปฏิทินกิจกรรม</NuxtLink>
      <NuxtLink to="/news/[id]" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">ข่าวสาร</NuxtLink>
    </div>
  </div>

  <!-- Systems -->
  <div class="relative group">
    <NuxtLink to="/systems" class="hover:text-yellow-500 text-yellow-700 transition-colors">
      ระบบ
    </NuxtLink>
    <div
      class="absolute left-0 mt-3 w-56 bg-white border border-yellow-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200"
    >
      <NuxtLink to="/systems/activity-check" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">เช็คผลกิจกรรมชมรม</NuxtLink>
      <NuxtLink to="/systems/booking" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">จองสนามกีฬา/ห้องประชุม</NuxtLink>
      <NuxtLink to="/systems/forms" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">แบบฟอร์มดาวน์โหลด</NuxtLink>
    </div>
  </div>

  <!-- Contact -->
  <div class="relative group">
    <NuxtLink to="/contact" class="hover:text-yellow-500 text-yellow-700 transition-colors">
      ติดต่อ
    </NuxtLink>
    <div
      class="absolute left-0 mt-3 w-56 bg-white border border-yellow-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200"
    >
      <NuxtLink to="/contact/feedback" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">ข้อเสนอแนะ</NuxtLink>
      <NuxtLink to="/contact/map" class="block px-5 py-2.5 text-sm text-yellow-700 hover:bg-yellow-50">แผนที่</NuxtLink>
    </div>
  </div>
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
      
    </header>

<!-- Hero Section -->
    <section class="relative min-h-screen text-yellow-900 text-center overflow-hidden">
      <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
      </video>

      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">
          งานพัฒนานักศึกษา มหาวิทยาลัยราชภัฏศรีสะเกษ
        </h2>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 font-medium">
          พัฒนาศักยภาพนักศึกษา สู่ความเป็นบัณฑิตที่สมบูรณ์
        </p>
        <NuxtLink
          to="/systems/activity-check"
          class="bg-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-yellow-600 transition shadow-lg text-base sm:text-lg"
        >
          เช็คผลกิจกรรม
        </NuxtLink>
      </div>
    </section>

    <!-- Quick links -->
    <section class="container mx-auto px-6 py-12">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-7 rounded-2xl border border-yellow-100 shadow bg-white/90 hover:shadow-lg transition hover:-translate-y-1 duration-200 hover:scale-105 animate-fadein">
          <h3 class="font-bold text-yellow-700 text-lg flex items-center gap-2">
            <span>📢</span> ข่าวประกาศชมรม
          </h3>
          <ul class="mt-4 text-sm text-yellow-800 space-y-3">
            <li>
              <span class="font-medium">เปิดรับสมัครสมาชิกใหม่</span> —
              <span class="text-yellow-600 underline cursor-pointer hover:text-yellow-800 transition">อ่านเพิ่มเติม</span>
            </li>
            <li>ประกาศกิจกรรมประจำเดือน</li>
            <li>โครงการจิตอาสาและกิจกรรมเพื่อสังคม</li>
          </ul>
        </div>
        <div class="p-7 rounded-2xl border border-yellow-100 shadow bg-white/90 hover:shadow-lg transition hover:-translate-y-1 duration-200 hover:scale-105 animate-fadein delay-100">
          <h3 class="font-bold text-yellow-700 text-lg flex items-center gap-2">
            <span>💻</span> ระบบออนไลน์ชมรม
          </h3>
          <div class="mt-4 flex flex-col gap-3">
            <a class="p-3 rounded-lg bg-yellow-50 border border-yellow-100 hover:shadow hover:bg-yellow-100 transition cursor-pointer flex items-center gap-2 hover:scale-105"
              ><span class="material-icons text-yellow-600">person_add</span> สมัครเข้าชมรม</a
            >
            <a class="p-3 rounded-lg bg-yellow-50 border border-yellow-100 hover:shadow hover:bg-yellow-100 transition cursor-pointer flex items-center gap-2 hover:scale-105"
              ><span class="material-icons text-yellow-600">event</span> ปฏิทินกิจกรรม</a
            >
            <a class="p-3 rounded-lg bg-yellow-50 border border-yellow-100 hover:shadow hover:bg-yellow-100 transition cursor-pointer flex items-center gap-2 hover:scale-105"
              ><span class="material-icons text-yellow-600">forum</span> พูดคุยแลกเปลี่ยน</a
            >
          </div>
        </div>
        <div class="p-7 rounded-2xl border border-yellow-100 shadow bg-white/90 hover:shadow-lg transition hover:-translate-y-1 duration-200 hover:scale-105 animate-fadein delay-200">
          <h3 class="font-bold text-yellow-700 text-lg flex items-center gap-2">
            <span>📞</span> ติดต่อชมรม
          </h3>
          <p class="mt-4 text-sm text-yellow-800">
            319 ถนนราชการรถไฟ ต.โพธิ์ อ.เมือง จ.ศรีสะเกษ 33000
          </p>
          <p class="mt-3 text-sm font-medium text-yellow-700">โทร. 0-4561-1234</p>
          <div class="flex gap-3 mt-4">
            <a href="#" class="hover:text-yellow-600 transition hover:scale-125" title="Facebook"><span class="material-icons">facebook</span></a>
            <a href="#" class="hover:text-yellow-600 transition hover:scale-125" title="YouTube"><span class="material-icons">youtube</span></a>
            <a href="#" class="hover:text-yellow-600 transition hover:scale-125" title="Twitter"><span class="material-icons">twitter</span></a>
          </div>
        </div>
      </div>
    </section>

        <!-- Hero -->
    <section class="h-[100vh] flex items-center hero-bg relative overflow-hidden">
      <transition-group name="fade-hero" tag="div" class="absolute inset-0 w-full h-full">
        <img
          v-for="(img, idx) in heroImages"
          v-show="heroIndex === idx"
          :key="img"
          :src="img"
          class="absolute inset -0 w-full h-full object-cover transition-opacity duration-1000"
          :class="{'opacity-100': heroIndex === idx, 'opacity-0': heroIndex !== idx}"
          alt="hero background"
        />
      </transition-group>
      <div class="absolute inset 1  bg-gradient-to-br from-yellow-100/70 via-white/60 to-yellow-200/70"></div>
      <div class="container mx-auto px-10 relative z-10">
        <transition name="fade-hero-content" mode="out-in">
          <div
            :key="heroIndex"
            class="max-w-4xl glass p-20 rounded-3xl shadow-2xl border border-yellow-100"
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
    
    <!-- Clubs -->
    <section id="clubs" class="bg-gradient-to-r from-yellow-50 to-yellow-100 py-14">
      <div class="container mx-auto px-6">
        <h3 class="text-3xl font-bold text-yellow-700 flex items-center gap-2 animate-fadein">
          <span class="material-icons text-yellow-600">groups</span>
          รายชื่อชมรม
        </h3>
        <p class="text-base text-yellow-600 mt-2 animate-fadein delay-100">
          ชมรมต่าง ๆ ในมหาวิทยาลัยราชภัฏศรีสะเกษ
        </p>
        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div class="p-5 rounded-2xl bg-white border border-yellow-100 shadow hover:shadow-xl hover:-translate-y-1 transition flex flex-col items-center hover:scale-105 animate-fadein">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
              alt="ชมรมดนตรี"
              class="w-full h-36 object-cover rounded-lg shadow transition-transform duration-300 hover:scale-110"
            />
            <h4 class="mt-4 font-semibold text-yellow-700 animate-gradient bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">ชมรมดนตรี</h4>
            <p class="text-sm text-yellow-600">สร้างสรรค์เสียงเพลงและการแสดง</p>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-yellow-100 shadow hover:shadow-xl hover:-translate-y-1 transition flex flex-col items-center hover:scale-105 animate-fadein delay-100">
            <img
              src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
              alt="ชมรมกีฬา"
              class="w-full h-36 object-cover rounded-lg shadow transition-transform duration-300 hover:scale-110"
            />
            <h4 class="mt-4 font-semibold text-yellow-700 animate-gradient bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">ชมรมกีฬา</h4>
            <p class="text-sm text-yellow-600">ส่งเสริมสุขภาพและความสามัคคี</p>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-yellow-100 shadow hover:shadow-xl hover:-translate-y-1 transition flex flex-col items-center hover:scale-105 animate-fadein delay-200">
            <img
              src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80"
              alt="ชมรมอาสา"
              class="w-full h-36 object-cover rounded-lg shadow transition-transform duration-300 hover:scale-110"
            />
            <h4 class="mt-4 font-semibold text-yellow-700 animate-gradient bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">ชมรมอาสา</h4>
            <p class="text-sm text-yellow-600">จิตอาสาเพื่อสังคมและชุมชน</p>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-yellow-100 shadow hover:shadow-xl hover:-translate-y-1 transition flex flex-col items-center hover:scale-105 animate-fadein delay-300">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
              alt="คณะเกษตรศาสตร์"
              class="w-full h-36 object-cover rounded-lg shadow transition-transform duration-300 hover:scale-110"
            />
            <h4 class="mt-4 font-semibold text-yellow-700 animate-gradient bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">คณะเกษตรศาสตร์</h4>
            <p class="text-sm text-yellow-600">เกษตรและสิ่งแวดล้อม</p>
          </div>
        </div>
      </div>

      <section class="py-12 bg-white/70 backdrop-blur-sm text-center mt-12 rounded-xl">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold text-yellow-700 mb-6">ปฏิทินกิจกรรม</h2>
    <div class="flex justify-center">
      <iframe
  src="https://calendar.google.com/calendar/embed?src=markloveaw001%40gmail.com&ctz=Asia%2FBangkok"
  style="border:0"
  class="w-full max-w-3xl h-[500px] md:h-[600px] rounded-lg shadow"
  frameborder="0"
  scrolling="no">
</iframe>
    </div>
  </div>
</section>

    </section>

    <!-- News -->
    <section id="news" class="container mx-auto px-6 py-14">
      <h3 class="text-3xl font-bold text-yellow-700 flex items-center gap-2 animate-fadein">
        <span class="material-icons text-yellow-600">feed</span>
        ข่าวสารและประกาศ
      </h3>
      <div class="mt-8 grid md:grid-cols-3 gap-8">
        <article class="bg-white border border-yellow-100 rounded-2xl overflow-hidden shadow hover:shadow-xl hover:-translate-y-1 transition animate-fadein">
          <img
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80"
            alt="ข่าว"
            class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div class="p-6">
            <time class="text-xs text-yellow-400">22 กันยายน 2025</time>
            <h4 class="mt-3 font-bold text-yellow-700">เปิดรับสมัครนักศึกษาปีการศึกษา 2025</h4>
            <p class="mt-2 text-sm text-yellow-700">
              รายละเอียดการรับสมัครและเกณฑ์การคัดเลือก
            </p>
            <a href="#" class="mt-4 inline-block text-yellow-600 font-semibold hover:underline hover:scale-110 transition">อ่านต่อ →</a>
          </div>
        </article>
        <article class="bg-white border border-yellow-100 rounded-2xl overflow-hidden shadow hover:shadow-xl hover:-translate-y-1 transition animate-fadein delay-100">
          <img
            src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80"
            alt="ข่าว"
            class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div class="p-6">
            <time class="text-xs text-yellow-400">10 กันยายน 2025</time>
            <h4 class="mt-3 font-bold text-yellow-700">ปฏิทินการศึกษา 2025</h4>
            <p class="mt-2 text-sm text-yellow-700">
              ตารางเวลาเรียน-สอบและวันสำคัญ
            </p>
            <a href="#" class="mt-4 inline-block text-yellow-600 font-semibold hover:underline hover:scale-110 transition">อ่านต่อ →</a>
          </div>
        </article>
        <article class="bg-white border border-yellow-100 rounded-2xl overflow-hidden shadow hover:shadow-xl hover:-translate-y-1 transition animate-fadein delay-200">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
            alt="ข่าว"
            class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div class="p-6">
            <time class="text-xs text-yellow-400">1 กันยายน 2025</time>
            <h4 class="mt-3 font-bold text-yellow-700">ทุนการศึกษาสำหรับนักศึกษา</h4>
            <p class="mt-2 text-sm text-yellow-700">
              ประกาศผลและวิธีสมัครขอทุน
            </p>
            <a href="#" class="mt-4 inline-block text-yellow-600 font-semibold hover:underline hover:scale-110 transition">อ่านต่อ →</a>
          </div>
        </article>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-gradient-to-r from-yellow-700 to-yellow-900 text-yellow-100 py-12 mt-12">
      <div class="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h4 class="font-bold text-white text-lg">มหาวิทยาลัยอุบลราชธานี</h4>
          <p class="text-sm mt-3">
            85 ถนนสถลมาร์ค ต.เมืองศรีไค อ.วารินชำราบ จ.อุบลราชธานี 34190
          </p>
          <p class="text-sm mt-3">
            โทร. 0-4535-3000 | Email: webmaster@ubu.ac.th
          </p>
        </div>
        <div>
          <h4 class="font-bold text-white text-lg">เมนู</h4>
          <ul class="mt-3 text-sm text-yellow-200 space-y-2">
            <li><a href="#" class="hover:underline">หน้าแรก</a></li>
            <li><a href="#about" class="hover:underline">เกี่ยวกับ</a></li>
            <li><a href="#faculties" class="hover:underline">คณะ/วิทยาลัย</a></li>
            <li><a href="#news" class="hover:underline">ข่าวสาร</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white text-lg">ติดตาม</h4>
          <div class="flex gap-4 mt-3">
            <a href="#" class="hover:text-yellow-300 transition flex items-center gap-1 hover:scale-110"><span class="material-icons">facebook</span> Facebook</a>
            <a href="#" class="hover:text-yellow-300 transition flex items-center gap-1 hover:scale-110"><span class="material-icons">youtube</span> YouTube</a>
            <a href="#" class="hover:text-yellow-300 transition flex items-center gap-1 hover:scale-110"><span class="material-icons">twitter</span> Twitter</a>
          </div>
        </div>
      </div>
      <div class="text-center text-xs text-yellow-200 mt-10">
        &copy; 2025 มหาวิทยาลัยอุบลราชธานี — Replica for study only
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'


//เอาไฟฃ์ล์วิดีโอไว้ใน public/images/hero1.jpg', *ตัวอย่าง*
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

useHead({
  link: [
    {
      rel: "icon",
      type: "image/gif",
      href: "/images/logo.gif", // ไฟล์อยู่ใน public/images/logo.gif
    },
  ],
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;700;900&family=Prompt:wght@400;700&family=Noto+Sans+Thai:wght@400;700&display=swap');

/* ตั้ง font-family หลักสำหรับทุก element */
:root {
  --main-thai-font: 'Kanit', 'Prompt', 'Noto Sans Thai', 'Noto Sans', Arial, sans-serif;
}
html, body, .min-h-screen, .container, .glass, .nav-link, h1, h2, h3, h4, h5, h6, p, a, button, input, textarea, select, ul, li, span, div {
  font-family: var(--main-thai-font) !important;
}

.glass {
  background: rgba(255, 255, 240, 0.92);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(255, 215, 0, 0.10);
}
.container {
  padding-left: 15px;
  padding-right: 15px;
}
.material-icons {
  font-size: 1.2em;
  vertical-align: middle;
}

/* Header nav link style */
.nav-link {
  transition: all 0.2s;
  font-size: 1rem;
  letter-spacing: 0.01em;
  position: relative;
}
.nav-link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #facc15 0%, #fde68a 100%);
  transition: width .3s;
  position: absolute;
  left: 0;
  bottom: 0;
}
.nav-link:hover::after {
  width: 100%;
}

/* Gradient text animation */
@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-move 6s linear infinite alternate;
}

/* Fade-in animation */
@keyframes fadein {
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: none;}
}
.animate-fadein {
  animation: fadein 1s cubic-bezier(.4,0,.2,1) both;
}
.animate-fadein.delay-100 { animation-delay: 0.1s; }
.animate-fadein.delay-200 { animation-delay: 0.2s; }
.animate-fadein.delay-300 { animation-delay: 0.3s; }

/* Hero image fade transition */
.fade-hero-enter-active, .fade-hero-leave-active {
  transition: opacity 1s;
}
.fade-hero-enter-from, .fade-hero-leave-to {
  opacity: 0;
}
.fade-hero-enter-to, .fade-hero-leave-from {
  opacity: 1;
}

/* Hero content fade transition */
.fade-hero-content-enter-active, .fade-hero-content-leave-active {
  transition: opacity 0.8s, transform 0.8s;
}
.fade-hero-content-enter-from, .fade-hero-content-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
}
.fade-hero-content-enter-to, .fade-hero-content-leave-from {
  opacity: 1;
  transform: none;
}
</style>

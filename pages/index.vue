<script setup>
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
    <!-- Header -->
    <header
      class="bg-white/80 backdrop-blur-md text-yellow-700 shadow-lg border-b border-yellow-200 sticky top-0 z-20"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 md:py-6">
        <!-- Logo -->
        <h1
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-700 tracking-tight flex items-center gap-3"
        >
          <span
            class="inline-block w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold"
          >
            S
          </span>
          SKRU
        </h1>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center text-base lg:text-lg font-semibold space-x-6 lg:space-x-8">
          <NuxtLink to="/" class="hover:text-yellow-500 text-yellow-700 transition-colors">
            Home
          </NuxtLink>
          <NuxtLink to="/test/" class="hover:text-yellow-500 text-yellow-700 transition-colors">
            test
          </NuxtLink>

          <!-- About -->
          <div class="relative group">
            <NuxtLink to="/about" class="hover:text-yellow-500 text-yellow-700 transition-colors">
              เกี่ยวกับ
            </NuxtLink>
            <div
              class="absolute left-0 mt-3 w-56 bg-white border border-yellow-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200"
            >
              <NuxtLink to="/about/mission" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">พันธกิจ</NuxtLink>
              <NuxtLink to="/about/philosophy" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">ปรัชญา</NuxtLink>
              <NuxtLink to="/about/policy" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">นโยบาย</NuxtLink>
              <NuxtLink to="/about/staff" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">บุคลากร</NuxtLink>
              <NuxtLink to="/about/structure" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">โครงสร้างการบริหาร</NuxtLink>
              <NuxtLink to="/about/vision" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">วิสัยทัศน์</NuxtLink>
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
              <NuxtLink to="/departments/activities" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">ฝ่ายกิจกรรมนักศึกษา กีฬาและนันทนาการ</NuxtLink>
              <NuxtLink to="/departments/discipline" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">ฝ่ายวินัยและพัฒนานักศึกษา</NuxtLink>
              <NuxtLink to="/departments/general" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">ฝ่ายบริหารงานทั่วไป</NuxtLink>
              <NuxtLink to="/departments/scholarship" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">ฝ่ายทุนการศึกษาและแนะแนว</NuxtLink>
              <NuxtLink to="/departments/welfare" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">ฝ่ายบริการ สวัสดิการ และให้คำปรึกษา</NuxtLink>
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
              <NuxtLink to="/news/category/education" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">หมวดทั่วไป1</NuxtLink>
              <NuxtLink to="/news/category/etc" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">หมวดทั่วไป2</NuxtLink>
              <NuxtLink to="/news/category/general" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">หมวดทั่วไป3</NuxtLink>
              <NuxtLink to="/news/category/sports" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">หมวดทั่วไป4</NuxtLink>
              <NuxtLink to="/news/event-calendar" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">ปฏิทินกิจกรรม</NuxtLink>
              <NuxtLink to="/news/[id]" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">ข่าวสาร</NuxtLink>
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
              <NuxtLink to="/systems/activity-check" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">เช็คผลกิจกรรมชมรม</NuxtLink>
              <NuxtLink to="/systems/booking" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">จองสนามกีฬา/ห้องประชุม</NuxtLink>
              <NuxtLink to="/systems/forms" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">แบบฟอร์มดาวน์โหลด</NuxtLink>
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
              <NuxtLink to="/contact/feedback" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">ข้อเสนอแนะ</NuxtLink>
              <NuxtLink to="/contact/map" class="block px-5 py-3 text-yellow-700 hover:bg-yellow-50">แผนที่</NuxtLink>
            </div>
          </div>
        </nav>
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

    <!-- Quick Links -->
    <section class="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white/90 border border-yellow-200 rounded-2xl shadow-lg p-8 text-center hover:scale-105 hover:shadow-xl transition-all duration-200">
        <div class="mb-4 flex justify-center">
          <span class="inline-block w-12 h-12 bg-yellow-400/80 rounded-full flex items-center justify-center text-white text-2xl">🎓</span>
        </div>
        <h3 class="font-bold text-2xl mb-2 text-yellow-700">ทุนการศึกษา</h3>
        <p class="text-yellow-900 mb-4">ดูข้อมูลทุนการศึกษาและการกู้ยืม</p>
        <NuxtLink to="/departments/scholarship" class="text-yellow-700 font-semibold hover:underline">ดูเพิ่มเติม</NuxtLink>
      </div>

      <div class="bg-white/90 border border-yellow-200 rounded-2xl shadow-lg p-8 text-center hover:scale-105 hover:shadow-xl transition-all duration-200">
        <div class="mb-4 flex justify-center">
          <span class="inline-block w-12 h-12 bg-yellow-400/80 rounded-full flex items-center justify-center text-white text-2xl">📰</span>
        </div>
        <h3 class="font-bold text-2xl mb-2 text-yellow-700">ข่าวสารล่าสุด</h3>
        <p class="text-yellow-900 mb-4">ติดตามข่าวและประกาศประชาสัมพันธ์</p>
        <NuxtLink to="/news" class="text-yellow-700 font-semibold hover:underline">อ่านข่าว</NuxtLink>
      </div>

      <div class="bg-white/90 border border-yellow-200 rounded-2xl shadow-lg p-8 text-center hover:scale-105 hover:shadow-xl transition-all duration-200">
        <div class="mb-4 flex justify-center">
          <span class="inline-block w-12 h-12 bg-yellow-400/80 rounded-full flex items-center justify-center text-white text-2xl">📅</span>
        </div>
        <h3 class="font-bold text-2xl mb-2 text-yellow-700">กิจกรรม</h3>
        <p class="text-yellow-900 mb-4">ดูปฏิทินกิจกรรมและผลกิจกรรม</p>
        <NuxtLink to="/news/event-calendar" class="text-yellow-700 font-semibold hover:underline">ดูปฏิทิน</NuxtLink>
      </div>
    </section>

    <!-- News Highlight -->
    <section class="bg-yellow-50 py-14 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-yellow-700">ข่าว / กิจกรรมล่าสุด</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white border border-yellow-100 rounded-2xl shadow-lg p-6 hover:scale-105 transition-all duration-200">
            <img src="https://placehold.co/400x250?text=กิจกรรมเปิดบ้าน" alt="news" class="rounded-lg mb-4 object-cover w-full h-40" />
            <h3 class="font-semibold mb-2 text-yellow-700 text-lg">กิจกรรมเปิดบ้าน SSKRU</h3>
            <p class="text-yellow-900 text-sm mb-3">เมื่อวันที่ 10 สิงหาคม 2568</p>
            <NuxtLink to="/news/1" class="text-yellow-700 font-semibold hover:underline">อ่านเพิ่มเติม</NuxtLink>
          </div>
          <div class="bg-white border border-yellow-100 rounded-2xl shadow-lg p-6 hover:scale-105 transition-all duration-200">
            <img src="https://placehold.co/400x250?text=ทุนการศึกษา" alt="news" class="rounded-lg mb-4 object-cover w-full h-40" />
            <h3 class="font-semibold mb-2 text-yellow-700 text-lg">ทุนการศึกษาพระราชทาน</h3>
            <p class="text-yellow-900 text-sm mb-3">เปิดรับสมัครถึง 30 กันยายน</p>
            <NuxtLink to="/news/2" class="text-yellow-700 font-semibold hover:underline">อ่านเพิ่มเติม</NuxtLink>
          </div>
          <div class="bg-white border border-yellow-100 rounded-2xl shadow-lg p-6 hover:scale-105 transition-all duration-200">
            <img src="https://placehold.co/400x250?text=กีฬาเพื่อสุขภาพ" alt="news" class="rounded-lg mb-4 object-cover w-full h-40" />
            <h3 class="font-semibold mb-2 text-yellow-700 text-lg">โครงการกีฬาเพื่อสุขภาพ</h3>
            <p class="text-yellow-900 text-sm mb-3">ร่วมกิจกรรมเพื่อสุขภาพประจำสัปดาห์</p>
            <NuxtLink to="/news/3" class="text-yellow-700 font-semibold hover:underline">อ่านเพิ่มเติม</NuxtLink>
          </div>
        </div>
      </div>

      <!-- Calendar -->
      <section class="py-20 bg-white/70 backdrop-blur-sm text-center mt-12 rounded-xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-yellow-700 mb-6">ปฏิทินกิจกรรม</h2>
          <div class="flex justify-center">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=markloveaw001%40gmail.com&ctz=Asia%2FBangkok"
              style="border:0"
              class="w-full h-[500px] md:h-[600px] rounded-lg shadow"
              frameborder="0"
              scrolling="no">
            </iframe>
          </div>
        </div>
      </section>
    </section>

    <!-- Footer -->
    <footer class="bg-yellow-100 text-yellow-900 pt-14 pb-6 mt-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Logo + Address -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img src="/images/logo.gif" alt="SSKRU Logo" class="h-12" />
            <h2 class="text-xl sm:text-2xl font-bold text-yellow-600">SSKRU</h2>
          </div>
          <p class="mb-3 flex items-center gap-2">📞 (+66) – 045 – 643 – 600 – 5</p>
          <p class="mb-3 flex items-center gap-2">📍 มรภ.ศรีสะเกษ 319 ถนนไทยพันทา ต.โพธิ์ อ.เมือง จ.ศรีสะเกษ 33000</p>
          <p class="mb-3 flex items-center gap-2">✉️ webmaster@sskru.ac.th</p>
        </div>

        <!-- Social & Extra Info -->
        <div class="space-y-3">
          <div class="flex gap-5 text-xl">
            <a href="#" class="hover:text-yellow-500 text-yellow-700">🌐</a>
            <a href="#" class="hover:text-yellow-500 text-yellow-700">🐦</a>
            <a href="#" class="hover:text-yellow-500 text-yellow-700">📸</a>
            <a href="#" class="hover:text-yellow-500 text-yellow-700">📌</a>
          </div>
          <p class="flex items-center gap-2">📞 (+66) – 045 – 617 – 984</p>
          <p class="flex items-center gap-2">© 2025 All Rights Reserved.</p>
          <p class="flex items-center gap-2">👨‍💻 Designed by ARIT IT Team</p>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col items-start gap-4">
          <NuxtLink
            to="/contact"
            class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-3 rounded-md shadow-md transition"
          >
            📞 ติดต่อ SSKRU
          </NuxtLink>
          <a
            href="https://facebook.com"
            target="_blank"
            class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-3 rounded-md shadow-md transition"
          >
            📘 ติดตาม Facebook
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}
</style>

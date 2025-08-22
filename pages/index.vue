<script setup>
</script>
<template>
  <div>
    <template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
    <!-- Header -->
    <header class="bg-white/80 backdrop-blur-md text-yellow-700 shadow-lg border-b border-yellow-200 sticky top-0 z-20">
  <div class="container mx-auto flex justify-between items-center py-4 px-6">
    <h1 class="text-3xl font-extrabold text-yellow-700 tracking-tight flex items-center gap-2">
      <span class="inline-block w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">S</span>
      SKRU
    </h1>
    <nav class="space-x-6 hidden md:flex items-center">
      <NuxtLink to="/" class="hover:text-yellow-500 text-yellow-700 transition-colors font-medium">
          Home
        </NuxtLink>
      <div class="relative group">
        <NuxtLink to="/about" class="hover:text-yellow-500 text-yellow-700 transition-colors font-medium">
          เกี่ยวกับ
        </NuxtLink>
        <!-- เมนูย่อย -->
        <div class="absolute left-0 mt-2 w-48 bg-white border border-yellow-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
          <NuxtLink to="/about/mission" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">สวัสดิการนักศึกษา</NuxtLink>
          <NuxtLink to="/about/philosophy" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">กิจกรรมนักศึกษา</NuxtLink>
          <NuxtLink to="/about/policy" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">สวัสดิการนักศึกษา</NuxtLink>
          <NuxtLink to="/about/staff" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">กิจกรรมนักศึกษา</NuxtLink>
          <NuxtLink to="/about/structure" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">สวัสดิการนักศึกษา</NuxtLink>
          <NuxtLink to="/about/vision" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">กิจกรรมนักศึกษา</NuxtLink>
        </div>
      </div>
      <div class="relative group">
        <NuxtLink to="/departments" class="hover:text-yellow-500 text-yellow-700 transition-colors font-medium">
          ฝ่ายงาน
        </NuxtLink>
        <!-- เมนูย่อย -->
        <div class="absolute left-0 mt-2 w-48 bg-white border border-yellow-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
          <NuxtLink to="/departments/activities" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">ฝ่ายกิจกรรมนักศึกษา กีฬาและนันทนาการ</NuxtLink>
          <NuxtLink to="/departments/discipline" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">ฝ่ายวินัยและพัฒนานักศึกษา</NuxtLink>
          <NuxtLink to="/departments/general" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">ฝ่ายบริหารงานทั่วไป</NuxtLink>
          <NuxtLink to="/departments/scholarship" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">ฝ่ายทุนการศึกษาและแนะแนว</NuxtLink>
          <NuxtLink to="/departments/welfare" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">ฝ่ายบริการ สวัสดิการ และให้คำปรึกษา</NuxtLink>
        </div>
      </div>
      <div class="relative group">
        <NuxtLink to="/departments" class="hover:text-yellow-500 text-yellow-700 transition-colors font-medium">
          ข่าวสาร
        </NuxtLink>
        <!-- เมนูย่อย -->
        <div class="absolute left-0 mt-2 w-48 bg-white border border-yellow-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
          <NuxtLink to="/news/category/education" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">หมวดทั่วไป1</NuxtLink>
          <NuxtLink to="/news/category/etc" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">หมวดทั่วไป2</NuxtLink>
          <NuxtLink to="/news/category/general" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">หมวดทั่วไป3</NuxtLink>
          <NuxtLink to="/news/category/sports" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">หมวดทั่วไป4</NuxtLink>
          <NuxtLink to="/news/[id]" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">หมวดข่าวจากเพจ</NuxtLink>
          <NuxtLink to="/news/event-calendar" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">ปฏิทินกิจกรรม</NuxtLink>
        </div>
      </div>
      <div class="relative group">
        <NuxtLink to="/departments" class="hover:text-yellow-500 text-yellow-700 transition-colors font-medium">
          ระบบ
        </NuxtLink>
        <!-- เมนูย่อย -->
        <div class="absolute left-0 mt-2 w-48 bg-white border border-yellow-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
          <NuxtLink to="/systems/activity-check" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">เช็คผลกิจกรรมชมรม</NuxtLink>
          <NuxtLink to="/systems/booking" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">จองสนามกีฬา/ห้องประชุม</NuxtLink>
          <NuxtLink to="/systems/forms" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">แบบฟอร์มดาวน์โหลด</NuxtLink>
        </div>
      </div>
      <div class="relative group">
        <NuxtLink to="/departments" class="hover:text-yellow-500 text-yellow-700 transition-colors font-medium">
          ติดต่อ  
        </NuxtLink>
        <!-- เมนูย่อย -->
        <div class="absolute left-0 mt-2 w-48 bg-white border border-yellow-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
          <NuxtLink to="/contact/feedback" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">ข้อเสนอแนะ</NuxtLink>
          <NuxtLink to="/contact/map" class="block px-4 py-2 text-yellow-700 hover:bg-yellow-50">แผ่นที่</NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</header>


    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-yellow-400/80 via-yellow-200/80 to-yellow-100/80 text-yellow-900 py-20 text-center relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1440 320" fill="none">
          <path fill="#FDE68A" fill-opacity="0.3" d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <h2 class="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg font-sans">งานพัฒนานักศึกษา มหาวิทยาลัยราชภัฏศรีสะเกษ</h2>
      <p class="text-xl md:text-2xl mb-8 font-medium">พัฒนาศักยภาพนักศึกษา สู่ความเป็นบัณฑิตที่สมบูรณ์</p>
      <NuxtLink
        to="/systems/activity-check"
        class="bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition shadow-lg text-lg"
      >
        เช็คผลกิจกรรม
      </NuxtLink>
    </section>

    <!-- Quick Links -->
    <section class="container mx-auto py-14 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white/90 border border-yellow-200 rounded-2xl shadow-lg p-8 text-center hover:scale-105 hover:shadow-xl transition-all duration-200">
        <div class="mb-4 flex justify-center">
          <span class="inline-block w-12 h-12 bg-yellow-400/80 rounded-full flex items-center justify-center text-white text-2xl">
            🎓
          </span>
        </div>
        <h3 class="font-bold text-2xl mb-2 text-yellow-700">ทุนการศึกษา</h3>
        <p class="text-yellow-900 mb-4">ดูข้อมูลทุนการศึกษาและการกู้ยืม</p>
        <NuxtLink to="/departments/scholarship" class="text-yellow-700 font-semibold hover:underline">ดูเพิ่มเติม</NuxtLink>
      </div>
      <div class="bg-white/90 border border-yellow-200 rounded-2xl shadow-lg p-8 text-center hover:scale-105 hover:shadow-xl transition-all duration-200">
        <div class="mb-4 flex justify-center">
          <span class="inline-block w-12 h-12 bg-yellow-400/80 rounded-full flex items-center justify-center text-white text-2xl">
            📰
          </span>
        </div>
        <h3 class="font-bold text-2xl mb-2 text-yellow-700">ข่าวสารล่าสุด</h3>
        <p class="text-yellow-900 mb-4">ติดตามข่าวและประกาศประชาสัมพันธ์</p>
        <NuxtLink to="/news" class="text-yellow-700 font-semibold hover:underline">อ่านข่าว</NuxtLink>
      </div>
      <div class="bg-white/90 border border-yellow-200 rounded-2xl shadow-lg p-8 text-center hover:scale-105 hover:shadow-xl transition-all duration-200">
        <div class="mb-4 flex justify-center">
          <span class="inline-block w-12 h-12 bg-yellow-400/80 rounded-full flex items-center justify-center text-white text-2xl">
            📅
          </span>
        </div>
        <h3 class="font-bold text-2xl mb-2 text-yellow-700">กิจกรรม</h3>
        <p class="text-yellow-900 mb-4">ดูปฏิทินกิจกรรมและผลกิจกรรม</p>
        <NuxtLink to="/news/event-calendar" class="text-yellow-700 font-semibold hover:underline">ดูปฏิทิน</NuxtLink>
      </div>
    </section>

    <!-- News Highlight -->
    <section class="bg-yellow-50 py-14 px-6">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-yellow-700">ข่าว / กิจกรรมล่าสุด</h2>
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
    </section>

    <!-- Footer -->
    <footer class="bg-white/80 backdrop-blur-md text-yellow-700 py-10 mt-14 border-t border-yellow-200">
      <div class="container mx-auto text-center space-y-2">
        <p class="font-medium">© 2025 สำนักงานพัฒนานักศึกษา มหาวิทยาลัยราชภัฏศรีสะเกษ</p>
        <p>ติดต่อ: <a href="mailto:sdd.sskru@gmail.com" class="underline hover:text-yellow-500">sdd.sskru@gmail.com</a> | โทร <a href="tel:0827514070" class="underline hover:text-yellow-500">082-751-4070</a></p>
      </div>
    </footer>
  </div>
</template>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Kanit', sans-serif;
}
</style>

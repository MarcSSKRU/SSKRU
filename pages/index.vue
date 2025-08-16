<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Header -->
    <header class="bg-blue-900 text-white shadow-lg">
      <div class="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 class="text-2xl font-bold">SDD.SSKRU</h1>
        <nav class="space-x-6 hidden md:flex">
          <NuxtLink to="/" class="hover:text-yellow-300">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-yellow-300">เกี่ยวกับ</NuxtLink>
          <NuxtLink to="/departments" class="hover:text-yellow-300">ฝ่ายงาน</NuxtLink>
          <NuxtLink to="/news" class="hover:text-yellow-300">ข่าวสาร</NuxtLink>
          <NuxtLink to="/systems" class="hover:text-yellow-300">ระบบ</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-yellow-300">ติดต่อ</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-4">
        สำนักพัฒนานักศึกษา มหาวิทยาลัยราชภัฏศรีสะเกษ
      </h2>
      <p class="text-lg md:text-xl mb-6">
        พัฒนาศักยภาพนักศึกษา สู่ความเป็นบัณฑิตที่สมบูรณ์
      </p>
      <NuxtLink
        to="/systems/activity-check"
        class="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
      >
        เช็คผลกิจกรรม
      </NuxtLink>
    </section>

    <!-- Quick Links -->
    <section class="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
        <h3 class="font-bold text-xl mb-2">ทุนการศึกษา</h3>
        <p class="text-gray-600 mb-4">ดูข้อมูลทุนการศึกษาและการกู้ยืม</p>
        <NuxtLink to="/departments/scholarship" class="text-blue-600 font-semibold hover:underline">ดูเพิ่มเติม</NuxtLink>
      </div>
      <div class="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
        <h3 class="font-bold text-xl mb-2">ข่าวสารล่าสุด</h3>
        <p class="text-gray-600 mb-4">ติดตามข่าวและประกาศประชาสัมพันธ์</p>
        <NuxtLink to="/news" class="text-blue-600 font-semibold hover:underline">อ่านข่าว</NuxtLink>
      </div>
      <div class="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
        <h3 class="font-bold text-xl mb-2">กิจกรรม</h3>
        <p class="text-gray-600 mb-4">ดูปฏิทินกิจกรรมและผลกิจกรรม</p>
        <NuxtLink to="/news/event-calendar" class="text-blue-600 font-semibold hover:underline">ดูปฏิทิน</NuxtLink>
      </div>
    </section>

    <!-- News Highlight -->
    <section class="bg-gray-100 py-12 px-6">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-6">ข่าว / กิจกรรมล่าสุด</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl shadow p-4">
            <img src="https://placehold.co/400x250" alt="news" class="rounded-lg mb-4" />
            <h3 class="font-semibold mb-2">กิจกรรมเปิดบ้าน SSKRU</h3>
            <p class="text-gray-600 text-sm mb-3">เมื่อวันที่ 10 สิงหาคม 2568</p>
            <NuxtLink to="/news/1" class="text-blue-600 font-semibold hover:underline">อ่านเพิ่มเติม</NuxtLink>
          </div>
          <div class="bg-white rounded-2xl shadow p-4">
            <img src="https://placehold.co/400x250" alt="news" class="rounded-lg mb-4" />
            <h3 class="font-semibold mb-2">ทุนการศึกษาพระราชทาน</h3>
            <p class="text-gray-600 text-sm mb-3">เปิดรับสมัครถึง 30 กันยายน</p>
            <NuxtLink to="/news/2" class="text-blue-600 font-semibold hover:underline">อ่านเพิ่มเติม</NuxtLink>
          </div>
          <div class="bg-white rounded-2xl shadow p-4">
            <img src="https://placehold.co/400x250" alt="news" class="rounded-lg mb-4" />
            <h3 class="font-semibold mb-2">โครงการกีฬาเพื่อสุขภาพ</h3>
            <p class="text-gray-600 text-sm mb-3">ร่วมกิจกรรมเพื่อสุขภาพประจำสัปดาห์</p>
            <NuxtLink to="/news/3" class="text-blue-600 font-semibold hover:underline">อ่านเพิ่มเติม</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-blue-900 text-white py-8 mt-12">
      <div class="container mx-auto text-center space-y-2">
        <p>© 2025 สำนักงานพัฒนานักศึกษา มหาวิทยาลัยราชภัฏศรีสะเกษ</p>
        <p>ติดต่อ: sdd.sskru@gmail.com | โทร 082-751-4070</p>
      </div>
    </footer>
  </div>
</template>

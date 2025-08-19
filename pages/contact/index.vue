<template>
  <div class="min-h-screen bg-white flex items-center justify-center py-12 px-4">
    <div class="max-w-lg w-full bg-white rounded-xl shadow-lg border border-yellow-400 p-8">
      <h1 class="text-3xl font-bold text-yellow-600 mb-6 text-center">ติดต่อเรา</h1>
      <form class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-yellow-700 mb-1">ชื่อของคุณ</label>
          <input type="text" class="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="กรอกชื่อของคุณ" />
        </div>
        <div>
          <label class="block text-sm font-medium text-yellow-700 mb-1">อีเมล</label>
          <input type="email" class="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="your@email.com" />
        </div>
        <div>
          <label class="block text-sm font-medium text-yellow-700 mb-1">ข้อความ</label>
          <textarea rows="4" class="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="พิมพ์ข้อความของคุณ"></textarea>
        </div>
        <button type="submit" class="w-full py-2 px-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 transition">
          ส่งข้อความ
        </button>
      </form>
      <div class="mt-8 flex flex-col items-center space-y-3">
        <router-link to="/contact/map" class="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition text-center">
          ดูแผนที่
        </router-link>
        <router-link to="/contact/feedback" class="w-full py-2 px-4 bg-yellow-400 text-white font-semibold rounded-lg shadow hover:bg-yellow-500 transition text-center">
          ส่งข้อเสนอแนะ
        </router-link>
      </div>
      <div class="mt-8 text-center text-yellow-700">
        <p>โทร: <span class="font-semibold">012-345-6789</span></p>
        <p>อีเมล: <span class="font-semibold">contact@sskru.ac.th</span></p>
        <p>ที่อยู่: <span class="font-semibold">มหาวิทยาลัยราชภัฏศรีสะเกษ</span></p>
      </div>
    </div>
  </div>
</template>
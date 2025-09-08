<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-yellow-100 p-8">
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-yellow-300 p-8">
      <div class="flex items-center mb-6">
        <span class="text-3xl mr-3 text-yellow-600">📢</span>
        <h1 class="text-3xl font-bold text-yellow-700">ข่าวสารมหาวิทยาลัย</h1>
      </div>
      <p class="mb-6 text-gray-700">
        คุณกำลังดูข่าวหมายเลข: <b class="text-yellow-700">{{ id }}</b>
      </p>
      <div v-if="newsItem" class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
        <h2 class="text-2xl font-semibold text-yellow-800 mb-2">{{ newsItem.title }}</h2>
        <p class="text-gray-800">{{ newsItem.content }}</p>
      </div>
      <div v-else class="text-red-600 text-center py-8">
        ❌ ไม่พบข่าวที่คุณต้องการ
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const newsData = [
  { id: 1, title: "เปิดตัวเว็บไซต์ใหม่ของมหาวิทยาลัย!", content: "เว็บไซต์ใหม่ของมหาวิทยาลัยพร้อมฟีเจอร์ข่าวสารและกิจกรรมต่าง ๆ เพื่อบริการนักศึกษาและบุคลากร." },
  { id: 2, title: "ประกาศหยุดเรียน", content: "มหาวิทยาลัยจะหยุดทำการวันที่ 20 สิงหาคม 2025 เนื่องในวันสำคัญทางศาสนา." },
  { id: 3, title: "การแข่งขันกีฬาสีประจำปี", content: "ขอเชิญชวนนักศึกษาทุกคณะเข้าร่วมการแข่งขันกีฬาสีประจำปี เริ่มต้นวันที่ 25 สิงหาคมนี้ ณ สนามกีฬามหาวิทยาลัย." },
]

const newsItem = newsData.find(item => item.id.toString() === id)
</script>

<style scoped>
body {
  background: linear-gradient(135deg, #fff, #fffbe6, #fff8dc);
}
</style>

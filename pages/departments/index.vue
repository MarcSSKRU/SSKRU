<template>
  <div class="min-h-screen bg-gradient-to-br from-white to-yellow-100 py-12 px-2">
    <h1 class="text-4xl font-extrabold text-yellow-700 mb-10 text-center drop-shadow-lg tracking-wide">ฝ่ายงานทั้งหมด</h1>
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <div
          v-for="(dept, i) in departments"
          :key="i"
          class="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center transition-transform hover:-translate-y-3 hover:shadow-yellow-300 hover:shadow-2xl"
        >
          <img
            :src="dept.img"
            :alt="dept.alt"
            class="w-32 h-32 rounded-full border-8 border-yellow-400 mb-6 object-cover shadow-lg"
          />
          <NuxtLink
            :to="dept.link"
            class="text-2xl font-bold text-yellow-700 hover:underline mb-3 text-center"
          >
            {{ dept.title }}
          </NuxtLink>
          <span class="text-gray-600 text-base text-center">{{ dept.desc }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const departments = [
  {
    img: "https://placehold.co/96x96?text=General",
    alt: "ฝ่ายบริหารงานทั่วไป",
    link: "/departments/general",
    title: "ฝ่ายบริหารงานทั่วไป",
    desc: "ใส่รูปบุคลากรฝ่ายนี้",
  },
  {
    img: "https://placehold.co/96x96?text=Activities",
    alt: "ฝ่ายกิจกรรมนักศึกษา กีฬาและนันทนาการ",
    link: "/departments/activities",
    title: "ฝ่ายกิจกรรมนักศึกษา กีฬาและนันทนาการ",
    desc: "ใส่รูปบุคลากรฝ่ายนี้",
  },
  {
    img: "https://placehold.co/96x96?text=Scholarship",
    alt: "ฝ่ายวินัยและพัฒนานักศึกษา",
    link: "/departments/discipline",
    title: "ฝ่ายทุนการศึกษา",
    desc: "ใส่รูปบุคลากรฝ่ายนี้",
  },
  {
    img: "https://placehold.co/96x96?text=Scholarship",
    alt: "ฝ่ายทุนการศึกษาและแนะแนว",
    link: "/departments/scholarship",
    title: "ฝ่ายทุนการศึกษาและแนะแนว",
    desc: "ใส่รูปบุคลากรฝ่ายนี้",
  },
  {
    img: "https://placehold.co/96x96?text=Scholarship",
    alt: "ฝ่ายบริการ สวัสดิการ และให้คำปรึกษา",
    link: "/departments/welfare",
    title: "ฝ่ายบริการ สวัสดิการ และให้คำปรึกษา",
    desc: "ใส่รูปบุคลากรฝ่ายนี้",
  },
];
</script>

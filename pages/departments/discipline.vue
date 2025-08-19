<template>
  <div class="bg-white min-h-screen py-10 px-6">
    <h1 class="text-3xl font-bold text-yellow-600 mb-8 border-b-2 border-yellow-400 pb-2">
      ฝ่ายวินัยและพัฒนานักศึกษา
    </h1>
    <ul class="space-y-6">
      <li
        class="bg-yellow-50 rounded-lg shadow p-6 border-l-4 border-yellow-400 cursor-pointer hover:bg-yellow-100"
        @click="$router.push('/departments/general/administration')"
      >
        <h2 class="text-xl font-semibold text-yellow-700 mb-2">ติดต่อ 1: งานธุรการ</h2>
        <p class="text-gray-700">ดูแลเอกสาร รับ-ส่งหนังสือราชการ และงานสารบรรณทั่วไป</p>
      </li>
      <li
        class="bg-yellow-50 rounded-lg shadow p-6 border-l-4 border-yellow-400 cursor-pointer hover:bg-yellow-100"
        @click="$router.push('/departments/general/personnel')"
      >
        <h2 class="text-xl font-semibold text-yellow-700 mb-2">ติดต่อ 2: งานบุคคล</h2>
        <p class="text-gray-700">สอบถามข้อมูลบุคลากร การลา การขอเอกสารรับรองต่างๆ</p>
      </li>
      <li
        class="bg-yellow-50 rounded-lg shadow p-6 border-l-4 border-yellow-400 cursor-pointer hover:bg-yellow-100"
        @click="$router.push('/departments/general/supplies')"
      >
        <h2 class="text-xl font-semibold text-yellow-700 mb-2">ติดต่อ 3: งานพัสดุ</h2>
        <p class="text-gray-700">สอบถามการเบิกพัสดุ การจัดซื้อจัดจ้าง และการซ่อมบำรุง</p>
      </li>
      <li
        class="bg-yellow-50 rounded-lg shadow p-6 border-l-4 border-yellow-400 cursor-pointer hover:bg-yellow-100"
        @click="$router.push('/departments/general/public-relations')"
      >
        <h2 class="text-xl font-semibold text-yellow-700 mb-2">ติดต่อ 4: งานประชาสัมพันธ์</h2>
        <p class="text-gray-700">ข้อมูลข่าวสารประชาสัมพันธ์ และกิจกรรมของฝ่าย</p>
      </li>
      <li
        class="bg-yellow-50 rounded-lg shadow p-6 border-l-4 border-yellow-400 cursor-pointer hover:bg-yellow-100"
        @click="$router.push('/contact/')"
      >
        <h2 class="text-xl font-semibold text-yellow-700 mb-2">ติดต่อ 5: ติดต่อสอบถามเพิ่มเติม</h2>
        <p class="text-gray-700">สอบถามข้อมูลเพิ่มเติมเกี่ยวกับฝ่ายบริหารงานทั่วไป</p>
      </li>
      <li
        class="bg-yellow-50 rounded-lg shadow p-6 border-l-4 border-yellow-400 cursor-pointer hover:bg-yellow-100"
        @click="$router.push('/departments/general/support')"
      >
        <h2 class="text-xl font-semibold text-yellow-700 mb-2">ติดต่อ 6: ขอรับการสนับสนุน</h2>
        <p class="text-gray-700">ขอรับการสนับสนุนหรือความช่วยเหลือจากฝ่ายบริหารงานทั่วไป</p>
      </li>
    </ul>
  </div>
</template>
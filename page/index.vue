<template>
  <div>
    <!-- Header -->
    <header style="background:#003366; color:white; padding:1rem;">
      <h1>SDD.SSKRU</h1>
      <nav>
        <ul style="display:flex; gap:1rem; list-style:none; padding:0;">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">เกี่ยวกับ</NuxtLink></li>
          <li><NuxtLink to="/departments">ฝ่ายงาน</NuxtLink></li>
          <li><NuxtLink to="/news">ข่าวสาร</NuxtLink></li>
          <li><NuxtLink to="/systems">ระบบ</NuxtLink></li>
          <li><NuxtLink to="/contact">ติดต่อ</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <section style="padding:2rem; text-align:center; background:#3366cc; color:white;">
      <h2>สำนักพัฒนานักศึกษา มหาวิทยาลัยราชภัฏศรีสะเกษ</h2>
      <p>พัฒนาศักยภาพนักศึกษา สู่ความเป็นบัณฑิตที่สมบูรณ์</p>
      <NuxtLink to="/systems/activity-check" style="background:yellow; color:black; padding:0.5rem 1rem; border-radius:8px; display:inline-block; margin-top:1rem;">
        เช็คผลกิจกรรม
      </NuxtLink>
    </section>

    <!-- Quick Links -->
    <section style="padding:2rem; display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:1rem;">
      <div style="border:1px solid #ddd; padding:1rem; text-align:center;">
        <h3>ทุนการศึกษา</h3>
        <p>ดูข้อมูลทุนการศึกษาและการกู้ยืม</p>
        <NuxtLink to="/departments/scholarship">ดูเพิ่มเติม</NuxtLink>
      </div>
      <div style="border:1px solid #ddd; padding:1rem; text-align:center;">
        <h3>ข่าวสารล่าสุด</h3>
        <p>ติดตามข่าวและประกาศประชาสัมพันธ์</p>
        <NuxtLink to="/news">อ่านข่าว</NuxtLink>
      </div>
      <div style="border:1px solid #ddd; padding:1rem; text-align:center;">
        <h3>กิจกรรม</h3>
        <p>ดูปฏิทินกิจกรรมและผลกิจกรรม</p>
        <NuxtLink to="/news/event-calendar">ดูปฏิทิน</NuxtLink>
      </div>
    </section>

    <!-- News Highlight -->
    <section style="padding:2rem; background:#f9f9f9;">
      <h2>ข่าว / กิจกรรมล่าสุด</h2>
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:1rem; margin-top:1rem;">
        <div style="border:1px solid #ddd; padding:1rem;">
          <h3>กิจกรรมเปิดบ้าน SSKRU</h3>
          <p>เมื่อวันที่ 10 สิงหาคม 2568</p>
          <NuxtLink to="/news/1">อ่านเพิ่มเติม</NuxtLink>
        </div>
        <div style="border:1px solid #ddd; padding:1rem;">
          <h3>ทุนการศึกษาพระราชทาน</h3>
          <p>เปิดรับสมัครถึง 30 กันยายน</p>
          <NuxtLink to="/news/2">อ่านเพิ่มเติม</NuxtLink>
        </div>
        <div style="border:1px solid #ddd; padding:1rem;">
          <h3>โครงการกีฬาเพื่อสุขภาพ</h3>
          <p>ร่วมกิจกรรมเพื่อสุขภาพประจำสัปดาห์</p>
          <NuxtLink to="/news/3">อ่านเพิ่มเติม</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer style="background:#003366; color:white; text-align:center; padding:1rem; margin-top:2rem;">
      <p>© 2025 สำนักงานพัฒนานักศึกษา มหาวิทยาลัยราชภัฏศรีสะเกษ</p>
      <p>ติดต่อ: sdd.sskru@gmail.com | โทร 082-751-4070</p>
    </footer>
  </div>
</template>

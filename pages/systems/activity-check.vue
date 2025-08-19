<template>
  <div class="activity-check-container">
    <h1 class="title">เช็คผลกิจกรรมชมรม <span class="highlight">Test</span></h1>
    <div class="card">
      <p>กรุณากรอกรหัสนักศึกษาเพื่อตรวจสอบผลกิจกรรมชมรมของคุณ</p>
      <input type="text" placeholder="รหัสนักศึกษา" class="input" />
      <button class="btn">ตรวจสอบ</button>
    </div>
  </div>
</template>

<style scoped>
.activity-check-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-family: 'Segoe UI', Arial, sans-serif;
}

.title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 24px;
}

.highlight {
  color: #3498db;
}

.card {
  background: #f9f9f9;
  padding: 32px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
  min-width: 320px;
  text-align: center;
}

.input {
  padding: 8px 12px;
  margin: 16px 0;
  border: 1px solid #bfc9d1;
  border-radius: 6px;
  width: 80%;
  font-size: 1rem;
}

.btn {
  background: #3498db;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.btn:hover {
  background: #217dbb;
}
</style>
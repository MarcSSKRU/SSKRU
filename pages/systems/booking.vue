<template>
  <div class="booking-container">
    <h1>จองสนามกีฬา/ห้องประชุม</h1>
    <form @submit.prevent="submitBooking">
      <div class="form-group">
        <label for="type">ประเภทการจอง</label>
        <select v-model="booking.type" id="type" required>
          <option value="">-- เลือก --</option>
          <option value="sport">สนามกีฬา</option>
          <option value="meeting">ห้องประชุม</option>
        </select>
      </div>
      <div class="form-group">
        <label for="place">ชื่อสนาม/ห้องประชุม</label>
        <input v-model="booking.place" id="place" type="text" required />
      </div>
      <div class="form-group">
        <label for="date">วันที่จอง</label>
        <input v-model="booking.date" id="date" type="date" required />
      </div>
      <div class="form-group">
        <label for="time">เวลาที่จอง</label>
        <input v-model="booking.time" id="time" type="time" required />
      </div>
      <div class="form-group">
        <label for="name">ชื่อผู้จอง</label>
        <input v-model="booking.name" id="name" type="text" required />
      </div>
      <button type="submit">จอง</button>
    </form>

    <h2>รายการจองล่าสุด</h2>
    <ul>
      <li v-for="(item, idx) in bookings" :key="idx">
        {{ item.type === 'sport' ? 'สนามกีฬา' : 'ห้องประชุม' }}: {{ item.place }} | {{ item.date }} {{ item.time }} | โดย {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const booking = ref({
  type: '',
  place: '',
  date: '',
  time: '',
  name: ''
})

const bookings = ref([])

function submitBooking() {
  bookings.value.unshift({ ...booking.value })
  booking.value = {
    type: '',
    place: '',
    date: '',
    time: '',
    name: ''
  }
}
</script>

<style scoped>
.booking-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input, select {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
h2 {
  margin-top: 2rem;
}
</style>
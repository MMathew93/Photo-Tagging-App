<template>
  <div class="game">
    <div class="header">
      <div class="timerDisplay">
        {{ hoursTenths }}{{ hours }}:{{ minutesTenths }}{{ minutes }}:{{ secondsTenths }}{{ seconds }}
      </div>
      <router-link to="/" tag="button">
        Quit
      </router-link>
      <router-view></router-view>
    </div>
    <img src="../assets/84732656.jpg" alt="Where is Waldo Page" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seconds: 0,
      secondsTenths: 0,
      minutesTenths: 0,
      minutes: 0,
      hoursTenths: 0,
      hours: 0,
      running: false
    };
  },
  methods: {
    stopWatch() {
      this.seconds++;
      if (this.seconds / 10 === 1) {
        this.seconds = 0;
        this.secondsTenths++;
        if (this.secondsTenths / 6 === 1) {
          this.secondsTenths = 0
          this.seconds = 0
          this.minutes++
        }
        if (this.minutes / 10 === 1) {
          this.minutes = 0;
          this.minutesTenths++;
        }
        if (this.minutesTenths / 6 === 1) {
          this.minutesTenths = 0
          this.minutes = 0
          this.hours++
        }
        if (this.hours / 10 === 1) {
          this.hours = 0;
          this.hoursTenths++;
        }
      }
    }
  },
  created: function() {
    window.setInterval(this.stopWatch, 1000);
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.timerDisplay {
  display: flex;
  justify-content: center;
}
</style>

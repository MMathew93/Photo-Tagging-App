<template>
  <div class="game">
    <div class="header">
      <div class="timerDisplay">
        {{ hoursTenths }}{{ hours }}:{{ minutesTenths }}{{ minutes }}:{{ secondsTenths }}{{ seconds }}
      </div>
      <router-link to="/" tag="button">
        Quit
      </router-link>
    </div>
     <div class="img-container">
      <img class='waldo-img' src="../assets/84732656.jpg" alt="Where is Waldo Page" @click="searchBox"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgLeft: null,
      imgTop: null,
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
          this.secondsTenths = 0;
          this.seconds = 0;
          this.minutes++;
        }
        if (this.minutes / 10 === 1) {
          this.minutes = 0;
          this.minutesTenths++;
        }
        if (this.minutesTenths / 6 === 1) {
          this.minutesTenths = 0;
          this.minutes = 0;
          this.hours++;
        }
        if (this.hours / 10 === 1) {
          this.hours = 0;
          this.hoursTenths++;
        }
      }
    },
    getPosition(e) {
      //Waldo coordinates: [ "2170px", "18px" ] [ "2212px", "57px" ]
      //Wizard coordinates:[824, 231] [894, 296px]
      //Wendy coordinates: [819, 578] [848, 605px]
      //odlaw coordinates: [ "2095px", "402px" ] [ "2131px", "443px" ]
      this.imgLeft = `${e.clientX}px`;
      this.imgTop = `${e.clientY}px`;
      console.log([this.imgLeft, this.imgTop]);
    },
    searchBox(e) {
      if (document.querySelector(".searchBox")) {
        this.removeSearchBox()
      }
      let searchBox = document.createElement("div");
      let image = document.querySelector(".img-container");
      this.imgLeft = e.clientX;
      this.imgTop = e.clientY;
      searchBox.setAttribute("class", "searchBox");
      searchBox.setAttribute(
        "style",
        `position: absolute; left: ${this.imgLeft - 50}px; top: ${this.imgTop -
          50}px; width: 100px; height: 100px; border: 5px solid black;`
      );
      image.append(searchBox)
    },
    removeSearchBox() {
      let searchBox = document.querySelector(".searchBox");
      let image = document.querySelector(".img-container");
      image.removeChild(searchBox)
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

.waldo-img {
  max-width: 100%;
  max-height: 100%;
  height: auto;
}
</style>
<template>
  <div class="container">
    <div class="hero">
      <div class="timerDisplay" ref="score">
        {{ hoursTenths }}{{ hours }}:{{ minutesTenths }}{{ minutes }}:{{
          secondsTenths
        }}{{ seconds }}
      </div>
      <img
        class="findThem"
        src="../assets/toppng.com-travel-the-world-playing-wheres-waldo-wheres-wally-and-friends-699x182.png"
        alt="Who needs to be found"
      />
      <router-link class="is-primary" to="/" tag="b-button">
        Quit
      </router-link>
    </div>
    <div class="gameBoard">
      <AddScore v-if="active" :score="this.score" />
      <div class="img-container waldo">
        <div class="foundCharacter" v-if="found"></div>
        <div class="searchBoxContainer" :style="boxPosition" v-show="box">
          <div
            class="square"
            :style="{
              border: this.notFound ? '5px solid red' : '5px solid black'
            }"
          ></div>
          <select @change="verifyPosition($event)" v-model="selected">
            <option disabled value="">Who is it?</option>
            <option v-for="option in options" :value="option" :key="option">
              {{ option }}
            </option>
          </select>
        </div>
        <img
          class="waldo-img"
          src="../assets/84732656.jpg"
          alt="Where is Waldo Page"
          @click="searchBox"
        />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import AddScore from "@/components/AddScore.vue";
const db = firebase.firestore();
export default {
  components: {
    AddScore
  },
  data() {
    return {
      options: ["Waldo", "Odlaw", "Wenda", "Wizard"],
      selected: "",
      box: false,
      notFound: false,
      found: false,
      imgLeft: null,
      imgTop: null,
      seconds: 0,
      secondsTenths: 0,
      minutesTenths: 0,
      minutes: 0,
      hoursTenths: 0,
      hours: 0,
      active: false,
      interval: null,
      score: null
    };
  },
  computed: {
    boxPosition() {
      return {
        "--left-position": this.imgLeft + "px",
        "--top-position": this.imgTop + "px"
      };
    }
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
    verifyPosition(event) {
      this.selected = event.target.value;
      let charactersRef = db.collection("characterLocations");
      charactersRef.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.data().characters.some(x => {
            if (
              x.name === this.selected.toLowerCase() &&
              x.x <= this.imgLeft + 20 &&
              x.x >= this.imgLeft - 20 &&
              x.y <= this.imgTop + 20 &&
              x.y >= this.imgTop - 20
            ) {
              this.options = this.options.filter(x => x !== this.selected);
              this.notFound = false;
              this.box = false;
              this.selected = "";
              this.found = !false;
              this.render;
            } else {
              this.notFound = true;
            }
          });
          this.selected = "";
        });
        this.gameStatus();
      });
    },
    searchBox(e) {
      //need to updated position of the searchBox on mouse click position
      this.box = !false;
      this.notFound = false;
      let rect = e.target.getBoundingClientRect();
      this.imgLeft = e.clientX - rect.left - 50;
      this.imgTop = e.clientY - rect.top - 50;
      console.log(this.imgLeft, this.imgTop);
    },
    gameStatus() {
      if (this.options.length === 0) {
        clearInterval(this.interval);
        this.score = this.$refs.score.innerHTML;
        this.active = !false;
      }
    }
  },
  mounted: function() {
    this.interval = window.setInterval(this.stopWatch, 1000);
  },
  render: function(createElement) {
    return createElement("div", {
      style: {
        position: "absolute",
        width: "100px",
        height: "100px",
        left: this.imgLeft + "px",
        top: this.imgTop + "px",
        border: "5px solid green"
      }
    });
  }
};
</script>

<style scoped>
.container {
  max-width: none;
}

.hero {
  display: flex;
  flex-direction: column;
}

.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.timerDisplay {
  font-size: 50px;
  color: white;
}

.gameBoard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.img-container {
  position: relative;
}

.waldo-img {
  min-width: 100%;
  max-width: none;
}

.waldo {
  border: 25px solid;
  border-image: repeating-linear-gradient(
      45deg,
      #f00,
      #f00 40px,
      #fff 10px,
      #fff 80px
    )
    10 round;
}

.findThem {
  height: 100px;
  width: 350px;
}

.searchBoxContainer {
  display: flex;
  position: absolute;
  left: var(--left-position);
  top: var(--top-position);
}

.square {
  position: absolute;
  width: 100px;
  height: 100px;
}

select {
  position: absolute;
  left: 100px;
  height: 20px;
  background: black;
  border: none;
  color: white;
  appearance: none;
}
</style>

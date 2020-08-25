<template>
  <div class="game">
    <div class="header">
      <div class="timerDisplay">
        {{ hoursTenths }}{{ hours }}:{{ minutesTenths }}{{ minutes }}:{{
          secondsTenths
        }}{{ seconds }}
      </div>
      <router-link to="/" tag="button">
        Quit
      </router-link>
    </div>
    <div class="img-container">
      <img
        class="waldo-img"
        src="../assets/84732656.jpg"
        alt="Where is Waldo Page"
        @click="searchBox"
      />
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
    verifyPosition() {
      //Waldo coordinates: [ "2170px", "18px" ] [ "2212px", "57px" ]
      //let Wizard = [[824, 231], [894, 296]];
      //Wendy coordinates: [819, 578] [848, 605px]
      //odlaw coordinates: [ "2095px", "402px" ] [ "2131px", "443px" ]
      let mousePosition = [this.imgLeft, this.imgTop]; //864, 564, center of wizardish
      let optionValue = document.querySelector("select").value;
      let foundCharacter = document.createElement("div");
      let image = document.querySelector(".img-container");
      console.log(mousePosition[0]);
      console.log(mousePosition[1]);
      if (
        mousePosition[0] > 830 &&
        mousePosition[0] < 870 &&
        mousePosition[1] > 480 &&
        mousePosition[1] < 590
      ) {
        if (optionValue === "Wizard") {
          foundCharacter.classList.add("foundCharacter");
          foundCharacter.setAttribute("style", "left: 864px; top: 564px");
          image.append(foundCharacter);
        } else {
          console.log(optionValue);
        }
      }
    },
    searchBox(e) {
      //removes any search boxes on the image, then remakes them on a new click position
      let characters = ["Who is it?", "Waldo", "Odlaw", "Wenda", "Wizard"];
      if (document.querySelector(".searchBoxContainer")) {
        this.removeSearchBox();
      }
      let searchBoxContainer = document.createElement("div");
      let box = document.createElement("div");
      let characterOptions = document.createElement("select");
      let image = document.querySelector(".img-container");
      this.imgLeft = e.clientX;
      this.imgTop = e.clientY;
      searchBoxContainer.setAttribute("class", "searchBoxContainer");
      searchBoxContainer.setAttribute(
        "style",
        `display: flex; position: absolute; left: ${this.imgLeft -
          50}px; top: ${this.imgTop - 50}px;`
      );
      box.setAttribute("class", "box");
      box.setAttribute(
        "style",
        "width: 100px; height: 100px; border: 5px solid black;"
      );
      characterOptions.setAttribute("style", "height: 20px;");
      for (let i = 0; i < characters.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", `${characters[i]}`);
        option.innerHTML = characters[i];
        characterOptions.append(option);
      }
      searchBoxContainer.append(box);
      searchBoxContainer.append(characterOptions);
      image.append(searchBoxContainer);
      //watch for changes on dropdown and call the function
      document.querySelector("select").onchange = this.verifyPosition;
    },
    removeSearchBox() {
      let searchBoxContainer = document.querySelector(".searchBoxContainer");
      let image = document.querySelector(".img-container");
      image.removeChild(searchBoxContainer);
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

.foundCharacter {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 5px solid green;
}
</style>

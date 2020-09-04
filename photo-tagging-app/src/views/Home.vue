<template>
  <div class="hero center waldo">
    <div class="content centerFlex">
      <h1>
        Welcome to my App!
        <br />
        This is my photo tagging app game using Where's Waldo!
        <br />
        Once you hit start the timer will begin, find all of the characters as
        fast as you can!
        <br />
        If you are quick enough you may just make it onto the Hi-Score board!
        <br />
        Have fun!
      </h1>
      <div class="content">
        <router-link
          class="is-primary"
          v-if="isOnLoginPage()"
          to="/Game"
          tag="b-button"
        >
          Start Game
        </router-link>
        <router-link
          class="is-primary"
          v-if="isOnLoginPage()"
          to="/Hi-Scores"
          tag="b-button"
        >
          Hi-Scores
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isOnLoginPage() {
      return this.$route.path === "/";
    }
  }
};
</script>

<style scoped>
.center {
  justify-content: center;
  align-items: center;
}

.centerFlex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background: #f2dfd7;
}

.waldo {
  border: 50px solid;
  border-image: repeating-linear-gradient(
      45deg,
      #f00,
      #f00 40px,
      #fff 10px,
      #fff 80px
    )
    50 round;
}

.is-primary {
  margin: 10px;
}
</style>

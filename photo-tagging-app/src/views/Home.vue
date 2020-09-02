<template>
  <div class="home">
    <div class="rules">
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
      <div class="buttonBox">
        <router-link v-if="isOnLoginPage()" to="/Game" tag="button">
          Start Game
        </router-link>
        <router-link v-if="isOnLoginPage()" to="/Hi-Scores" tag="button">
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
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.rules {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(41, 40, 40);
  color: white;
  border-radius: 9px;
  padding: 10px 25px;
}

.buttonBox {
  display: flex;
  justify-content: space-between;
  width: 18%;
  height: 30px;
  margin: 15px;
}
</style>

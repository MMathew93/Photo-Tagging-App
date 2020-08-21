<template>
  <div class="Home">
    <div class="rules">
      <h1> Welcome to my App!
        <br>
        This is my photo tagging app game using Where's Waldo!
        <br>
        Once you hit start the timer will begin, find all of the characters as fast as you can!
        <br>
        If you are quick enough you may just make it onto the Hi-Score board!
        <br>
        Have fun!
      </h1>
      <div>
        <router-link v-if="isOnLoginPage()" to="/Game" tag='button'>Start Game</router-link>
        <router-link v-if="isOnLoginPage()" to="/Hi-Score" tag='button'>HI-SCORES</router-link>
        
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Home',
    methods: {
      isOnLoginPage() {
        return this.$route.path === '/'
      }
    }
  }
</script>

<style scoped>

</style>
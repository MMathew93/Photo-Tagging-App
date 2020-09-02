<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script></script>
<style>
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background: repeating-linear-gradient( 45deg, #f00, #f00 40px, #fff 10px, #fff 80px );
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: gray;
}
</style>

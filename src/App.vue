<template>
  <!-- <div id="app"> -->
    <hoge piuouo="しめじ"/>
  <!-- </div> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import hoge from './components/header.vue'

export default {
  name: 'app',
  components: {
    hoge
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

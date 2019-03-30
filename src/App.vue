<template>
  <div id="app">
    <Header msg="This is the header"/>

    <!--<img alt="Vue logo" src="./assets/logo.png">-->

    <Overview msg="Welcome to Your Vue.js App"/>

    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Overview from './components/Overview.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Header,
    Overview,
    Footer,
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
}
</style>

<template>
  <div id="app">
    <Header/>

    <!--<img alt="Vue logo" src="./assets/logo.png">-->

   
    <Tabs/>

    <Overview msg="Overview component"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Overview from './components/Overview.vue'
import Tabs from './components/Tabs.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Header,
    Overview,
    Tabs,
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

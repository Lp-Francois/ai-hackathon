<template>
  <div id="app">
    <Header/>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->

    <body>
      <Tabs class="container"/>
      <Overview msg="Overview component" class="container"/>
    
      <Firstchart/>
    </body>
    
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Overview from './components/Overview.vue'
import Tabs from './components/Tabs.vue'
import Firstchart from './components/Firstchart.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Header,
    Overview,
    Tabs,
    Footer,
    Firstchart
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

body {
  background-color: #ECF0F3;
}

</style>

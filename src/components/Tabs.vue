<template>
    <b-tabs type="is-toggle" class="tabs-1" expanded>
        <b-tab-item label="Pluie" icon="google-photos"></b-tab-item>
        <b-tab-item label="Temperature" icon="library-music"></b-tab-item>
        <b-tab-item label="Soleil" icon="video"></b-tab-item>
    </b-tabs>
</template>
  
<script>
export default {
  name: 'Tabs',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tabs-1 {
    margin-top: 100px;
  }


</style>

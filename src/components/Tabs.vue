<template>
    <b-tabs type="is-toggle" class="tabs-1" expanded>
        <b-tab-item label="Pluie" icon="google-photos">
          <b-icon
                icon="account"
                size="is-small">
          </b-icon>
          <h3>lroem</h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi provident eveniet nesciunt sint quas labore debitis atque nam amet eum dicta aperiam exercitationem, voluptate temporibus nostrum, reprehenderit at ducimus repellendus!
        </b-tab-item>
        <b-tab-item label="Temperature" icon="library-music">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, neque. Reprehenderit, sit modi rerum? Ea, odio, 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur odio, atque ipsa repellat expedita nostrum, minima voluptatibus, ut illum mollitia reiciendis laudantium voluptates. Labore consequatur, illo distinctio magnam ea nihil.
          voluptatibus esse iusto doloribus quas vel, vitae modi dicta accusamus nostrum corporis dolorum ut.
        </b-tab-item>
        <b-tab-item label="Huumidité" icon="video">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laborum placeat temporibus recusandae corrupti laboriosam debitis adipisci quos deserunt, veniam aperiam nemo, quis quibusdam aut. Dicta provident, doloribus architecto eveniet.
        </b-tab-item>
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
    background-color: white;
  }


</style>

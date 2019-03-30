<template>
    <b-tabs type="is-toggle" class="tabs-1" expanded>
        <b-tab-item label="Pluie" icon="cloud-sun-rain ">
          <table class="table">
            <tbody>
              <tr>
                <th>API-AGRO</th>
                <td>98%</td>
              </tr>
              <tr>
                <th>Open Weather Maps</th>
                <td>68%</td>
              </tr>
              <tr>
                <th>Open Weather Maps</th>
                <td>68%</td>
              </tr>
              <tr>
                <th>Open Weather Maps</th>
                <td>68%</td>
              </tr>
            </tbody>
          </table>
        </b-tab-item>
        <b-tab-item label="Temperature" icon="library-music">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, neque. Reprehenderit, sit modi rerum? Ea, odio, 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur odio, atque ipsa repellat expedita nostrum, minima voluptatibus, ut illum mollitia reiciendis laudantium voluptates. Labore consequatur, illo distinctio magnam ea nihil.
          voluptatibus esse iusto doloribus quas vel, vitae modi dicta accusamus nostrum corporis dolorum ut.
        </b-tab-item>
        <b-tab-item label="Humidité" icon="humidity">
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

  td {
    float: right;
  }

  .table {
    width: 100%;
  }

  .tabs.is-toggle li.is-active a {
    background-color: #00d1b2;
    border-color: #00d1b2;
  }

</style>

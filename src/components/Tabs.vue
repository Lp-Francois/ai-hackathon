<template>
  <div>
     <b-tabs type="is-medium" class="block tabs-1" expanded>
        <b-tab-item label="Global">
          <table class="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th class="left">Fiabilité</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="element of elements.global">
                <th>{{ element.name }}</th>
                <td>{{ element.fiability }} %</td>
              </tr>
            </tbody>
          </table>
        </b-tab-item>
        <b-tab-item label="Pluie">
          <table class="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th class="left">Fiabilité</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="element of elements.precipitation">
                <th>{{ element.name }}</th>
                <td>{{ element.fiability }} %</td>
              </tr>
            </tbody>
          </table>
        </b-tab-item>
        <b-tab-item label="Temperature">
          <table class="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th class="left">Fiabilité</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="element of elements.humidity">
                <th>{{ element.name }}</th>
                <td>{{ element.fiability }} %</td>
              </tr>
            </tbody>
          </table>
        </b-tab-item>
        <b-tab-item label="Humidité">
          <table class="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th class="left">Fiabilité</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="element of elements.temperature">
                <th>{{ element.name }}</th>
                <td>{{ element.fiability }} %</td>
              </tr>
            </tbody>
          </table>
        </b-tab-item>
    </b-tabs>
    <!--
    <ul>
      <li v-for="element of elements">
        <h2>{{ element }}</h2>
      </li>
    </ul> -->
  </div>
  
</template>
  
<script>
import axios from 'axios';

// https://2h0snxxpa9.execute-api.eu-west-3.amazonaws.com/v1/meteo/graphe

export default {
  name: 'Tabs',
  data () {
    return  {
      elements: []
    }
  },
  created() {
    axios.get(`https://2h0snxxpa9.execute-api.eu-west-3.amazonaws.com/v1/meteo`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.elements = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
}
</script>

<style scoped>
  .tabs-1 {
    margin-top: 2rem;
    background-color: white;
  }

  .table {
    width: 100%;
  }

  .table th, .table td {
    text-align: center;
  }
</style>

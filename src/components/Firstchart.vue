<template>
  <section class="container chart-1">
    <line-chart v-if="loaded" :datacollection="datacollection" :options="options"></line-chart>
  </section>
</template>

<script>
import LineChart from '@/components/charts/LineChart'
import axios from 'axios';

// https://2h0snxxpa9.execute-api.eu-west-3.amazonaws.com/v1/meteo/graphe


export default {
    name: 'VueChartJS',
    components: {
      LineChart
    },

    data () {
      return {
        loaded: false,
        datafetch: null,
        elements: null,
        datacollection: {
          //Data to be represented on x-axis
          //labels: ['2019-02-28', '2019-03-01', '2019-03-03', '2019-03-04', '2019-03-05', '2019-03-06', '2019-03-07'],
          labels: null,
          //elements.temperature.x,
          datasets: [
            {
              label: 'y_api_agro',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              fill: false,
              //Data to be represented on y-axis
              //data: [40, 20, 30, 50, 90, 10, 20]
              data: null
            },
            
          ]
        },
        options: {
          scales: {
            yAxes: [{
            ticks: {
                beginAtZero: true
              },
              gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
          legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  },

  /*
  async mounted () {
    this.loaded = false
      try {
        const { data } = await fetch('https://2h0snxxpa9.execute-api.eu-west-3.amazonaws.com/v1/meteo/graphe')
        console.log('hey')
        this.datafetch = data
        this.elements = this.test.temperature
        this.loaded = true
      } catch (e) {
        console.error(e)
      }
  }, */

 
   async mounted() {
    axios.get(`https://2h0snxxpa9.execute-api.eu-west-3.amazonaws.com/v1/meteo/graphe`)
    .then(response => {
      this.elements = response.data.temperature
      this.labels = response.data.temperature.x

      this.datacollection.datasets.data = this.elements.y_api_agro
 
      this.loaded = true
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
}

/*
export default {
  name: 'Tabs',
  data () {
    return  {
      datacollection: []
    }
  },
  created() {
    axios.get(`https://2h0snxxpa9.execute-api.eu-west-3.amazonaws.com/v1/meteo`)
    .then(response => {
      this.elements = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
}
*/
</script>

<style scoped>
  .chart-1 {
    margin-top: 100px;
  }
</style>
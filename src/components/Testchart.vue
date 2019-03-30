<template>
  <div class="container chart-1">
    <line-chart
      v-if="loaded"
      :datacollection="datacollection"
      :options="options"/>
  </div>
</template>

<script>
import LineChart from '@/components/charts/LineChart'

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    fetchapi: null,
    datacollection: {
          labels: null,
          //elements.temperature.x,
          datasets: [
            {
              // YES I know it is pretty ugly but I am so tired and we need to finish it before tomorow...
          // TO DO fix this ugliness...
              label: 'y_api_agro',
              backgroundColor: 'blue',
              borderColor: 'blue',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              fill: false,
              data: null,
            },
            {
              label: 'y_dark_sky',
              backgroundColor: 'green',
              borderColor: 'green',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              fill: false,
              data: null
            },
            {
              label: 'y_infoclimat',
              backgroundColor: 'red',
              borderColor: 'red',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              fill: false,
              data: null
            },
            {
              label: 'y_meteo_concept',
              backgroundColor: 'brown',
              borderColor: 'brown',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              fill: false,
              data: null
            },
            {
              label: 'y_weatherbit',
              backgroundColor: 'black',
              borderColor: 'black',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              fill: false,
              data: null
            },
            {
              label: 'y_wunderground',
              backgroundColor: '#f87979',
              borderColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              fill: false,
              data: null
            }
          ]
        },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Fiabilité de la Température au cours du temps'
        },
        legend: {
          position: 'bottom'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Temps'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Erreur'
            }
          }]
        }
      }
  }),

  async mounted () {
    this.loaded = false
      try {
        const { temperature } = await fetch('https://2h0snxxpa9.execute-api.eu-west-3.amazonaws.com/v1/meteo/graphe').then(function (response) {
            return response.json();
          })
        this.fetchapi = temperature
        //second time
        // YES I know it is pretty ugly but I am so tired and we need to finish it before tomorow...
        // TO DO fix this ugliness...
        this.datacollection.labels = this.fetchapi.x
        this.datacollection.datasets[0].data = this.fetchapi.y_api_agro
        this.datacollection.datasets[1].data = this.fetchapi.y_y_dark_sky
        this.datacollection.datasets[2].data = this.fetchapi.y_infoclimat
        this.datacollection.datasets[3].data = this.fetchapi.y_meteo_concept
        this.datacollection.datasets[4].data = this.fetchapi.y_weatherbit
        this.datacollection.datasets[5].data = this.fetchapi.y_wunderground

        this.loaded = true
      } catch (e) {
        //console.error(e)
      }
  }
}
</script>

<style scoped>
  .chart-1 {
    margin-top: 100px;
  }
</style>
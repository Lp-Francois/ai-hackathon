<template>
  <section class="container chart-1">
    <line-chart :datacollection="datacollection" :options="options"></line-chart>
  </section>
</template>

<script>
import LineChart from '@/components/charts/LineChart'

export default {
    name: 'VueChartJS',
    components: {
      LineChart
    },

    data () {
    return {
      datacollection: {
        //Data to be represented on x-axis
      labels: ['2019-02-28', '2019-03-01', '2019-03-03', '2019-03-04', '2019-03-05', '2019-03-06', '2019-03-07'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          fill: false,
          //Data to be represented on y-axis
          data: [40, 20, 30, 50, 90, 10, 20]
        }
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
}
}
</script>

<style scoped>
  .chart-1 {
    margin-top: 100px;
  }
</style>
import { Line } from 'vue-chartjs'

//Exporting this so it can be used in other components
export default {
	extends: Line,
	props: {
    datacollection: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}


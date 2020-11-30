<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <apexcharts
      width="500"
      height="350"
      type="line"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  name: 'LineChart',
  components: {
    apexcharts: VueApexCharts
  },
  props: {
    title: String,
    times: Array,
    fromMeToGmail: Array
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: 'basic-line'
        },
        xaxis: {
          categories: this.times
        }
      },
      series: [
        {
          name: this.title,
          data: this.fromMeToGmail
        }
      ]
    }
  }
}
</script>

<style scoped>
.graph {
  flex: 1 0 41%;
  margin: 10px;
}
</style>

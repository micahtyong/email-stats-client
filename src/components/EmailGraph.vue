<template>
  <div>
    Hi there
    <line-chart v-if="loaded" :chartdata="chartdata" />
  </div>
</template>

<script>
import LineChart from './LineChart.js'

export default {
  components: {
    LineChart
  },
  name: 'EmailGraph',
  data: () => ({
    loaded: false, // initialize to false when you have api data
    chartdata: null
  }),
  async mounted() {
    this.loaded = false
    try {
      // const { userlist } = await fetch('/api/userlist')
      this.chartdata = {
        labels: ['9 AM', '10 AM'],
        datasets: [
          {
            label: 'Emails',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      }
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
    console.log('mounted!')
  }
}
</script>

<style scoped>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>

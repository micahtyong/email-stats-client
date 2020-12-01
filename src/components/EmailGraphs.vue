<template>
  <div class="graphs">
    <LineChart
      title="From Me to Gmail"
      :times="times"
      :fromMeToGmail="fromMeToGmail"
    />
    <LineChart
      title="From Me to Non-Gmail"
      :times="times"
      :fromMeToGmail="fromMeToNonGmail"
    />
    <LineChart
      title="To Me from Gmail"
      :times="times"
      :fromMeToGmail="toMeFromGmail"
    />
    <LineChart
      title="To Me from Non-Gmail"
      :times="times"
      :fromMeToGmail="toMeFromNonGmail"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import LineChart from './LineChart.vue'
import { rangeScan, timeConverter } from '../fetchStats.js'

export default {
  name: 'EmailGraphs',
  components: {
    LineChart
  },
  async setup() {
    // Setup and fetch
    const start = Math.floor(
      new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000).getTime() / 1000
    )
    const end = Math.floor(Date.now() / 1000)
    const gmailStats = await rangeScan('micahtyong@gmail.com', start, end)

    // Parse
    for (var i = 0; i < gmailStats.times.length; i++) {
      gmailStats.times[i] = timeConverter(gmailStats.times[i])
    }
    const times = ref(gmailStats.times)
    const fromMeToGmail = ref(gmailStats.fromMeToGmail)
    const fromMeToNonGmail = ref(gmailStats.fromMeToNonGmail)
    const toMeFromGmail = ref(gmailStats.toMeFromGmail)
    const toMeFromNonGmail = ref(gmailStats.toMeFromNonGmail)

    // Return
    return {
      times,
      fromMeToGmail,
      fromMeToNonGmail,
      toMeFromGmail,
      toMeFromNonGmail
    }
  }
}
</script>

<style scoped>
.small {
  max-width: 600px;
  margin: 150px auto;
}
.graphs {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>

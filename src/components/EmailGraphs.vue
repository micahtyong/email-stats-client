<template>
  <div class="graphs d-flex">
    <div class="graph">
      <router-link class="header" to="/graphs/from-me-to-gmail">
        <h3>{{ fmtgLabel }}</h3>
      </router-link>
      <LineChart
        :title="fmtgLabel"
        :times="times"
        :fromMeToGmail="fromMeToGmail"
        :width="width"
        :height="height"
      />
    </div>
    <div class="graph">
      <router-link class="header" to="/graphs/from-me-to-non-gmail">
        <h3>{{ fmtngLabel }}</h3>
      </router-link>
      <LineChart
        :title="fmtngLabel"
        :times="times"
        :fromMeToGmail="fromMeToNonGmail"
        :width="width"
        :height="height"
      />
    </div>
    <div class="graph">
      <router-link class="header" to="/graphs/to-me-from-gmail">
        <h3>{{ tmfgLabel }}</h3> </router-link
      ><LineChart
        :title="tmfgLabel"
        :times="times"
        :fromMeToGmail="toMeFromGmail"
        :width="width"
        :height="height"
      />
    </div>
    <div class="graph">
      <router-link class="header" to="/graphs/to-me-from-non-gmail">
        <h3>{{ tmfngLabel }}</h3>
      </router-link>
      <LineChart
        :title="tmfngLabel"
        :times="times"
        :fromMeToGmail="toMeFromNonGmail"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import LineChart from './LineChart.vue'
import { rangeScan } from '../fetchStats.js'

export default {
  name: 'EmailGraphs',
  components: {
    LineChart
  },
  async setup() {
    // Setup and fetch
    const store = useStore()
    const start = Math.floor(
      new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000).getTime() / 1000
    )
    const end = Math.floor(Date.now() / 1000)
    const gmailStats = await rangeScan('micahtyong@gmail.com', start, end)

    // Parse and commit full stats
    const fullStats = {
      times: gmailStats.times,
      fromMeToGmail: gmailStats.fromMeToGmail,
      fromMeToNonGmail: gmailStats.fromMeToNonGmail,
      toMeFromGmail: gmailStats.toMeFromGmail,
      toMeFromNonGmail: gmailStats.toMeFromNonGmail
    }
    store.commit('setStats', fullStats)

    // Return
    return {
      times: ref(gmailStats.times),
      fromMeToGmail: ref(gmailStats.fromMeToGmail),
      fromMeToNonGmail: ref(gmailStats.fromMeToNonGmail),
      toMeFromGmail: ref(gmailStats.toMeFromGmail),
      toMeFromNonGmail: ref(gmailStats.toMeFromNonGmail),
      fmtgLabel: 'From Me to Gmail',
      fmtngLabel: 'From Me to Non-Gmail',
      tmfgLabel: 'To Me from Gmail',
      tmfngLabel: 'To Me from Non-Gmail',
      width: '100%',
      height: 'auto'
    }
  }
}
</script>

<style scoped>
.graphs {
  align-items: center;
  flex-wrap: wrap;
}

.graph {
  display: inline-block;
  margin: 10px 0 0 2%;
  flex-grow: 1;
  width: calc(100% * (1 / 3) - 10px - 1px);
}
</style>

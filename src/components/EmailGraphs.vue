<template>
  <div class="graphs">
    <div>
      <router-link class="header" to="/graphs/frommetogmail">
        <h3>{{ fmtgLabel }}</h3>
      </router-link>
      <LineChart
        :title="fmtgLabel"
        :times="times"
        :fromMeToGmail="fromMeToGmail"
        width="500"
        height="350"
        route="/graphs/frommetogmail"
      />
    </div>
    <div>
      <router-link class="header" to="/graphs/frommetonongmail">
        <h3>{{ fmtngLabel }}</h3>
      </router-link>
      <LineChart
        :title="fmtngLabel"
        :times="times"
        :fromMeToGmail="fromMeToNonGmail"
        width="500"
        height="350"
      />
    </div>
    <div>
      <router-link class="header" to="/graphs/tomefromgmail">
        <h3>{{ tmfgLabel }}</h3> </router-link
      ><LineChart
        :title="tmfgLabel"
        :times="times"
        :fromMeToGmail="toMeFromGmail"
        width="500"
        height="350"
      />
    </div>
    <div>
      <router-link class="header" to="/graphs/tomefromnongmail">
        <h3>{{ tmfngLabel }}</h3>
      </router-link>
      <LineChart
        :title="tmfngLabel"
        :times="times"
        :fromMeToGmail="toMeFromNonGmail"
        width="500"
        height="350"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import LineChart from './LineChart.vue'
import { rangeScan, timeConverter } from '../fetchStats.js'

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
    store.commit('setStats', {
      times: gmailStats.times,
      fromMeToGmail: gmailStats.fromMeToGmail,
      fromMeToNonGmail: gmailStats.fromMeToNonGmail,
      toMeFromGmail: gmailStats.toMeFromGmail,
      toMeFromNonGmail: gmailStats.toMeFromNonGmail
    })
    return {
      times,
      fromMeToGmail,
      fromMeToNonGmail,
      toMeFromGmail,
      toMeFromNonGmail,
      fmtgLabel: 'From Me to Gmail',
      fmtngLabel: 'From Me to Non-Gmail',
      tmfgLabel: 'To Me from Gmail',
      tmfngLabel: 'To Me from Non-Gmail'
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

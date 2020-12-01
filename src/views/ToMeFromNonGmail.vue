<template>
  <div class="graph-enlarged">
    <Header :msg="headerText" />
    <LineChart :title="label" :times="times" :fromMeToGmail="stats" />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import LineChart from '../components/LineChart'
import { useStore } from 'vuex'

export default {
  name: 'ToMeFromNonGmail',
  components: {
    Header,
    LineChart
  },
  setup() {
    const store = useStore()
    return {
      headerText: 'To Me from Non-Gmail Accounts',
      times: store.state.times,
      stats: store.state.toMeFromNonGmail,
      label: 'To Me from Non-Gmail'
    }
  }
}
</script>

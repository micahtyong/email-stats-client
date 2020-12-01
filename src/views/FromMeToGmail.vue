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
  name: 'FromMeToGmail',
  components: {
    Header,
    LineChart
  },
  setup() {
    const store = useStore()
    return {
      headerText: 'From Me to Gmail Accounts',
      times: store.state.times,
      stats: store.state.fromMeToGmail,
      label: 'From Me to Gmail'
    }
  }
}
</script>

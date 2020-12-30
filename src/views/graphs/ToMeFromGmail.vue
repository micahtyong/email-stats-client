<template>
  <div class="graph-enlarged d-flex">
    <Header :title="headerText" :msg="descriptionText" />
    <LineChart :title="label" :times="times" :fromMeToGmail="stats" />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import LineChart from '../../components/LineChart'
import { useStore } from 'vuex'

export default {
  name: 'ToMeFromGmail',
  components: {
    Header,
    LineChart
  },
  setup() {
    const store = useStore()
    return {
      headerText: 'To Me from Gmail Accounts',
      descriptionText:
        'This detailed view shows how the number of Gmail emails sent to me changed throughout the past week.',
      times: store.state.times,
      stats: store.state.toMeFromGmail,
      label: 'To Me from Gmail'
    }
  }
}
</script>

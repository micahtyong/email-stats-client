<template>
  <div class="graph-enlarged">
    <Header :title="headerText" :msg="descriptionText" />
    <LineChart :title="label" :times="times" :fromMeToGmail="stats" />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import LineChart from '../../components/LineChart'
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
      descriptionText:
        'This detailed view shows how the number of emails sent from me to other gmail accounts changed throughout the past week.',
      times: store.state.times,
      stats: store.state.fromMeToGmail,
      label: 'From Me to Gmail'
    }
  }
}
</script>

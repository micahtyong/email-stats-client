<template>
  <Suspense>
    <template #default>
      <div>
        <img alt="Gmail logo" src="../assets/gmail.png" width="100" />
        <Header :title="headerText" :msg="descriptionText" />
        <EmailGraphs />
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script>
import Header from '../components/Header.vue'
import EmailGraphs from '../components/EmailGraphs.vue'

export default {
  name: 'Home',
  components: {
    Header,
    EmailGraphs
  },
  setup() {
    return {
      headerText: 'Gmail Stats',
      descriptionText:
        'Showing email stats for micahtyong@gmail.com from the past week. Times are shown in PDT.'
    }
  }
}
</script>

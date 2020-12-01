<template>
  <Suspense>
    <template #default>
      <div>
        <img alt="Gmail logo" src="../assets/gmail.png" width="100" />
        <Header :msg="headerText" />
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
      headerText: 'Welcome to Gmail Stats'
    }
  }
}
</script>

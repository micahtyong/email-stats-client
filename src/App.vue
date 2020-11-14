<template>
  <img alt="Gmail logo" src="./assets/gmail.png" width="100" />
  <Header v-bind:msg="headerText" />
  <div class="graphs">
    <EmailGraph />
    <EmailGraph />
    <EmailGraph />
    <EmailGraph />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import EmailGraph from './components/EmailGraph.vue'

export default {
  name: 'App',
  components: {
    Header,
    EmailGraph
  },
  data() {
    return {
      headerText: 'Welcome to Gmail Stats'
    }
  }
}
</script>

<style scoped>
.graphs {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>

<style>
#app {
  font-family: Helvetica-Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  margin-top: 60px;
  line-height: 1.4;
}
</style>

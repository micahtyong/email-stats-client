<template>
  <img alt="Gmail logo" src="./assets/gmail.png" width="100" />
  <Header :msg="headerText" />
  <div class="graphs">
    <LineChart
      title="From Me to Gmail"
      :times="times"
      :fromMeToGmail="fromMeToGmail"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import Header from './components/Header.vue'
import LineChart from './components/LineChart.vue'
import { rangeScan } from './fetchStats.js'

export default {
  name: 'App',
  components: {
    Header,
    LineChart
  },
  data() {
    const headerText = 'Welcome to Gmail Stats'
    const start = Math.floor(
      new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000).getTime() / 1000
    )
    const end = Math.floor(Date.now() / 1000)
    const times = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    const fromMeToGmail = [30, 40, 45, 50, 49, 60, 70, 91]

    return {
      headerText,
      start,
      end,
      times,
      fromMeToGmail
    }
  },
  created() {
    rangeScan('micahtyong@gmail.com', this.start, this.end)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
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

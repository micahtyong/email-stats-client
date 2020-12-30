<template>
  <div class="text-content">
    <Header :title="headerText" />
    <p>{{ descriptionText }}</p>
    <p>
      In the
      <router-link class="header" to="/"><b>homepage</b></router-link
      >, users gain a birds-eye view of what their inbox activity is like for
      the past week. The metrics tracked for this first iteration are 'sent
      to:you from:gmail-users', 'sent to:you from:non-gmail-users', 'sent
      from:you to:gmail-users', and 'sent from:you to:non-gmail-users'.
    </p>
    <p>
      For a more
      <router-link class="header" to="/graphs/tomefromnongmail"
        ><b>detailed view</b></router-link
      >
      of the graphs, users can click on the titles of each graph and they will
      be redirected to a view that displays the metrics-over-time graphs in full
      screen. To navigate back to home or docs, users should interact with the
      navigation bar on the upper right hand corner or use their browser's
      navigation tools.
    </p>
    <p>
      Each <router-link class="header" to="/"><b>graph view</b></router-link
      >  is interactive and comes with a toolbar in the top right.
      <ul>The "+" button zooms into the graph. The "-" button zooms out.</ul>
      <ul>
        The magnifying glass allows users to hover their mouse over an
        individual data point to learn its exact timestamp and count. While the
        magnifying glass is selected, users can select specific ranges of the
        data they would like to see within the past week by clicking and
        dragging on the graph.
      </ul>
      <ul>
        The hand icon allows users to swipe through the x-axis of the graph.
        This is useful when the graph is currently zoomed in.
      </ul>
      <ul>The home icon re-centers and resets the zoom of the graph.</ul>
      <ul>
        The hamburger menu enables users to download the graph as an SVG, PNG,
        or CSV (raw data points).
      </ul>
    </p>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Docs',
  components: {
    Header,
    Footer
  },
  setup() {
    return {
      headerText: 'What is Gmail Stats?',
      descriptionText:
        "Welcome to Gmail Stats, a single page application that helps Gmail users visually analyze their inbox activity. Here's how to get started."
    }
  }
}
</script>

<style scoped>
ul {
  list-style-position: outside;
  list-style-type: circle;
}
</style>

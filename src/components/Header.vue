<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Showing emails stats for <b>micahtyong@gmail.com</b> from the past week.
      Times are shown in PDT.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 30px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

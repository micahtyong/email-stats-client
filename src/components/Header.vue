<template>
  <div class="text-content d-flex">
    <h1>{{ title }}</h1>
    <p>
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    msg: String
  }
}
</script>

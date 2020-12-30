<template>
  <div class="footer">
    <span>
      ©
      <a
        href="mailto:micahtyong@gmail.com?Subject=Saying Hello!"
        target="_blank"
        ><b>Micah Yong</b></a
      >. All rights reserved.
    </span>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  bottom: 0;
  width: 60%;
  text-align: center;
}
a {
  color: #ea4335;
}
</style>

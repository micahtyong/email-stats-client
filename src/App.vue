<template>
  <div id="nav">
    <router-link class="router-link" to="/">Home</router-link> |
    <router-link class="router-link" to="/about">About</router-link>
  </div>
  <router-view />
</template>

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

body {
  margin: 10px;
}

#nav {
  padding: 0px 5px 0px 0px;
  display: flex;
  justify-content: flex-end;
}

.router-link {
  margin: 0px 8px 0px 8px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ea4335;
}

.graph-enlarged {
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.header {
  text-decoration: none;
  color: #333333;
}

.header:hover {
  text-decoration: underline;
  color: #2196f3;
}
</style>

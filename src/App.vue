<template>
  <div class="d-flex" id="nav">
    <router-link class="router-link" to="/">Home</router-link> |
    <router-link class="router-link" to="/docs">Docs</router-link>
  </div>
  <router-view />
</template>

<style>
/* Global CSS */
#app {
  font-family: Helvetica-Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 1.4;
}

body {
  margin: 10px;
}

p {
  width: 60%;
  text-align: left;
  margin-top: 0;
}

.text-content {
  flex-direction: column;
  align-items: center;
}

/* Navbar CSS */
#nav {
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

/* Graph CSS */
.graph-enlarged {
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

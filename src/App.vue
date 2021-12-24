<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/test1">Test1</router-link>
    </div> -->
    <router-view />
    <!-- <Layout /> -->
  </div>
</template>
<script>
export default {
  components: {
    Layout: () => import("./views/Layout"),
  },
};
</script>


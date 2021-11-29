<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/test1">Test1</router-link>
    </div> -->
    <!-- <router-view/> -->
    <Layout />
  </div>
</template>
<script>
export default {
  components: {
    Layout: () => import("./views/Layout"),
  },
};
</script>

<style lang="less">
html {
  height: 100%;
  body {
    height: 100%;
    margin: 0;
    #app {
      height: 100%;
      .container-box {
        height: 100%;
        .el-main,
        .el-header,
        .el-footer {
          padding: 0;
        }
        .el-menu {
          height: 100%;
        }
        .padding-left16 {
          padding-left: 16px;
        }
      }
    }
  }
}
</style>

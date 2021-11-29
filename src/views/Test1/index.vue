<template>
  
  <el-container class="container-box">
    <el-aside>
      <el-menu :collapse="isCollapse" :router="true" :default-active="defaultActive">
        <el-menu-item index="/test1/page1">
          <i class="el-icon-location"></i>
          <span slot="title">练习1</span>
        </el-menu-item>
        <el-menu-item index="/test1/page2">
          <i class="el-icon-menu"></i>
          <span slot="title">练习2</span>
        </el-menu-item>
        <el-menu-item index="/test1/page3">
          <i class="el-icon-setting"></i>
          <span slot="title">练习3</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main class="padding-left16">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Test1",
  data() {
    return {
      isCollapse: false,
      defaultActive: '/test1/page1',
    };
  },
  mounted() {
      const path = this.$route.path;
      this.defaultActive = path;
  },
  
  
};
</script>
<style lang="less" scoped>

</style>

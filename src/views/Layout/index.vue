<template>
  <el-container class="container-box">
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <el-main class="layout-main">
      <router-view />
    </el-main>
    <el-footer>
      <el-row
        type="flex"
        justify="space-around"
      >
        <el-col :span="3">lth语录：</el-col>
        <el-col :span="3">可以忘记打卡</el-col>
        <el-col :span="3">每月最多三次</el-col>
        <el-col :span="3">这个月已经三次了</el-col>
        <el-col :span="3">LTHtest &copy; 2021 版权所有 </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Layout",
  data () {
    return {};
  },
  components: {
    LayoutHeader: () => import('./LayoutHeader.vue')
  },
  methods: {},
};
</script>
<style lang="less" scoped>
@import "~baseCss/skin.less";
/deep/ .el-footer,
.el-header {
  line-height: 60px;
  user-select: none;
  overflow: hidden;
}
.layout-main {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 0 16px;
}
</style>

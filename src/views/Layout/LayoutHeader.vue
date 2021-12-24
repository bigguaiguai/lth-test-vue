<template>
  <div :class="baseClass">
    <div
      :class="baseClass+'-logo'"
      @click="backPortal"
    >LTHtest</div>

    <el-dropdown
      :class="baseClass+'-dropdown'"
      placement="bottom"
      trigger="click"
    >
      <span class="el-dropdown-link">
        <el-avatar
          icon="el-icon-user-solid"
          :class="baseClass+'-dropdown-avatar'"
        ></el-avatar>
        <span :class="baseClass+'-dropdown-name'">张三</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided>设置</el-dropdown-item>
        <el-dropdown-item divided>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data () {
    return {
      baseClass: 'layout-header-box',
    }
  },
  methods: {
    backPortal () {
      this.$router.push({
        path: '/portal'
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "~baseCss/skin.less";
.layout-header-box {
  height: 100%;
  display: flex;
  justify-content: space-between;
  &-logo,
  &-dropdown {
    text-align: center;
    cursor: pointer;
  }
  &-logo {
    padding-left: 24px;
  }
  &-dropdown {
    padding-right: 24px;
    text-align: center;
    cursor: pointer;
    &-avatar {
      vertical-align: middle;
    }
    &-name {
      margin-left: 16px;
    }
  }
}
</style>

// 左边可以折叠的布局

<template>
  <div class="fold-left-box">
    <div
      class="fold-left-box-left"
      :style="{width: asideWidth + 'px'}"
      v-show="asideWidth > 0"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="fold-left-box-line"
      :style="{cursor: asideWidth ===0 ? '' : 'col-resize'}"
      ref="drag"
    >
      <el-button
        :icon="asideWidth ===0 ? 'el-icon-arrow-right': 'el-icon-arrow-left'"
        size="mini"
        circle
        class="fold-left-box-line-button"
        @click="foldLeft"
      ></el-button>
    </div>
    <div class="fold-left-box-main">
      <slot name="main"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FoldLeft',
  data () {
    return {
      asideWidth: 300,
    }
  },
  props: {

  },
  mounted () {
    this.bindDrop()
  },
  methods: {
    // 折叠事件
    foldLeft () {
      this.asideWidth = this.asideWidth === 0 ? 300 : 0
    },
    // 绑定鼠标点击事件
    bindDrop () {
      const _this = this
      const drag = this.$refs.drag
      drag.onmousedown = function (e) {
        document.onmousemove = function (e) {
          _this.asideWidth += e.movementX
          if (_this.asideWidth < 20) {
            document.onmouseup()
            _this.asideWidth = 0
          }
        };
        document.onmouseup = function () {
          document.onmousemove = null
          document.onmouseup = null
        }
        return false
      }
    },
  },
}
</script>

<style lang="less" scoped>
.fold-left-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  &-left {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  &-line {
    width: 4px;
    height: 100%;
    position: relative;
    border-left: 1px solid #e6e6e6;

    &-button {
      position: absolute;
      top: 50%;
      right: -10px;
    }
  }
  &-main {
    height: 100%;
    width: 100%;
    flex: 1;
    padding-left: 12px;
    overflow: auto;
  }
}
</style>
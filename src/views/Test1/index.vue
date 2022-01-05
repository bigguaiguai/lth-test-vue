<template>
  <el-container class="container-box">
    <FoldLeft>
      <template v-slot:left>
        <el-menu
          :collapse="isCollapse"
          :router="true"
          :default-active="$route.path"
          class="vertical-menu"
        >
          <template v-for="item in navData">
            <!-- 有 二级菜单 的情况 -->
            <el-submenu
              v-if="item.children && item.children.length > 0"
              :key="item.title"
              :index="item.index"
            >
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>
              <template v-for="child in item.children">
                <el-menu-item
                  :key="child.index"
                  :index="child.index"
                >
                  <!-- 有提示 -->
                  <el-tooltip
                    v-if="child.tooltip"
                    :content="child.tooltip"
                    effect="dark"
                    placement="right"
                  >
                    <span>{{ child.title }}</span>
                  </el-tooltip>
                  <!-- 没有提示 -->
                  <span v-else>{{ child.title }}</span>
                </el-menu-item>
              </template>
            </el-submenu>
            <!-- 没有 二级菜单 直接显示 -->
            <el-menu-item
              v-else
              :key="item.title"
              :index="item.index"
            >
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </template>
      <template v-slot:main>
        <router-view></router-view>
      </template>
    </FoldLeft>
  </el-container>
</template>

<script>
export default {
  name: "Test1",
  data () {
    return {
      isCollapse: false,
      navData: [
        {
          index: "/test1/nva1-page1",
          icon: "el-icon-location",
          title: "demo练习",
          children: [
            {
              index: "/test1/nav1-page1",
              tooltip: "check勾选传参和显示不一致问题",
              title: "demo1",
            },
            {
              index: "/test1/nav1-page2",
              title: "demo2",
            },
            {
              index: "/test1/nav1-page3",
              title: "demo3",
            },
            {
              index: "/test1/nav1-page4",
              title: "打字游戏",
            },
          ],
        },
        {
          index: "/test1/nav2-page1",
          icon: "el-icon-menu",
          title: "计划表",
          children: [
            {
              index: "/test1/nav2-page1",
              title: "requirement",
            },
            {
              index: "/test1/nav2-page2",
              title: "vuex",
            },
            {
              index: "/test1/nav2-page3",
              title: "todoList",
            },
          ],
        },
        {
          index: "/test1",
          icon: "el-icon-setting",
          title: "练习3",
        },
      ],
    };
  },
  components: {
    FoldLeft: () => import('@/components/common/FoldLeft.vue'),
  },
  mounted () {
  },
};
</script>
<style lang="less" scoped>
.vertical-menu {
  border-right: none;
}
</style>

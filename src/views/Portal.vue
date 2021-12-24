<template>
  <div
    class="portal-box"
    style="overflow: hidden;"
  >
    <el-row :gutter="20">
      <el-col
        v-for="item in listData"
        :key="item.id"
        :span="8"
      >
        <el-card
          shadow="hover"
          class="portal-box-card"
          @click.native="enterPage(item.path)"
        >
          {{ item.title }}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Portal",
  data () {
    return {
      listData: [
        {
          id: "001",
          title: "测试1",
          path: "test1",
        },
        {
          id: "002",
          title: "测试2",
          path: "test2",
        },
        {
          id: "003",
          title: "测试3",
          path: "test3",
        },
        {
          id: "004",
          title: "测试4",
          path: "test4",
        },
      ],
    };
  },
  components: {},
  methods: {
    enterPage (path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less" scoped>
.portal-box {
  padding-top: 16px;
  &-card {
    line-height: 148px;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      font-size: 1.2rem;
    }
  }
}
</style>
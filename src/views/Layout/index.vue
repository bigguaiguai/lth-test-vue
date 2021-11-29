<template>
  <el-container class="container-box">
    <el-header>Header</el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
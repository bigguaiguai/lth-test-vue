<template>
  <div>
    {{ msg }}1234
    <TestList :dataList="dataList" @updateList="updateList"></TestList>
  </div>
</template>
<script>
export default {
  name: "Test1Page1",
  data() {
    return {
      msg: "Test1 page list:",
      dataList: [
        { key: "t1", checked: true, title: "t1" },
        { key: "t2", checked: false, title: "t2" },
        { key: "t3", checked: false, title: "t3" },
      ],
    };
  },
  components: {
    TestList: () => import("@/components/Test1/TestList.vue"),
  },
  methods: {
    updateList(val, index, item) {
      console.log("父组件更新：", val, index, item.checked);
      if (this.dataList[0].checked) {
        //   this.dataList[index].checked = false;
        this.$set(this.dataList[index], "checked", false);
        console.log("父组件更新2：this.dataList", this.dataList[index].checked);
      }
    },
  },
};
</script>
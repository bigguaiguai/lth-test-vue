<template>
  <div>
    <div v-if="dataList && dataList.length > 0">
      <div
        v-for="(item,index) in dataList"
        :key="item.key"
      >
        name: {{item.name}} '|' index: {{index}} '|'
        <el-checkbox
          @change="val => changeChecked(val,index,item)"
          v-model="item.checked"
        >
        </el-checkbox>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'TestList',
  data () {
    return {
      test1: 'test1',
    }
  },
  props: {
    dataList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    changeChecked (val, index, item) {
      console.log('list勾选改变', val, index, item.checked)
      this.$nextTick(() => {
        this.$emit('updateList', val, index, item)
      })
    }
  }

}
</script>

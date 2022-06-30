<template>
  <div>
    <v-chart :options="data"></v-chart>
    <el-input
      v-model="inputModel"
      @input="inputChange"
    ></el-input>

  </div>
</template>

<script>
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/legend'
export default {
  name: 'test',
  props: ['data'],
  data () {
    return {
      time1: '',
      inputModel: '',

    }
  },
  mounted () {
    window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
    window.addEventListener('unload', e => this.unloadHandler(e))
  },
  destroyed () {
    window.removeEventListener('beforeunload', e => this.beforeunloadHandler(e))
    window.removeEventListener('unload', e => this.unloadHandler(e))
  },
  methods: {
    inputChange (val) {
      this.inputModel = val.replace(/[^a-zA-Z0-9\u4e00-\u9fa5\#\、]/g, '')
    },
    beforeunloadHandler (e) {
      this.time1 = new Date().getTime()
      console.log(this.time1, 'before')
    },
    unloadHandler (e) {
      this.time2 = new Date().getTime() - this.time1;
      //判断是窗口关闭还是刷新
      if (this._gap_time <= 5) {
        alert('关闭')
        debugger
      }
    },
  }
}
</script>

<style scoped>
.echarts {
  width: 500px;
  height: 500px;
}
</style>
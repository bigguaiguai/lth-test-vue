<template>
  <div>
    <v-line
      :data="options"
      v-if="show"
    ></v-line>
  </div>
</template>

<script>

import chart from '@/components/common/echarts'
export default {
  name: 'Test2',
  components: {
    'v-line': chart,
  },
  data () {
    return {
      show: false,
      options: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: 0,
          data: ['邮件营销', '联盟广告', '32视频广告', '直接访问', '搜索引23擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = true
    })
  }
}
</script>
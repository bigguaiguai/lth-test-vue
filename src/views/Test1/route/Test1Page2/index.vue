<template>
  <el-container class="container-box">
    <el-header class="flex-space-between">
      <div>
        用户信息
      </div>
      <div>
        <el-button
          icon="el-icon-plus"
          size="mini"
          @click="openUserDrawer"
        >新增</el-button>
        <el-button
          icon="el-icon-search"
          size="mini"
          type="primary"
          @click="getTableData"
        >搜索</el-button>

      </div>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        border
        fit
        height="100%"
        :default-sort="{prop: 'createTime',order: 'descending'}"
        @sort-change="handleSortChange"
      >
        <el-table-column
          type="index"
          width="70px"
          align="center"
          label="序号"
        ></el-table-column>
        <el-table-column
          v-for="item in columnList"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
          :align="item.align"
          sortable="custom"
          show-overflow-tooltip
        >
          <template
            slot="header"
            slot-scope="scope"
          >
            <span style="position: relative">
              <span>
                {{scope.column.label}}
              </span>
              <el-popover
                v-if="scope.column.property === 'name' || scope.column.property === 'age' || scope.column.property === 'createTime'"
                placement="bottom"
                width="180"
                trigger="click"
                @click.stop.native
                style="position: absolute;right: -40px;top: -2px"
              >
                <el-input
                  v-if="scope.column.property === 'name' || scope.column.property === 'age'"
                  class="header-input"
                  size="mini"
                  clearable
                  v-model="searchInput"
                  @keyup.enter.native="filterData(scope.column.property)"
                ></el-input>
                el-
                <i
                  slot="reference"
                  class="el-icon-arrow-down"
                ></i>
              </el-popover>
            </span>
          </template>
          <template slot-scope="scope">
            <template v-if="scope.column.property === 'name'">
              <span @click="openUserDrawer(scope.row)">{{scope.row.name}}</span>
            </template>
            <template v-else>
              <span>{{scope.row[item.prop]}}</span>
            </template>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="120"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="mini"
              @click="removePerson(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <UserDrawer
      v-model="userDrawerVisible"
      :currentOpen="currentOpen"
      @getTableData="getTableData"
    ></UserDrawer>
  </el-container>
</template>

<script>
import moment from 'moment'
import { api } from './api';
export default {
  name: 'Test1Page2',
  data () {
    return {
      searchInput: '',
      columnList: [
        {
          label: '用户名',
          prop: 'name',
          width: 200,
          minWidth: 100,
          align: 'center',
        }, {
          label: '年龄',
          prop: 'age',
          width: 200,
          minWidth: 100,
          align: 'center',
        }, {
          label: '注册时间',
          prop: 'createTime',
          width: 200,
          minWidth: 160,
          align: 'center',
        },
      ],
      tableData: [],
      orderProp: { createTime: -1 },
      searchProp: {},
      title: 'test',
      userDrawerVisible: false,
      currentOpen: {},
    }
  },
  components: {
    UserDrawer: () => import('./component/UserDrawer.vue'),
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    filterData (property) {
      this.searchProp = {}
      this.searchProp[property] = this.searchInput
      this.getTableData()
    },
    searchInputChange (val) {
      this.searchProp = {
        name: val,
      }
    },
    handleSortChange ({ column, prop, order }) {
      console.log(column, prop, order)
      this.orderProp = {
        [prop]: order === 'ascending' ? 1 : -1,
      }
      this.orderProp[prop] = order === 'ascending' ? 1 : -1;
      this.getTableData()
    },
    getTableData () {
      let params = {
        search: this.searchProp,
        pageSize: 10,
        pageNo: 1,
        orderProp: this.orderProp,
      }
      this.$axios.post(api.getPerson, params).then(res => {
        console.log(res)
        if (res.success) {
          let data = res.result
          data.forEach(item => {
            item.createTime = moment(parseInt(item.createTime)).format('YYYY/MM/DD hh:mm:ss')
          });
          this.tableData = data
        }
      })
    },
    removePerson (row) {
      this.$confirm(`确定删除${row.name}吗?`, '删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(() => {
        let params = {
          _id: row._id
        }
        this.$axios.post(api.removePerson, params).then(res => {
          if (res.success) {
            this.$message.success(res.msg)
            this.getTableData()
          } else {
            this.$message.error(res.msg)
          }
        })
      }).catch(() => {
        this.$message.warning('取消删除')
      })
    },
    openUserDrawer (row) {
      this.currentOpen = row || {}
      this.userDrawerVisible = true
    },
  },
}
</script>

<style lang="less" scoped>
</style>
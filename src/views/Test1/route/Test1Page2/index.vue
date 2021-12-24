<template>
  <el-container class="container-box">
    <el-header>
      <el-button @click="openUserDrawer">新增</el-button>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        border
        fit
        height="100%"
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
          show-overflow-tooltip
        >
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
import { api } from './api';
export default {
  name: 'Test1Page2',
  data () {
    return {
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
    getTableData () {
      let params = {
        search: {},
        pageSize: 10,
        pageNo: 1,
        orderProp: '',
      }
      this.$axios.post(api.getPerson, params).then(res => {
        console.log(res)
        if (res.success) {
          this.tableData = res.result;
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
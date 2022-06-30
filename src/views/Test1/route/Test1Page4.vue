<template>
  <el-container class="container-box">
    <el-header>todoList {{fuckName}}
      <el-popover trigger="click">
        <div>
          <el-input placeholder=""></el-input>
          <ul>
            <li>12345</li>
            <li>1234</li>
            <li>12340</li>
            <li>17890</li>
          </ul>
        </div>
        <i
          class="el-icon-plus"
          slot="reference"
        ></i>
      </el-popover>
    </el-header>
    <el-main style="border : 1px solid red">
      <el-table
        :data="tableData"
        border
      >
        <el-table-column
          prop="todo"
          label="事情"
        ></el-table-column>
        <el-table-column
          label="操作"
          width="200"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="deleteOne(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex';
// const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('todolist');
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Test1Page4',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      tableData: state => state.todolist.tableData,
    }),
    // ...mapGetters({
    //   fuckName: state => state.todolist.getFuckName
    // }),
    ...mapGetters('todolist', {
      fuckName: 'getFuckName'
    }),
  },
  methods: {
    deleteOne (row) {
      let index = 0
      this.tableData.forEach((item, i) => {
        if (item.todo === row.todo) {
          index = i
        }
      })
      this.deleteList({ index })
    },
    ...mapMutations('todolist', ['deleteList'])
  },
}
</script>
<template>
    <el-container class="container-box">
        <el-header>todoList</el-header>
        <el-main style="border : 1px solid red">
            <el-table :data="tableData" border>
                <el-table-column prop="todo" label="事情" ></el-table-column>
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="deleteList(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: 'Test1Todolist',
    data() {
        return {
            tableData: [
                {
                    todo: 'test1',
                },
                {
                    todo: 'test2',
                },
                {
                    todo: 'test3',
                },
            ]
        }
    },
    methods: {
        deleteList(row){
            let index = 0
            this.tableData.forEach((item,i) => {
                if(item.todo === row.todo){
                    index = i
                }
            })
            this.tableData.splice(index,1)
        }
    },
}
</script>
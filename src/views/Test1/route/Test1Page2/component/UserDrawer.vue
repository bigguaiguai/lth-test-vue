<template>
  <el-drawer
    :visible.sync="visible"
    direction="rtl"
    :wrapperClosable="false"
    @open="handleOpen"
    @before-close="handleClose"
    class="drawer-box"
  >
    <div
      slot="title"
      class="drawer-box-title"
    >{{title}}</div>

    <el-container class="container-box">
      <el-main>
        <el-form
          ref="form"
          :model="userForm"
          label-width="80px"
        >
          <template v-for="item in formItem">
            <el-form-item
              :key="item.prop"
              :label="item.label"
            >
              <el-input
                size="mini"
                style="width: 90%"
                v-model.trim="userForm[item.prop]"
              ></el-input>
            </el-form-item>
          </template>
          <el-form-item label="性别">
            <el-radio-group v-model="userForm.sex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer class="drawer-box-footer">
        <!-- <div class="drawer-box-footer"> -->
        <el-button
          size="mini"
          type="primary"
          @click="addOrUpdateUser"
        >确 定</el-button>
        <el-button
          size="mini"
          @click="handleClose"
          style="margin: 0 8px"
        >取 消</el-button>
        <!-- </div> -->
      </el-footer>
    </el-container>

  </el-drawer>
</template>

<script>
import { api } from '../api.js';
export default {
  name: 'UserDrawer',
  data () {
    return {
      visible: false,
      userForm: {
        name: '',
        age: '',
        address: '',
        tel: '',
        height: '',
        weight: '',
        sex: 1,
      },
      formItem: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'tel',
          label: '电话'
        },
        {
          prop: 'height',
          label: '身高'
        },
        {
          prop: 'weight',
          label: '体重'
        },
      ]
    }
  },
  props: {
    value: {
      default: false,
      typeof: Boolean,
    },
    currentOpen: {
      default: Object,
      typeof: {},
    }
  },
  computed: {
    title () {
      return this.currentOpen.name ? `编辑-${this.currentOpen.name}` : '新增'
    },
  },
  watch: {
    value (val) {
      this.visible = this.value
    },
    visible (val) {
      this.$emit("input", val)
    }
  },
  mounted () {
  },
  methods: {
    handleOpen () {
      if (this.currentOpen.name) {
        let params = {
          _id: this.currentOpen._id
        };

        this.$axios.post(api.getPersonDetail, params).then(res => {
          if (res.success) {
            const { name, age, detail } = res.result[0]
            if (detail) {
              const { address, height, weight, sex, tel } = detail
              this.userForm = { address, height, weight, sex, name, age, tel }
            } else {
              this.userForm = { name, age }
            }
          }
        })
      }
    },
    handleClose () {
      this.visible = false
    },
    addOrUpdateUser () {
      let params = { ...this.userForm };
      let url = this.userForm._id ? api.updatePerson : api.addPerson
      this.$axios.post(url, params).then(res => {
        if (res.success) {
          this.$message.success(res.msg)
          this.handleClose()
          this.$emit('getTableData')
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-drawer__open .el-drawer {
  padding: 16px;
  /deep/ .el-form {
    padding: 16px 0;
  }
  .drawer-box-footer {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
}
</style>
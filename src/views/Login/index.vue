<template>
  <div class="login-box">
    <el-form
      class="login-box-form"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="loginFormRef"
      label-width="80px"
    >
      <el-form-item
        label="账号"
        prop="userName"
      >
        <el-input v-model="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="passWord"
        clearable
      >
        <el-input
          type="password"
          v-model="ruleForm.passWord"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox
          style="font-size: 12px"
          label="阅读并同意《服务协议》和《隐私声明》"
          v-model="ruleForm.agree"
        ></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitLogin"
        >登录</el-button>
        <el-button @click="submitRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { api } from './api';
export default {
  name: 'Login',
  data () {
    return {
      ruleForm: {
        userName: '',
        passWord: '',
        agree: [],
      },
      rules: {
        agree: [
          { type: 'array', required: true, message: '请勾选同意协议', trigger: 'change' },
        ],
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    }
  },
  created () {
  },
  mounted () { },
  methods: {
    submitLogin () {
      this.$refs.loginFormRef.validate(valid => {
        if (valid) {
          let { userName, passWord } = this.ruleForm
          let params = {
            userName,
            passWord,
          }
          this.$axios.post(api.login, params).then(res => {
            if (res.success) {
              sessionStorage.setItem('token', res.token)
              this.$router.push({
                path: '/portal'
              })
            } else {
              this.$message.console.error(res.msg);
            }
          })
        }
      })
    },
    submitRegister () {
      this.$refs.loginFormRef.validate(valid => {
        if (valid) {
          let { userName, passWord } = this.ruleForm
          let params = {
            userName,
            passWord,
          }
          this.$axios.post(api.register, params).then(res => {
            if (res.success) {
              this.$message.success(res.msg);
            } else {
              this.$message.error(res.msg);
            }
          })
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>
.login-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-form {
    width: 400px;
  }
}
</style>
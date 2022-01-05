<template>
  <el-container class="container-box requirement-box">
    <el-header class="flex-space-between">
      <div>提需求</div>
      <el-tooltip
        placement="left"
        content="自定义表单项"
      >
        <el-popover
          placement="bottom"
          v-model="customerFormShow"
        >
          <div class="customer-form-box">
            <el-checkbox-group
              v-model="customerFormitemsChecked"
              @change="handleCheckedCitiesChange"
            >
              <el-checkbox
                v-for="item in customerFormitemsAll"
                :label="item.value"
                :key="item.value"
              >{{item.label}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <i
            slot="reference"
            class="el-icon-setting customer-form-box-reference"
          ></i>

        </el-popover>
      </el-tooltip>
    </el-header>
    <el-main class="requirement-box-main">
      <el-form
        ref="requirementForm"
        :model="form"
        label-width="120px"
        label-position="right"
        :rules="rules"
      >
        <el-form-item
          label="所属产品"
          prop="product"
          v-if="customerFormitemsChecked.includes('product')"
        >
          <el-select
            v-model="form.product"
            placeholder="选择产品"
          >
            <el-option
              label="chanp1"
              value="chanp1"
            ></el-option>
            <el-option
              label="chanp2"
              value="chanp2"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="由谁评审"
          prop="reviewer"
          v-if="customerFormitemsChecked.includes('reviewer')"
        >
          <el-select
            v-model="form.reviewer"
            placeholder="选择评审人"
          >
            <el-option
              label="reviewer1"
              value="reviewer1"
            ></el-option>
            <el-option
              label="reviewer2"
              value="reviewer2"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="时间期限"
          prop="lastTime"
        >
          <el-date-picker
            v-model="form.lastTime"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="需求名称"
          prop="name"
        >
          <el-input
            placeholder="请输入需求名称"
            maxlength="50"
            show-word-limit
            v-model="form.name"
          >
            <div
              slot="append"
              class="flex-space-between"
            >
              <div>优先级</div>
              <el-select
                v-model="form.degree"
                class="requirement-box-main-degree-select"
              >
                <el-option
                  label="提示"
                  value="1"
                ></el-option>
                <el-option
                  label="一般"
                  value="2"
                ></el-option>
                <el-option
                  label="严重"
                  value="3"
                ></el-option>
                <el-option
                  label="致命"
                  value="4"
                ></el-option>
              </el-select>
            </div>
          </el-input>
        </el-form-item>
        <el-form-item
          label="需求描述"
          prop="description"
        >
          <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 8}"
            placeholder="请输入内容"
            v-model="form.description"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="验收标准"
          prop="stand"
        >
          <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 8}"
            placeholder="请输入内容"
            v-model="form.stand"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="关键词"
          class="requirement-box-main-keyword"
          prop="keywordArr"
          v-if="customerFormitemsChecked.includes('keywordArr')"
        >
          <el-tag
            :key="tag"
            v-for="tag in keyWordTags"
            closable
            class="requirement-box-main-keyword-tag"
            @close="handleClose(tag)"
          >
            {{tag}}
          </el-tag>
          <el-input
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            class="requirement-box-main-keyword-input"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button
            v-else
            size="small"
            icon="el-icon-plus"
            @click="showInput"
          >新增</el-button>
        </el-form-item>
        <el-form-item
          label="附件"
          prop="appendix"
          v-if="customerFormitemsChecked.includes('appendix')"
        >
          <el-upload
            class="requirement-box-main-upload"
            action=""
          >
            <el-button
              size="small"
              icon="el-icon-plus"
            >添加文件</el-button>
            <span
              slot="tip"
              class="requirement-box-main-upload-tip"
            >(不超过10M)</span>
          </el-upload>
        </el-form-item>

        <el-form-item class="flex-end">
          <el-button>取消</el-button>
          <el-button
            type="primary"
            @click="submitForm"
          >创建</el-button>
        </el-form-item>

      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Requirement',
  data () {
    return {
      customerFormShow: false,
      customerFormitemsAll: [
        {
          value: 'product',
          label: '所属产品'
        },
        {
          value: 'reviewer',
          label: '评审人'
        },
        {
          value: 'appendix',
          label: '附件'
        },
        {
          value: 'keywordArr',
          label: '关键词'
        },
      ],
      customerFormitemsChecked: [], // 勾选的
      form: {
        product: '',
        reviewer: '',
        name: '',
        degree: '1',
        lastTime: '',
        description: '',
        stand: '',
        keywordArr: [],
      },
      rules: {
        lastTime: [
          { required: true, message: '请选择期限', }
        ],
        description: [
          { required: true, message: '请输入需求描述', trigger: 'blur' },
        ],
        stand: [
          { required: true, message: '请输入验收标准', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入需求名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 50 个字符', trigger: 'blur' }
        ],

      },
      keyWordTags: [],
      inputVisible: false,
      inputValue: '',
    }
  },
  methods: {
    submitForm () {
      this.$refs.requirementForm.validate(valid => {
        if (valid) {
          if (this.keyWordTags.length > 0) {
            this.form.keywordArr = [...this.keyWordTags]
          }
          console.log(this.form, '123')
        }
      })
    },
    chooseCustomerFormItem () {
      this.customerFormShow = true;
    },
    handleCheckedCitiesChange (items) {
      console.log(items, 'items')
      this.customerFormitemsChecked = items;
    },
    handleClose (tag) {
      this.keyWordTags.splice(this.keyWordTags.indexOf(tag), 1);
    },

    showInput () {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm () {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.keyWordTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
  }
}
</script>
<style lang="less" scoped>
.requirement-box {
  user-select: none;
  &-main {
    padding: 8px 16px;
    background: #eee;
    /deep/ .el-input-group__append {
      width: 120px;
    }
    &-review-checkbox {
      padding-left: 16px;
    }
    &-degree-select {
      width: 80px;
      background: white;
      border: 1px solid #ddd;
      height: 38px;
    }
    &-upload {
      &-tip {
        padding: 0 8px;
        color: #aaa;
      }
    }
    &-keyword {
      &-tag {
        margin-right: 8px;
      }
      &-input {
        width: 180px;
      }
    }
  }
}

.customer-form-box {
  width: 280px;
  /deep/ .el-checkbox {
    width: 50%;
    margin-right: 0;
    padding-bottom: 12px;
  }
  &-reference {
    cursor: pointer;
    padding-right: 6px;
    margin-top: 1px;
  }
  &-reference:hover {
    border: 1px solid #aaa;
    border-radius: 2px;
    background: #ddd;
    padding: 5px;
  }
}
</style>
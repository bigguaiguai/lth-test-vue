<template>
  <el-container class="container-box">
    <el-header class="flex-space-between">
      <span>警察追小偷
        <el-tooltip
          effect="dark"
          content="点击开始3秒后警察开始追你，被追上就输了。打错字警察会快进一格。"
          placement="right"
        >
          <i class="el-icon-info"></i>
        </el-tooltip>
      </span>
      <div class="flex-space-around">
        <el-checkbox-group
          v-model="level"
          :max="1"
          style="paddingRight: 100px"
        >
          <el-checkbox label="easy"></el-checkbox>
          <el-checkbox label="general"></el-checkbox>
          <el-checkbox label="difficult"></el-checkbox>
          <el-checkbox label="hell"></el-checkbox>
        </el-checkbox-group>
        <el-button
          size="mini"
          type="primary"
          @click="beginGame"
        >{{isGame ? "暂停":"开始"}}</el-button>
      </div>
    </el-header>
    <el-main class="type-game-box">
      <template :v-if="wordsArr.length > 0">
        <div
          v-for="(item,index) in wordsArr"
          :class="currentIndex === index ? (isWrong ? 'word-box wrong':'word-box current'):(currentIndex > index ? 'word-box beyond' : 'word-box')"
          :style="policeIndex > index ? 'background: rgb(241 164 164)': ''"
          :key="index"
        >{{item}}</div>
      </template>
    </el-main>
  </el-container>
</template>

<script>
const allWords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
export default {
  name: 'Test1Page4',
  data () {
    return {
      level: ['general'], // 游戏难度
      wordsArr: [], // 整个跑道的数组
      allLength: 100, // 整个跑道的长度
      currentIndex: 0, // 当前玩家的位置
      policeIndex: -1, // 当前警察的位置
      timer: '', // 警察自动前进的定时器
      isGame: false, // 是否正在游戏
      isWrong: false, // 是否打错了
    }
  },
  computed: {
    duration () { // 根据难度设置定时器的间隔
      let obj = {
        easy: 1000,
        general: 700,
        difficult: 500,
        hell: 300,
      }
      return obj[this.level]
    },
    isOver () { // 根据玩家和警察的当前位置判断是否游戏结束
      return this.currentIndex <= this.policeIndex ? true : false
    }
  },
  watch: {
    isOver (val) { // 判断是否输了
      if (val) {
        this.$message.error('你被抓住了')
        clearInterval(this.timer)
        this.isGame = false
      }
    },
    currentIndex (val) { //判断是否赢了
      if (val === this.allLength) {
        this.$message.success('你逃脱了')
        clearInterval(this.timer)
        this.isGame = false
      }
    }
  },
  created () {
    this.initWordsArr() // 初始化跑道的数据
  },
  mounted () {
    // 注意this指向，用于监听isGame变化
    document.onkeydown = (e) => {
      if (this.isGame) {
        this.isWrong = false
        let currentWord = this.wordsArr[this.currentIndex]
        if (currentWord === e.key) {
          this.currentIndex++
        } else {
          this.policeIndex++
          this.isWrong = true
        }
      }
    }
  },
  methods: {
    // 开始游戏
    beginGame () {
      this.$message.warning('快跑，3秒后警察出动')
      this.isGame = true;
      setTimeout(() => {
        this.$message.closeAll()
        this.$message.warning('2')
      }, 1000);
      setTimeout(() => {
        this.$message.closeAll()
        this.$message.warning('1')
      }, 2000);
      setTimeout(() => {
        this.$message.closeAll()
        this.$message.warning('警察出动了')
        this.timer = setInterval(() => {
          this.policeIndex++
        }, this.duration)
      }, 3000);
    },
    initWordsArr () {
      for (let i = 0; i < this.allLength; i++) {
        let random = Math.round(Math.random() * 25);
        let randomWord = allWords[random];
        this.wordsArr[i] = randomWord
      }
    },
  },
}
</script>
<style lang="less" scoped>
.type-game-box {
  padding: 8px 0 8px 8px;
  display: flex;
  flex-wrap: wrap;
  .word-box {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid rgb(143, 143, 143);
    color: #333;
    text-align: center;
    line-height: 20px;
    padding: 4px;
    margin-right: 4px;
  }
  .beyond {
    background: #59668b;
  }
  .current {
    border: 1px solid #5c6d62;
    background: #def5e7;
  }
  .wrong {
    border: 1px solid #634e4d;
    background: #f8dcdc;
  }
}
</style>
<template>
  <div class="index">
    这是根目录文件
  </div>
</template>

<script>
import MessageBroker from '../utils/initMqtt'

export default {
  data() {
    return {}
  },
  created() {
  },

  mounted() {
    this.listenNewMessage()
    this.testGetApi()
  },
  methods: {
    testGetApi() {
      let params = {
        db: 'zjnf5',
        login: '潇洒哥',
        password: '123456',
      }
      //测试接口：
      this.$api.test.testPost(params)
        .then(res => {
          //这里放接口通了之后你需要的一些逻辑
          console.log(res)
        })
    },

    listenNewMessage() {
      MessageBroker.connect('livestream/' + 'c394b71891b141bdb925ff24313435eb')
      MessageBroker.on('comment', this.onComment, this)
    },

    onComment(message) {
      console.log(message)
    },
  },
}
</script>

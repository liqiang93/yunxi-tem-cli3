<template>
  <div class="index">
    index<button @click="test">测试</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    test() {
      this.$router.push({
        name: 'demo',
        query: {
          id: 1
        }
      })
    }
  }
}
</script>

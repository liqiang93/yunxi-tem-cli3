<template>
  <router-view v-if="name != routerName"></router-view>
  <slot v-else></slot>
</template>

<script>
// 路由占位
export default {
  name: "RouterHolder",
  data() {
    return {
      routerName: "",
    }
  },
  computed: {
    name() {
      return this.$route.name
    },

    props: {
      routerName: String,
    },

    watch: {
      routerName(val) {
        console.log(val)
      },
    },
  },
}
</script>

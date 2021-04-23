<template>
  <div class="index">
    <router-holder :router-name="$route.name"></router-holder>
    <div>这里是menu1</div>
  </div>
</template>

<script>
import RouterHolder from "@/views/router-holder"
export default {
  components: {
    RouterHolder,
  },
}
</script>

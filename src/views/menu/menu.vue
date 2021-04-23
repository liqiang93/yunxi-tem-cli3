<template>
  <div class="index">
    <div @click="handleNext">这是menu</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router"

export default {
  setup() {
    const router = useRouter()
    const handleNext = () => {
      router.push(`/menu/menu1`)
    }
    return {
      handleNext,
    }
  },
}
</script>

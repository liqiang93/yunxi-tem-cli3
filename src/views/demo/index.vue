<template>
  <div class="hello">
   test{{$route.query.id}}
  </div>
</template>

<script>
export default {
  name: 'test',
  mounted() {
    console.log(this.$route)
  }
}
</script>

<template>
  <div class="index">
    <router-view v-if="$route.name != 'menu-menu1-menu11'" />
    <div v-else>这里是menu1-1</div>
  </div>
</template>

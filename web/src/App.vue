<template>
  <side-bar-vue />
  <content-vue />
</template>

<script>
import ContentVue from './components/Content.vue';
import SideBarVue from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    ContentVue,
    SideBarVue
  }
}
</script>

<style>
#app {
  display: flex;
}
</style>

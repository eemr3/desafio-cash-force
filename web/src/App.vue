<template>
  <SideBarVue />
  <ContentVue />
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

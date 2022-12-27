<template>
  <div class="w-[288px] h-screen bg-[#FBFDFE] px-3">
    <logo-app img="logo.svg" />
    <nav-link img="icons-nfs.svg" />
  </div>
</template>
<script>
import LogoApp from './LogoApp.vue';
import NavLink from './NavLink.vue';

export default {
  name: "SideBar",
  components: { NavLink, LogoApp }
}
</script>

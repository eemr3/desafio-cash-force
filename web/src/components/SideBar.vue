<template>
  <div class="w-[288px] h-screen bg-[#FBFDFE] absolute sm:relative 
    hidden sm:flex">
    <div class="px-3 mt-4">
      <div class="h-16 w-full flex items-center">
        <logo-app img="logo.svg" />
      </div>

      <div class="flex justify-center mt-2 mb-4 w-full">
        <nav-link img="icons-nfs.svg" />
      </div>
    </div>
  </div>
  <div class="w-64 z-40 absolute bg-[#FBFDFE] shadow h-screen flex-col justify-between
      sm:hidden transition duration-150 ease-in-out" id="mobile-nav">
    <div id="openSideBar" class="h-10 w-10 bg-[#021B51] absolute right-0 mt-16 -mr-10 
        flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer" @click="sidebarHandler(true)">
      <font-awesome-icon icon="fa-solid fa-bars" style="color: #00AD8C;" />
    </div>
    <div id="closeSideBar" class="hidden h-10 w-10 bg-gray-800 absolute 
        right-0 mt-16 -mr-10 items-center shadow rounded-tr rounded-br justify-center 
        cursor-pointer text-white" @click="sidebarHandler(false)">
    </div>
    <div class="px-3 mt-4">
      <div class="h-16 w-full">
        <logo-app img="logo.svg" />
      </div>

      <div class="flex mt-2 mb-4 w-full">
        <nav-link img="icons-nfs.svg" />
      </div>
    </div>

  </div>


</template>

<script>
import LogoApp from './LogoApp.vue';
import NavLink from './NavLink.vue';
export default {
  name: "NavBar",
  components: { LogoApp, NavLink },
  data() {
    return {
      moved: false,
    };
  },
  methods: {
    sidebarHandler() {
      const sideBar = document.getElementById("mobile-nav");
      sideBar.style.transform = "translateX(-260px)";
      if (this.$data.moved) {
        sideBar.style.transform = "translateX(0px)";
        this.$data.moved = false;
      } else {
        sideBar.style.transform = "translateX(-260px)";
        this.$data.moved = true;
      }
    },
  },
};
</script>
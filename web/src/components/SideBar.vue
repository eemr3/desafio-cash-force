<template>
  <div class="w-[288px] h-screen bg-[#FBFDFE]">
    <div class="w-full h-[80px] flex items-center ml-4">
      <img class="w-[160px] h-[30px]" src="../assets/logo.svg" alt="logo da aplicação">
    </div>
    <ul class="p-1">
      <router-link class="flex items-center w-full border-l-4 border-[#00AD8C]">
        <img src="../assets/icons-nfs.svg" alt="icone NF" class="ml-1 mr-1">
        Notas fiscais
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {

  name: "SideBar",
  data() {
    return { active: null }
  }
}
</script>

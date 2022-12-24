<template>
  <div class="w-[288px] h-screen bg-[#FBFDFE]">
    <div class="w-full h-[80px] flex items-center ml-4">
      <img class="w-[160px] h-[30px]" src="../assets/logo.svg" alt="logo da aplicação">
    </div>
    <ul>
      <li class="flex items-center ml-4">
        <img src="../assets/icons-nfs.svg" alt="icone NF" class="mr-1">
        Notas fiscais
      </li>
      <router-link>Ola</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  data: () => {
    return { isActive: null }
  }
}
</script>

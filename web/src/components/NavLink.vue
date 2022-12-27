<template>
  <ul class="p-1">
    <router-link class="flex items-center w-full border-l-4 border-[#00AD8C] text-[#00AD8C]">
      <img :src="require(`@/assets/${img}`)" alt="icone NF" class="ml-1 mr-1">
      Notas fiscais
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'NavLink',
  data() {
    return { active: null }
  },
  props: {
    img: String
  }
}
</script>

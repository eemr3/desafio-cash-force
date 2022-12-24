<template >
  <div class="w-full h-[80px] flex items-center ml-4">
    <img class="w-[160px] h-[30px]" :src="require(`@/assets/${img}`)" alt="logo da aplicação">
  </div>
</template>
<script>
export default {
  name: 'LogoApp',
  props: {
    img: String
  }
}
</script>

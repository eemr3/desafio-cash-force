<template>
  <div class="bg-white w-full h-screen shadow-[0px 10px 30px rgba(225, 229, 236, 0.5)]">
    <HeaderApp />
  </div>
</template>
<script>
import HeaderApp from './Header.vue'
export default {
  name: "ContentApp",
  components: {
    HeaderApp,

  }
}
</script>
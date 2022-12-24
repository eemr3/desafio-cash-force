<template>
  <div class="bg-white w-full px-5 h-screen shadow-[0px 10px 30px rgba(225, 229, 236, 0.5)]">
    <header-app />
    <page-title title="Notas fiscais" icon="icons-nf.svg" subTitle="Visualize as notas fiscais que você tem." />
  </div>
</template>
<script>
import HeaderApp from './Header.vue'
import PageTitle from './PageTitle.vue';

export default {
  name: "ContentApp",
  components: {
    HeaderApp,
    PageTitle
  }
}
</script>
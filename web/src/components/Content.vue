<template>
  <div class="bg-[#FFFFFF] lg:w-[80%] px-5 h-screen shadow-[0px 10px 30px rgba(225, 229, 236, 0.5)]">
    <header-app />
    <page-title title="Notas fiscais" icon="icons-nf.svg" subTitle="Visualize as notas fiscais que você tem." />
    <table-app />
  </div>
</template>
<script>
import HeaderApp from './Header.vue'
import PageTitle from './PageTitle.vue';
import TableApp from './TableApp.vue';

export default {
  name: "ContentApp",
  components: {
    HeaderApp,
    PageTitle,
    TableApp
  }
}
</script>
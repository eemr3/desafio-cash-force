<template>
  <div class="w-[255px] h-[53px] mt-9">
    <div class="flex gap-2 items-center">
      <img class="w-[24px] h-[24px]" :src="require(`@/assets/${icon}`)">
      <h3 class="text-2xl font-[700] text-[#021B51]">{{ title }}</h3>
    </div>
    <p class="text-sm text-[#727D94] font-[400]">{{ subTitle }}</p>
  </div>
</template>
<script>
export default {
  name: 'PageTitle',
  props: {
    icon: String,
    title: String,
    subTitle: String
  }
}
</script>

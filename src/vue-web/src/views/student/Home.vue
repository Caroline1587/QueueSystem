<template>
  <div class="home-wrapper">
    <router-view></router-view>
    <FooterBar />
  </div>
</template>

<script setup>
import FooterBar from "@/components/FooterNavBar.vue";
</script>

<style lang="scss" scoped></style>

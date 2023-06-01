<template>
 <div>
    <Header />
    <div class="flex w-full">
      <DashAdmin />
      <slot />
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import DashAdmin from "../components/DashAdmin.vue";
</script>

<style></style>

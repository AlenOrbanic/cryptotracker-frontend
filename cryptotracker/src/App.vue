<script setup>
import { computed,ref } from "vue";
import AppLayout from './layout/app-layout.vue'
import LandingPage from './layout/landing_page.vue'
import { useLayoutStore } from './stores/layout';
const store = useLayoutStore();

// const layout = "app"
const layout = computed(() => store.get_layout );

</script>

<template>
  <div>
    <!-- <AppLayout v-if="layout !== 'auth'" />

    <LandingPage v-else  /> -->

    <LandingPage v-if="layout == 'auth' " />
    <AppLayout v-else />
  </div>
</template>

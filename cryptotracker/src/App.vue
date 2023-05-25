<template>
  <div>
    <LandingPage v-if="layout === 'auth'" />
    <AppLayout v-else />
  </div>
</template>

<script>
import { computed } from "vue";
import { useLayoutStore } from './stores/layout';
import AppLayout from './layout/app-layout.vue';
import LandingPage from './layout/landing_page.vue';

export default {
  components: {
    AppLayout,
    LandingPage
  },
  setup() {
    const store = useLayoutStore();
    const layout = computed(() => store.get_layout);

    return {
      layout
    };
  }
}
</script>


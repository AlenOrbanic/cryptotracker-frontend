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
import userinfo from './stores/userinfo';

export default {
  components: {
    AppLayout,
    LandingPage
  },
  data(){
    return{
      userinfo
    }
  },
  setup() {
    const store = useLayoutStore();
    const layout = computed(() => store.get_layout);

    return {
      layout
    };
  },
  methods: {
  }
}
</script>


<script setup>
import { RouterView } from "vue-router";
import Sidebar from "../components/layout/Sidebar.vue";
import Header from "../components/layout/Header.vue";

</script>

<template>
  <div class="main_page">
    <div class="d-flex">
      <Sidebar />
      <div class="page_body">
        <Header />
        <RouterView />
      </div>
    </div>
  </div>
</template>
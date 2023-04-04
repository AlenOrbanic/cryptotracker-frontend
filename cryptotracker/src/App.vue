<script setup>
import { RouterView } from "vue-router";
import Sidebar from "./components/layout/Sidebar.vue";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <div class="main_page">
    <div class="d-flex">
      <!-- left bar start  -->
      <Sidebar />
      <!-- left bar end -->
      <!-- navbar start  -->
      <div class="page_body">
        <!-- navbar end -->
        <Header />
        <RouterView />
      </div>
    </div>
  </div>
</template>

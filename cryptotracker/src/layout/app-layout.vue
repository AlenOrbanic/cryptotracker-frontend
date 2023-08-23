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
<div class="custom-content">
<RouterView />
<div class="footer-content"></div>
</div>
</div>
</div>
</div>
</template>
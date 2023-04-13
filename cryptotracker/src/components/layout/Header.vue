<script setup>
import { useLayoutStore } from "@/stores/layout";
const layout = useLayoutStore();
</script>
<template>
  <header class="nav_wrap">
    <div class="container">
      <div class="nav_inner">
        <div class="menu_icon d-lg-none" @click="layout.toggle_mobile_menu()">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <div class="form_group">
          <input type="text" class="form-control" placeholder="Search@." />
          <img src="@/assets/img/search_icon.svg" alt="" />
        </div>
        <div class="nav_profile">
          <div class="d-flex align-items-center">
            <img src="@/assets/img/nav_dp.png" alt="" class="nav_pic" />
            <div class="flex_align flex-column">
              <h6 class="fw_700">Luka Brodarič</h6>
              <span>lbrodaric@unipu.hr</span>
            </div>
          </div>
          <img
            src="@/assets/img/vertical_dots.svg"
            alt=""
            class="vertical_dots"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  pair: {
    type: String,
    required: true,
  },
  coin: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  graph: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="balance_box coins_box">
    <div class="box_head">
      <div class="flex_align">
        <img :src="icon" alt="" class="head_img" />
        <div>
          <p>{{ pair }}</p>
          <h6>{{ coin }}</h6>
        </div>
      </div>
    </div>
    <h1>$23,738</h1>
    <div class="graph_img">
      <img :src="graph" alt="" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  price: {
    type: Number,
    required: true,
  },
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
  <div class="balance_box coins_box max_width100">
    <div class="box_head">
      <div class="flex_align">
        <img :src="icon" alt="" class="head_img" />
        <div>
          <p>{{ pair }}</p>
          <h6>{{ coin }}</h6>
        </div>
      </div>
    </div>
    <h1>
      {{
        "$" + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") || "--"
      }}
    </h1>
    <div class="graph_img">
      <img :src="graph" alt="" v-bind:style="{'width': '300px', 'height': '75px'}"/>
    </div>
  </div>
</template>

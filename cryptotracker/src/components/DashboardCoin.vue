<style scoped>
.coin-price-graph {
  margin-top: 12px;
  margin-left: 45px;
}
.mt-10 {
  margin-top: 10px;
}
.text-20 {
  font-size: 20px;
}
</style>

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
    <div class="mt-10 text-20">
      {{
        "$" + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") || "--"
      }}
    </div>
    <div class="graph_img coin-price-graph">
      <img :src="graph" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  },
};
</script>

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
        getFormattedPrice(price, userinfo.usercurrency) || "--"
      }}
    </h1>
    <div class="graph_img">
      <img :src="graph" alt="" v-bind:style="{'width': '300px', 'height': '75px'}"/>
    </div>
  </div>
</template>

<script>
import userinfo from '../stores/userinfo';

const currencySymbols = {
  USD: "$",
  EUR: "€",
  JPY: "¥",
  GBP: "£",
  INR: "₹",
  RUB: "₽",
  TRY: "₺",
  PLN: "zł",
  NOK: "kr",
  CAD: "$",
  AUD: "$",
  HUF: "Ft",
  SEK: "kr",
  CZK: "Kč"
};

export default {
  data() {
    return {
      userinfo
    };
  },
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
  methods: {
    getFormattedPrice(price, currencyCode) {
      const symbol = currencySymbols[currencyCode] || "$"; // Default to "$" if currency symbol is not found
      return `${symbol}${price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
    },
  },
};
</script>
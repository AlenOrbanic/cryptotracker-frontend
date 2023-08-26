<template>
  <div class="col-lg-4">
  <!-- update_portfolio -->
  <div :class="`${defaultClasName}`">
  <h5>Update your portfolio</h5>
  <div class="custom-select-wrapper mb-3">
  <select v-model="selectedCrypto" class="form-select custom-select-placeholder" @change="onSelectChange($event)">
  <option value="" disabled selected></option>
  <option v-for=" crypto in cryptocurrencies " :key="crypto" :value="crypto">
  {{ crypto }}
  </option>
  </select>
  <span class="custom-select-placeholder-text"> {{ selectPlaceholder }} </span>
  </div>
  <input v-model="amount" type="text" class="form-control mb-3" placeholder="Amount" />
  <a @click="updatePortfolio" class="main_btn flex_align">Update</a>
  <p>
  The final price of each coin added to the portfolio will be updated within
  a few seconds.
  </p>
  </div>
  </div>
  </template>
  
  
  
  <script>
  import userinfo from '../stores/userinfo';
  import authenticationService from '@/services/authenticationService';
  
  
  
  export default {
  data() {
  return {
  isActive: false,
  defaultClasName: "update_portfolio",
  cryptocurrencies: [
  "btc",
  "ethereum",
  "ripple",
  "litecoin",
  "bitcoinDash"
  // Add more cryptocurrencies as needed
  ],
  selectedCrypto: "",
  amount: "",
  selectPlaceholder: "Choose a cryptocurrency",
  };
  },
  props: {
  height: {
  type: String,
  },
  },
  methods: {
  onSelectChange(event) {
  this.selectPlaceholder = "";
  },
  async updatePortfolio() {
  const selectedCrypto = this.selectedCrypto;
  const amount = this.amount;
  
  try {
  const response = await authenticationService.updateCryptoValues({
  useremail: userinfo.useremail,
  [selectedCrypto.toLowerCase()]: amount,
  });
  console.log('API response:', response.data);
  // You can perform further actions based on the response if needed
  } catch (error) {
  console.error('API error:', error);
  // Handle the error as necessary
  }
  }
  },
  beforeMount() {
  if (this.height == "max") {
  this.defaultClasName = "update_portfolio h-full";
  
  
  
  }
  else {
  this.defaultClasName = "update_portfolio";
  }
  },
  };
  </script>
  
  
  
  <style scoped>
  /* Custom CSS to display the default placeholder text in black */
  .custom-select-wrapper {
  position: relative;
  }
  
  
  
  .custom-select-placeholder-text {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.375rem 0.75rem;
  pointer-events: none;
  color: black;
  }
  </style>
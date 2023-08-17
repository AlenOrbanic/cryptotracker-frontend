<template>
    <div class="col-lg-4">
      <div class="update_portfolio">
        <h5>Update your portfolio</h5>
        <div class="custom-select-wrapper mb-3">
          <select v-model="selectedCrypto" class="form-select custom-select-placeholder">
            <option value="" disabled selected></option>
            <option v-for="crypto in cryptocurrencies" :key="crypto" :value="crypto">
              {{ crypto }}
            </option>
          </select>
          <span class="custom-select-placeholder-text">Choose a cryptocurrency</span>
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
import AuthenticationService from '@/services/AuthenticationService';
  export default {
    data() {
      return {
        cryptocurrencies: [
          "Bitcoin (BTC)",
          "Ethereum (ETH)",
          "Ripple (XRP)",
          "Litecoin (LTC)",
          "Bitcoin Cash (BCH)"
          // Add more cryptocurrencies as needed
        ],
        selectedCrypto: "",
        amount: ""
      };
    },
    methods: {
      async updatePortfolio(selectedCrypto, amount) {
  try {
    const response = await AuthenticationService.updateUserCurrency({
      useremail: userinfo.email,
      [selectedCrypto]: amount,
    });
    console.log('API response:', response.data);
    return response; // Return the response object
  } catch (error) {
    console.error('API error:', error);
    throw error; // Rethrow the error to be handled by the caller
  }
},
    }
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
  
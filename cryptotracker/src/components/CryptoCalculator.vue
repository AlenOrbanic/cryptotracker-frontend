<template>
    <div class="portfolio_wrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="calculator_inner">
              <div class="update_portfolio width_fit">
                <h5 class="mb-4">Convert your cryptocurrencies here</h5>
                <div class="custom-select-wrapper mb-4">
                  <select v-model="selectedCrypto" class="form-select custom-select-placeholder">
                    <option value="" disabled selected></option>
                    <option v-for="crypto in cryptocurrencies" :key="crypto" :value="crypto">
                      {{ crypto }}
                    </option>
                  </select>
                  <span class="custom-select-placeholder-text">Choose a cryptocurrency</span>
                </div>
                <input
                  v-model="amountInUSD"
                  type="text"
                  class="form-control mb-4"
                  placeholder="Amount in ovdje dodaj crypto"
                />
                <div class="custom-select-wrapper mb-4">
                  <select v-model="selectedCurrency" class="form-select custom-select-placeholder">
                    <option value="" disabled selected></option>
                    <option v-for="currency in currencies" :key="currency" :value="currency">
                      {{ currency }}
                    </option>
                  </select>
                  <span class="custom-select-placeholder-text">Choose a currency</span>
                </div>
                <div class="mb-2">
                  <input
                  v-model="amountInUSD"
                  type="text"
                  class="form-control mb-4"
                  placeholder="Amount in ovdje dodaj valutu"
                />
                  <button
                    @click="calculate"
                    class="btn btn-primary px-4 py-2 rounded d-block mb-2"
                  >
                    Calculate!
                  </button>
                  <a
                    href="https://www.coinbase.com"
                    class="btn btn-success px-4 py-2 rounded d-block"
                  >
                    BUY CRYPTO HERE
                    <img src="../assets/img/right_arrow.png" alt="" class="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
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
        amountInUSD: "",
        currencies: [
          "USD",
          "EUR",
          "JPY",
          "GBP",
          "INR",
          "RUB",
          "TRY",
          "PLN",
          "NOK",
          "CAD",
          "AUD",
          "HUF",
          "SEK",
          "CZK"
          // Add more currencies as needed
        ],
        selectedCurrency: ""
      };
    },
    methods: {
      calculate() {
        // Add your calculate function logic here
      }
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

  .calculator_inner .btn-primary {
  background-color: #3380ff;
  border-color: #3380ff;
}

/* Custom CSS to change the color of the "Calculate!" button on hover and focus */
.calculator_inner .btn-primary:hover,
.calculator_inner .btn-primary:focus {
  background-color: #2963cc;
  border-color: #2963cc;
}
  </style>
  
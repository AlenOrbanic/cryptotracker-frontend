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
                  <option value="" disabled>Select a cryptocurrency</option>
                  <option v-for="crypto in cryptocurrencies" :key="crypto" :value="crypto">
                    {{ crypto }}
                  </option>
                </select>
              </div>
              <input
                v-model="inputValue"
                type="text"
                class="form-control mb-4"
                :placeholder="inputPlaceholder"
                @input="updateInputValue"
              />
              <div class="custom-select-wrapper mb-4">
                <select v-model="selectedCurrency" class="form-select custom-select-placeholder">
                  <option value="" disabled>Select a currency</option>
                  <option v-for="currency in currencies" :key="currency" :value="currency">
                    {{ currency }}
                  </option>
                </select>
              </div>
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
              <div class="result" v-if="calculatedAmount !== null">
                <p class="result-text">{{ calculatedAmount.toFixed(2) }} {{ selectedCurrency }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom CSS for the dropdown and input styling */
.custom-select-placeholder-text {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.375rem 0.75rem;
  pointer-events: none;
  color: black;
}

.custom-select-wrapper {
  position: relative;
}

.form-select.custom-select-placeholder {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

/* Other styles */
.calculator_inner .btn-primary {
  background-color: #3380ff;
  border-color: #3380ff;
}

.calculator_inner .btn-primary:hover,
.calculator_inner .btn-primary:focus {
  background-color: #2963cc;
  border-color: #2963cc;
}

.result {
  text-align: center;
  margin-top: 20px;
}

.result-text {
  font-size: 24px;
  font-weight: bold;
}
</style>

<script>
import liveprices from '../stores/liveprices';

export default {
  data() {
    return {
      amountInCrypto: '',
      cryptocurrencies: [
        "bitcoin",
        "ethereum",
        "ripple",
        "litecoin",
        "bitcoinDash"
        // Add more cryptocurrencies as needed
      ],
      selectedCrypto: "",
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
      selectedCurrency: "",
      calculatedAmount: null
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.amountInCrypto === 'Insert cryptocurrency value here' ? '' : this.amountInCrypto;
      },
      set(newValue) {
        this.amountInCrypto = newValue;
      }
    },
    inputPlaceholder() {
      return this.amountInCrypto === '' ? 'Insert cryptocurrency value here' : '';
    }
  },
  methods: {
    calculate() {
      if (this.amountInCrypto === 'Insert cryptocurrency value here' || this.amountInCrypto === '') {
        this.calculatedAmount = null;
        alert('Please enter a valid cryptocurrency value.');
        return;
      }

      const selectedCryptoPrice = liveprices[this.selectedCrypto.toLowerCase()];
      const selectedCurrencyRate = this.getSelectedCurrencyRate();

      if (selectedCryptoPrice !== undefined && selectedCurrencyRate !== undefined) {
        this.calculatedAmount = selectedCryptoPrice * selectedCurrencyRate * parseFloat(this.amountInCrypto);
      } else {
        this.calculatedAmount = null;
        alert('Please select a valid cryptocurrency and currency.');
      }
    },
    getSelectedCurrencyRate() {
      const currencyRates = {
        USD: 1,
        EUR: 0.92,
        JPY: 110,
        GBP: 0.81,
        INR: 74,
        RUB: 70.6,
        TRY: 14.7,
        PLN: 3.93,
        NOK: 10.1,
        CAD: 1.26,
        AUD: 1.36,
        HUF: 300.5,
        SEK: 8.88,
        CZK: 21.7
        // Add more currency rates as needed
      };

      return currencyRates[this.selectedCurrency] || undefined;
    },
    updateInputValue(event) {
      this.amountInCrypto = event.target.value;
    }
  }
};
</script>

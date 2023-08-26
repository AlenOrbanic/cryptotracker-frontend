<template>
  <!-- coins balance start -->
  <section class="coins_wrap">
    <div class="container">
      <div class="coins_inner">
        <div class="balance_box">
          <div class="box_head">
            <div class="flex_align">
              <img src="../assets/img/wallet.svg" alt="" class="head_img" />
              <p>Balance</p>
            </div>
            <img src="../assets/img/eye.svg" alt="" v-on:click="hideTotalPriceFunc" class="cursor-pointer"/>
          </div>
          <h1>
            {{ hideTotalPrice ? getFormattedPrice(total) : "*******" }}</h1>
        </div>
        <DashboardCoin
          :price="BTC_Price_converted"
          pair="BTC/USDT"
          coin="bitcoin"
          icon="src/assets/img/coin1.svg"
          graph="https://www.coingecko.com/coins/1/sparkline.svg"
        />
        <DashboardCoin
          :price="ETH_Price_converted"
          pair="ETH/USDT"
          coin="Ethereum"
          icon="src/assets/img/eth_coin.svg"
          graph="https://www.coingecko.com/coins/279/sparkline.svg"
        />
        <DashboardCoin
          :price="LTC_Price_converted"
          pair="LTC/USDT"
          coin="Litecoin"
          icon="src/assets/img/litecoin-ltc-logo.svg"
          graph="https://www.coingecko.com/coins/825/sparkline.svg"
        />
      </div>
    </div>
  </section>
  <!-- coins balance end -->

  <!-- char portfolio section start  -->
  <div class="container mb_20">
    <div class="row">
      <div class="col-xl-8">
        <div class="chart_wrap">
          <div class="tradingview-widget-container">
            <div id="tradingview_0de26" v-bind:style="{ 'height': '400px' }"></div>
          </div>
        </div>
      </div>
      <UpdatePortfolio height="max"/>
    </div>
  </div>
  <!-- char portfolio section end -->
  <!-- Assets news section start  -->
  <div class="container">
<div class="lastest_news">
<h5>Latest news</h5>
<div class="cryptohopper-web-widget" data-id="5" data-news_count="3"></div>
</div>
</div>
  <!-- Assets news section end -->
  
</template>
<style>

  .pull-right {
    visibility: hidden;
  }
</style>
<script>
import DashboardCoin from "../components/DashboardCoin.vue";
import UpdatePortfolio from "../components/UpdatePortfolio.vue";
import CoinDataService from "../services/CoinDataService";
import AuthenticationService from "../services/authenticationService";
import cryptovalues from "../stores/cryptovalues";
import liveprices from "../stores/liveprices";
import userinfo from "../stores/userinfo";

export default {
  data() {
    return {
      hideTotalPrice: true,
      BTC_Price_converted: 0,
      ETH_Price_converted: 0,
      LTC_Price_converted: 0,
      total: 0,
      userinfo
    };
  },
  components: {
    DashboardCoin,
    UpdatePortfolio,
  },
  created() {
    setTimeout(() => {
      this.calculatetotal();
      this.convert();
    }, 200);
  },
  methods: {
    hideTotalPriceFunc: function () { //add this func
this.hideTotalPrice = !this.hideTotalPrice;
console.log("hideTotalPrice", this.hideTotalPrice); },
    convertCurrencyToMultiplier(userCurrency) {
    const currencyMultipliers = {
      USD: 1,
  EUR: 0.92,
  JPY: 109,
  GBP: 0.80,
  INR: 73.5,
  RUB: 73,
  TRY: 8.50,
  PLN: 3.75,
  NOK: 10.0,
  CAD: 1.25,
  AUD: 1.35,
  HUF: 300,
  SEK: 9.0,
  CZK: 21.5,
    };

    const multiplier = currencyMultipliers[userCurrency] || 1;
    return multiplier;
  },
  getFormattedPrice(price) { //add this func
return `${price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} ${userinfo.usercurrency}`;
},

  convert() {
    const userCurrencyMultiplier = this.convertCurrencyToMultiplier(this.userinfo.usercurrency);
    this.BTC_Price_converted = liveprices.bitcoin * userCurrencyMultiplier;
    this.ETH_Price_converted = liveprices.ethereum * userCurrencyMultiplier;
    this.LTC_Price_converted = liveprices.litecoin * userCurrencyMultiplier;
  },
    calculatetotal(){
      console.log("liveprice eth: ", liveprices.ethereum);
      console.log("data eth: ", cryptovalues.ethereum);
      this.total = liveprices.bitcoin * cryptovalues.btc + liveprices.ethereum * cryptovalues.ethereum + liveprices.litecoin * cryptovalues.litecoin + liveprices.ripple * cryptovalues.ripple + liveprices.bitcoinDash * cryptovalues.bitcoinDash; 
    },
    updatePortfolio(selectedCrypto, amount) {
    const useremail = AuthenticationService.getCurrentUserEmail();

    const userCurrencyData = {
      useremail,
      [selectedCrypto]: amount,
    };

    console.log('Request Body:', userCurrencyData); // Log the data you're sending

    PortfolioService.updatePortfolio(userCurrencyData)
      .then(response => {
        console.log('Portfolio updated successfully:', response.data);
        this.fetchCoinData(); // Refresh the coin data after updating
      })
      .catch(error => {
        console.error('Error updating portfolio:', error);
        // Handle the error as needed
      });
  },
    fetchCoinData() {
      CoinDataService.getCoinData("bitcoin").then((res) => {
        let price = res.data.bitcoin.usd;
        if (typeof price == "number") {
          this.BTC_Price = price;
        }
      });
      CoinDataService.getCoinData("ethereum").then((res) => {
        let price = res.data.ethereum.usd;
        if (typeof price == "number") {
          this.ETH_Price = price;
        }
      });
      CoinDataService.getCoinData("litecoin").then((res) => {
        let price = res.data.litecoin.usd;
        if (typeof price == "number") {
          this.LTC_Price = price;
        }
      });
    },
  },
  async beforeMount() {
    const script3 = document.createElement("script");
    script3.src = "https://www.cryptohopper.com/widgets/js/script";
    document.head.appendChild(script3);
    this.fetchCoinData();
    setInterval(() => {
      this.fetchCoinData();
    }, 30000);
  },

  mounted() {
    const script1 = document.createElement("script");
    script1.src = "http://localhost:5173/tradingview.js";
    document.head.appendChild(script1);
    const script3 = document.createElement("script");
    script3.src = "https://www.cryptohopper.com/widgets/js/script";
    document.head.appendChild(script3);
  }
};
</script>

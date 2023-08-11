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
            <img src="../assets/img/eye.svg" alt="" />
          </div>
          <h1>$123,987</h1>
        </div>
        <DashboardCoin
          :price="BTC_Price"
          pair="BTC/USDT"
          coin="bitcoin"
          icon="src/assets/img/coin1.svg"
          graph="https://www.coingecko.com/coins/1/sparkline.svg"
        />
        <DashboardCoin
          :price="ETH_Price"
          pair="ETHUSDT"
          coin="Ethereum"
          icon="src/assets/img/eth_coin.svg"
          graph="https://www.coingecko.com/coins/279/sparkline.svg"
        />
        <DashboardCoin
          :price="SOL_Price"
          coin="Solana"
          icon="src/assets/img/col_coin.svg"
          graph="https://www.coingecko.com/coins/4128/sparkline.svg"
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
      <UpdatePortfolio />
    </div>
  </div>
  <!-- char portfolio section end -->
  <!-- Assets news section start  -->
  <div class="container">
    <div class="row flex-row-reverse custom_gap">
      <div class="col-xl-8">
        <div class="lastest_news">
          <h5>Latest news</h5>
          <div class="cryptohopper-web-widget" data-id="5" data-news_count="3"></div>
        </div>
      </div>
      
    </div>
  </div>
  <!-- Assets news section end -->
</template>

<script>
import DashboardCoin from "../components/DashboardCoin.vue";
import UpdatePortfolio from "../components/UpdatePortfolio.vue";
import CoinDataService from "../services/CoinDataService";

export default {
  data() {
    return {
      BTC_Price: 0,
      ETH_Price: 0,
      SOL_Price: 0,
    };
  },
  components: {
    DashboardCoin,
    UpdatePortfolio,
  },
  methods: {
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
      CoinDataService.getCoinData("solana").then((res) => {
        let price = res.data.solana.usd;
        if (typeof price == "number") {
          this.SOL_Price = price;
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

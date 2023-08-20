<template>
  <div class="portfolio_wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <!-- coins balance start -->
          <section class="coins_wrap">
            <div class="container">
              <div class="coins_inner flex-column">
                <div class="balance_box max_width100">
                  <div class="box_head">
                    <div class="flex_align">
                      <img
                        src="../assets/img/wallet.svg"
                        alt=""
                        class="head_img"
                      />
                      <p>Balance</p>
                    </div>
                    <img src="../assets/img/eye.svg" alt="" />
                  </div>
                  <h1>{{total}} {{userinfo.usercurrency}}</h1>
                </div>
                <PortfolioCoin
                  :price="BTC_Price_converted"
                  pair="BTC/USDT"
                  coin="bitcoin"
                  icon="src/assets/img/coin1.svg"
                  graph="https://www.coingecko.com/coins/1/sparkline.svg"
                />
                <PortfolioCoin
                  :price="ETH_Price_converted"
                  pair="ETHUSDT"
                  coin="Ethereum"
                  icon="src/assets/img/eth_coin.svg"
                  graph="https://www.coingecko.com/coins/279/sparkline.svg"
                />
                <PortfolioCoin
                 :price="SOL_Price_converted"
                  pair="SOLUSDT"
                  coin="Solana"
                  icon="src/assets/img/col_coin.svg"
                  graph="https://www.coingecko.com/coins/4128/sparkline.svg"
                />
                <PortfolioCoin
                  :price="ADA_Price_converted"
                  pair="ADAUSDT"
                  coin="CARDANO"
                  icon="src/assets/img/cardano-ada-logo.png"
                  graph="https://www.coingecko.com/coins/975/sparkline.svg"
                />
              </div>
            </div>
          </section>
          <!-- coins balance end -->
        </div>
    <UpdatePortfolio />
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioCoin from "../components/PortfolioCoin.vue";
import UpdatePortfolio from '../components/UpdatePortfolio.vue';
import CoinDataService from "../services/CoinDataService";
import cryptovalues from "../stores/cryptovalues";
import liveprices from "../stores/liveprices";
import userinfo from "../stores/userinfo";

export default {
  data() {
    return {
      BTC_Price_converted: 0,
      ETH_Price_converted: 0,
      SOL_Price_converted: 0,
      ADA_Price_converted: 0,
      total: 0,
      userinfo
    };
  },
  components: {
    PortfolioCoin,
    UpdatePortfolio
  },
  created() {
    setTimeout(() => {
      this.calculatetotal();
      this.convert();
    }, 200);
  },
  methods: {
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

  convert() {
    const userCurrencyMultiplier = this.convertCurrencyToMultiplier(this.userinfo.usercurrency);
    this.BTC_Price_converted = liveprices.bitcoin * userCurrencyMultiplier;
    this.ETH_Price_converted = liveprices.ethereum * userCurrencyMultiplier;
    this.SOL_Price_converted = liveprices.solana * userCurrencyMultiplier;
  },
    calculatetotal(){
      console.log("liveprice eth: ", liveprices.ethereum);
      console.log("data eth: ", cryptovalues.ethereum);
      this.total = liveprices.bitcoin * cryptovalues.btc + liveprices.ethereum * cryptovalues.ethereum + liveprices.litecoin * cryptovalues.litecoin + liveprices.ripple * cryptovalues.ripple + liveprices.bitcoinDash * cryptovalues.bitcoinDash; 
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
      CoinDataService.getCoinData("solana").then((res) => {
        let price = res.data.solana.usd;
        if (typeof price == "number") {
          this.SOL_Price = price;
        }
      });
      CoinDataService.getCoinData("cardano").then((res) => {
        let price = res.data.cardano.usd;
        if (typeof price == "number") {
          this.ADA_Price = price;
        }
      });
    },
  },
  async beforeMount() {
    this.fetchCoinData();
    setInterval(() => {
      this.fetchCoinData();
    }, 30000);

   
  },
}
</script>


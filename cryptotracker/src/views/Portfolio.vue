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
                  <h1>$123,987</h1>
                </div>
                <PortfolioCoin
                  :price="BTC_Price"
                  pair="BTC/USDT"
                  coin="bitcoin"
                  icon="src/assets/img/coin1.svg"
                  graph="https://www.coingecko.com/coins/1/sparkline.svg"
                />
                <PortfolioCoin
                  :price="ETH_Price"
                  pair="ETHUSDT"
                  coin="Ethereum"
                  icon="src/assets/img/eth_coin.svg"
                  graph="https://www.coingecko.com/coins/279/sparkline.svg"
                />
                <PortfolioCoin
                 :price="SOL_Price"
                  pair="SOLUSDT"
                  coin="Solana"
                  icon="src/assets/img/col_coin.svg"
                  graph="https://www.coingecko.com/coins/4128/sparkline.svg"
                />
                <PortfolioCoin
                  :price="ADA_Price"
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

export default {
  data() {
    return {
      BTC_Price: 0,
      ETH_Price: 0,
      SOL_Price: 0,
      ADA_Price: 0
    };
  },
  components: {
    PortfolioCoin,
    UpdatePortfolio
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


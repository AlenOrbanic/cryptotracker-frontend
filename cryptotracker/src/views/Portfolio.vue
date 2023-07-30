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
                  pair="BTC/USDT"
                  coin="bitcoin"
                  icon="src/assets/img/coin1.svg"
                  graph="src/assets/img/coin_graph1.svg"
                />
                <PortfolioCoin
                  pair="ETHUSDT"
                  coin="Ethereum"
                  icon="src/assets/img/eth_coin.svg"
                  graph="src/assets/img/ethCoin_graph.png"
                />
                <PortfolioCoin
                  pair="SOLUSDT"
                  coin="Solana"
                  icon="src/assets/img/col_coin.svg"
                  graph="src/assets/img/solGraph.png"
                />
                <PortfolioCoin
                  pair="ADAUSDT"
                  coin="CARDANO"
                  icon="src/assets/img/cardano-ada-logo.png"
                  graph="src/assets/img/adaGraph.png"
                />

                <div class="balance_box coins_box max_width100">
                  <div class="box_head">
                    <div class="flex_align">
                      <div class="adaCoin_img flex_align">
                        <img
                          src="../assets/img/cardano-ada-logo.png"
                          alt=""
                          class="head_img"
                        />
                      </div>
                      <div>
                        <p>ADAUSDT</p>
                        <h6>CARDANO</h6>
                      </div>
                    </div>
                  </div>
                  <h1>$23,738</h1>
                  <div class="graph_img">
                    <img src="../assets/img/adaGraph.png" alt="" />
                  </div>
                </div>
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

export default {
  components: {
    PortfolioCoin,
    UpdatePortfolio
  },
  
}
</script>


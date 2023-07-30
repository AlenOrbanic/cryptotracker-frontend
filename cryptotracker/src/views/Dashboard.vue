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
          pair="BTC/USDT"
          coin="bitcoin"
          icon="src/assets/img/coin1.svg"
          graph="src/assets/img/coin_graph1.svg"
        />
        <DashboardCoin
          pair="ETHUSDT"
          coin="Ethereum"
          icon="src/assets/img/eth_coin.svg"
          graph="src/assets/img/coin_graph2.svg"
        />
        <DashboardCoin
          pair="SOLUSDT"
          coin="Solana"
          icon="src/assets/img/col_coin.svg"
          graph="src/assets/img/coin_graph3.svg"
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
          <div class="chart_inner">
            <div class="dropdown">
              <a
                class="btn dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="dropdown_content">
                  <div>
                    <h5>BTCUSDT</h5>
                    <h6>Bitcoin</h6>
                  </div>
                  <p>$23,738</p>
                </div>
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
            <ul class="chart_time">
              <li class="active">1H</li>
              <li>3H</li>
              <li>5H</li>
              <li>1D</li>
              <li>1W</li>
              <li>1M</li>
            </ul>
          </div>
          <div class="chart_img">
            <img src="../assets/img/Chart.png" alt="" />
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
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="update_portfolio assets_wrap">
          <div class="assets_head">
            <h5>Assets</h5>
            <img src="../assets/img/horizontal_dots.svg" alt="" />
          </div>
          <div class="assets_graph text-center">
            <img src="../assets/img/assets_chart.svg" alt="" />
          </div>
          <ul class="assets_btnz">
            <li><span class="btc"></span>BTC</li>
            <li><span class="eth"></span>ETH</li>
            <li><span class="ada"></span>ADA</li>
            <li><span class="oth"></span>Others</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Assets news section end -->
</template>

<script>
import DashboardCoin from "../components/DashboardCoin.vue";
import UpdatePortfolio from '../components/UpdatePortfolio.vue';

export default {
  components: {
    DashboardCoin,
    UpdatePortfolio
  }
}
</script>


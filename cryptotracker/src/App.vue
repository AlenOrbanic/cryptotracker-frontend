<template>
  <div>
    <LandingPage v-if="layout === 'auth'" />
    <AppLayout v-else />
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useLayoutStore } from './stores/layout';
import AppLayout from './layout/app-layout.vue';
import LandingPage from './layout/landing_page.vue';
import userinfo from './stores/userinfo';
import axios from 'axios';
import AuthenticationService from "./services/authenticationService";
import cryptovalues from './stores/cryptovalues';
import liveprices from './stores/liveprices';

export default {
  components: {
    AppLayout,
    LandingPage
  },
  data() {
    return {
      userinfo,
      cryptoPrices: {} // Store cryptocurrency prices here
    }
  },
  setup() {
    const store = useLayoutStore();
    const layout = computed(() => store.get_layout);

    return {
      layout
    };
  },
  created() {
    this.userlog();
    this.fetchCryptoData();
    this.fetchCryptoPrices();
    setInterval(() => {
      this.fetchCryptoPrices();
      console.log("liveprices: ",liveprices)
    }, 10000);
  },
  methods: {
    fetchCryptoData() {
      const useremail = this.userinfo.useremail;

      if (useremail) {
        AuthenticationService.getCryptoData(useremail)
          .then((response) => {
            const cryptoData = response.data;
            // Do something with the fetched cryptocurrency data
            console.log("Cryptocurrency data fetched:", cryptoData);
            cryptovalues.btc = cryptoData.btc;
            cryptovalues.ethereum = cryptoData.ethereum;
            cryptovalues.ripple = cryptoData.ripple;
            cryptovalues.litecoin = cryptoData.litecoin;
            cryptovalues.bitcoinDash = cryptoData.bitcoinDash;
          })
          .catch((error) => {
            console.error("Error fetching cryptocurrency data:", error);
          });
      }
    },
    userlog() {
      if (this.userinfo.useremail) {
        let email = this.userinfo.useremail;
        let password = this.userinfo.userpassword;
        const url = `https://cryptotracker-872g.onrender.com/api/userss?email=${email}&password=${password}`;
        axios
          .get(url)
          .then((response) => {
            const userData = response.data;
            this.userinfo.username = userData.username;
            this.userinfo.usercurrency = userData.usercurrency;
            this.userinfo.usercurrencyfull = userData.usercurrencyfull;
            this.userinfo.notifications = userData.notifications;
            this.userinfo.phonenum = userData.phonenum;
            console.log("User data fetched:", this.userinfo);
          })
          .catch((error) => {
            console.error("Error retrieving user data:", error);
          });
      }
    },
  fetchCryptoPrices() {
  const cryptoSymbols = ['bitcoin', 'ethereum', 'ripple', 'litecoin', 'bitcoin-cash'];
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoSymbols.join(',')}&vs_currencies=usd`;

  axios
    .get(url)
    .then((response) => {
      this.cryptoPrices = response.data;
      console.log("Cryptocurrency prices fetched:", this.cryptoPrices);
      liveprices.bitcoin = this.cryptoPrices.bitcoin.usd;
      liveprices.ethereum = this.cryptoPrices.ethereum.usd;
      liveprices.ripple = this.cryptoPrices.ripple.usd;
      liveprices.litecoin = this.cryptoPrices.litecoin.usd;
      liveprices.bitcoinDash = this.cryptoPrices["bitcoin-cash"].usd;
    })
    .catch((error) => {
      console.error("Error fetching cryptocurrency prices:", error);
    });
}
  },
  onMounted() {
    // Call the fetchCryptoPrices method again at a regular interval
    setInterval(() => {
      this.fetchCryptoPrices();
    }, 30000); // Update every minute (adjust the interval as needed)
  }
}
</script>

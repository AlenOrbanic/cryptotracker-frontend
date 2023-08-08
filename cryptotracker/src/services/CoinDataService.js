import axios from "axios";

export default {
  getCoinData(ids, currency = "usd") {
    return axios.get("https://api.coingecko.com/api/v3/simple/price", {
      params: {
        ids: ids,
        vs_currencies: currency,
      },
    });
  },
};

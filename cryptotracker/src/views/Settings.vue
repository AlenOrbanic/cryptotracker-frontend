<template>
  <div class="container">
    <div class="profile_info mt-md-4 mt-2">
      <h5>General settings</h5>
      <div class="accordion" id="ProfileInfo">
        <div class="accordion-item">
          <h2 class="accordion-header position-relative" id="notify">
            <div
              class="toggle_container"
              :class="notifications ? 'toggled' : ''"
              @click="notifications = !notifications"
            >
              <div class="toggle"></div>
            </div>
            <button
              class="accordion-button"
              :class="!collapseOne ? 'collapsed' : ''"
              type="button"
              @click="collapseOne = !collapseOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <div class="info_line">
                <h6>Notifications</h6>
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            :class="collapseOne ? 'show' : ''"
            aria-labelledby="notify"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h6>
                ok
              </h6>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="ChangeCurrency">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <div class="info_line">
                <h6>Change currency</h6>
                <h6>{{ selectedCurrency }}</h6>
              </div>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="ChangeCurrency"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="changeCurrency_wrap">
                <button
                  v-for="currency in currencies"
                  :key="currency.code"
                  :class="['changeCurrency_button', { active: selectedCurrency === currency.code }]"
                  @click="updateCurrency(currency.code)"
                >
                  {{ currency.code }} - {{ currency.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="Version">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <div class="info_line">
                <h6>Version</h6>
              </div>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="Version"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h6>
                Cryptotracker is currently on version 2.0, for the previous versions check <a href="https://github.com/LukaBrodaric/CryptoTracker-pi">this link</a>
              </h6>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="TermsService">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <div class="info_line">
                <h6>Terms of service</h6>
              </div>
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="TermsService"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h6>
                ok
              </h6>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="PrivacyPolicy">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <div class="info_line">
                <h6>Privacy policy</h6>
              </div>
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="PrivacyPolicy"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <!--možda bolje formatirat-->
              <h6>
                <b>Data security&nbsp;&nbsp;&nbsp;</b><br>
                <p>We take reasonable measures to protect the confidentiality, integrity, and security of your personal information.&nbsp;&nbsp;&nbsp;</p>
                <p>However, please note that no method of transmission over the Internet or electronic storage is 100% secure. &nbsp;&nbsp;</p>
                <p>We cannot guarantee the absolute security of your information.&nbsp;&nbsp;&nbsp;</p>
                <b>Your Rights and Choices&nbsp;&nbsp;&nbsp;</b>
                <p>You have certain rights and choices regarding the personal information we collect about you.&nbsp;&nbsp;&nbsp; </p>
                <p>You may have the right to access, update, correct, or delete your personal information.&nbsp;&nbsp;&nbsp;</p>
                <p>You may also have the right to object to certain processing activities or withdraw your consent.&nbsp;&nbsp; &nbsp;</p>
                <p>To exercise your rights, please contact us using the information provided below.&nbsp;&nbsp;&nbsp;</p>
              </h6>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="ContactUS">
            <button
  class="accordion-button collapsed"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#collapseSeven"
  aria-expanded="false"
  aria-controls="collapseSeven"
  @click="sendEmail"
>
  <div class="info_line">
    <h6>Contact us</h6>
    <h6 class="clr_blue">cryptotracker@net.hr</h6>
  </div>
</button>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userinfo from '../stores/userinfo';

export default {
  data() {
    return {
      currencies: [
        { code: "USD", name: "US Dollar" },
        { code: "EUR", name: "Euro" },
        { code: "JPY", name: "Japanese Yen" },
        { code: "GBP", name: "British Pound" },
        { code: "INR", name: "Indian Rupee" },
        { code: "RUB", name: "Russian Ruble" },
        { code: "TRY", name: "Turkish Lira" },
        { code: "PLN", name: "Polish Zloty" },
        { code: "NOK", name: "Norwegian Krone" },
        { code: "CAD", name: "Canadian Dollar" },
        { code: "AUD", name: "Australian Dollar" },
        { code: "HUF", name: "Hungarian Forint" },
        { code: "SEK", name: "Swedish Krona" },
        { code: "CZK", name: "Czech Koruna" }
      ],
      selectedCurrency: "USD"
    };
  },
  methods: {
    updateCurrency(code) {
      this.selectedCurrency = code;
      userinfo.usercurrency = code;
      console.log(userinfo.usercurrency);
      const currency = this.currencies.find(c => c.code === code);
      if (currency) {
      console.log(currency.name);
      userinfo.usercurrencyfull = currency.name;
      }
    },
    sendEmail() {
      window.location = "mailto:cryptotracker@net.hr"
    }
  }
};
</script>

<style scoped>
.changeCurrency_wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.changeCurrency_button {
  padding: 5px 10px;
  border: none;
  background-color: #f2f2f2;
  color: #333333;
  cursor: pointer;
}

.changeCurrency_button.active {
  background-color: #000000;
  color: #ffffff;
}
</style>
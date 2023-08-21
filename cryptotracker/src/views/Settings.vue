<template>
 <div class="container">
    <div class="profile_info mt-md-4 mt-2">
      <h5>General settings</h5>
      <div class="accordion" id="ProfileInfo">
        <div class="accordion-item">
          <h2 class="accordion-header position-relative" id="notify">
            <div>
    <div
      class="toggle_container"
      :class="notifications ? '' : 'toggled'"
      @click="toggleNotifications"
    >
      <div class="toggle"></div>
    </div>
  </div>
            <button
              class="accordion-button"
              :class="!collapseOne ? 'collapsed' : ''"
              type="button"
              @click="toggleCollapseOne"
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
                <div class="term-row">
  <p>Welcome to <em>Cryptotracker 2.0</em>! These terms of service ("<strong>Terms</strong>") govern your use of our crypto application and related services ("<strong>Services</strong>"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using our Services.</p>
</div>

<div class="term-row">
  <p><strong>1. Eligibility:</strong> You must be at least 18 years old and capable of forming a binding contract to use our Services. By using our Services, you represent and warrant that you meet these eligibility requirements.</p>
</div>

<div class="term-row">
  <p><strong>2. User Responsibilities:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree not to use our Services for any illegal, unauthorized, or malicious purposes.</p>
</div>

<div class="term-row">
  <p><strong>3. Risks:</strong> Cryptocurrencies involve inherent risks, including but not limited to market volatility, technological vulnerabilities, and regulatory changes. You acknowledge and accept these risks and agree that we are not liable for any losses or damages incurred while using our Services.</p>
</div>

<div class="term-row">
  <p><strong>4. Intellectual Property:</strong> Our Services and all related intellectual property rights are owned or licensed by us. You are granted a limited, non-transferable, and non-exclusive license to use our Services for personal and non-commercial purposes. You agree not to modify, distribute, or reproduce any part of our Services without our prior written consent.</p>
</div>

<div class="term-row">
  <p><strong>5. Privacy:</strong> Our Privacy Policy governs the collection, use, and disclosure of your personal information. By using our Services, you consent to the collection and processing of your personal data as described in our Privacy Policy.</p>
</div>

<div class="term-row">
  <p><strong>6. Limitation of Liability:</strong> To the extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to the use of our Services.</p>
</div>

<div class="term-row">
  <p><strong>7. Termination:</strong> We reserve the right to suspend or terminate your access to our Services at any time, without prior notice or liability, for any reason whatsoever. Upon termination, the provisions of these Terms that by their nature should survive termination shall continue to apply.</p>
</div>

<div class="term-row">
  <p><strong>8. Modifications:</strong> We may update or modify these Terms from time to time. Any changes will be effective upon posting the revised Terms on our website. Your continued use of our Services after any such changes constitutes your acceptance of the modified Terms.</p>
</div>

<div class="term-row">
  <p><strong>9. Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of <em>[Jurisdiction]</em>. Any disputes arising out of or in connection with these Terms shall be submitted to the exclusive jurisdiction of the courts of <em>[Jurisdiction]</em>.</p>
</div>

<div class="term-row">
  <p>If you have any questions or concerns regarding these Terms, please contact us at <a href="mailto:cryptotracker@net.hr">cryptotracker@net.hr</a>.</p>
</div>

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
import AuthenticationService from '../services/authenticationService';
export default {
  data() {
    return {
      notifications: userinfo.notifications,
      collapseOne: false,
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
      selectedCurrency: userinfo.usercurrency
    };
  },
  mounted() {
    setTimeout(() => {
      if(userinfo.notifications === true){
        this.notifications = 'toggled'
      } else{
        this.notifications = ''
      }
    }, 500);
  },
  methods: {
    async toggleNotifications() {
      this.notifications = !this.notifications;

      try {
        const response = await AuthenticationService.updateUserNotification({
          email: userinfo.useremail,
          notifications: this.notifications,
        });

        console.log("API response:", response.data);
      } catch (error) {
        console.error("API error:", error);
      }
    },
    toggleCollapseOne() {
      this.collapseOne = !this.collapseOne;
    },
    async updateCurrency(code) {
      this.selectedCurrency = code;
      userinfo.usercurrency = code;
      console.log(userinfo.usercurrency);
      const currency = this.currencies.find(c => c.code === code);
      if (currency) {
      console.log(currency.name);
      userinfo.usercurrencyfull = currency.name;
      try {
    const response = await AuthenticationService.updateUserCurrency({
      email: userinfo.useremail,
      usercurrency: currency.code,
      usercurrencyfull: currency.name
    });
console.log(userinfo.useremail);
console.log(response);
  } catch (error) {
    // Handle the error here
    console.error('Error while chaning currency:', error);
    // You can set an error message or perform any other necessary actions
  }      
      }
    },
    sendEmail() {
      window.location = "mailto:cryptotracker@net.hr";
    }
  }
};
</script>

<style>
.term-row {
    padding-bottom: 20px;
  }
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
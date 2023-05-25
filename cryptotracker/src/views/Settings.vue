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
                <h6>$ - USD</h6>
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
                <div class="changeCurrency_box flex_align">$ - USD</div>
                <div class="changeCurrency_box flex_align">€- EUR</div>
                <div class="changeCurrency_box flex_align">¥- JPY</div>
                <div class="changeCurrency_box flex_align">£- GBP</div>
                <div class="changeCurrency_box flex_align">₹- INR</div>
                <div class="changeCurrency_box flex_align">₽- RUB</div>
                <div class="changeCurrency_box flex_align">₺- TRY</div>
                <div class="changeCurrency_box flex_align">P - PLN</div>
                <div class="changeCurrency_box flex_align">N - NOK</div>
                <div class="changeCurrency_box flex_align">C- CAD</div>
                <div class="changeCurrency_box flex_align">A- AUD</div>
                <div class="changeCurrency_box flex_align">H- HUF</div>
                <div class="changeCurrency_box flex_align">S- SEK</div>
                <div class="changeCurrency_box flex_align">C- CZK</div>
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
                ok
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
              <h6>
                ok
              </h6>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="Help">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              <div class="info_line">
                <h6>Help</h6>
              </div>
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            aria-labelledby="Help"
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
          <h2 class="accordion-header" id="ContactUS">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              <div class="info_line">
                <h6>Contact us</h6>
                <h6 class="clr_blue">info@cryptotracker.com</h6>
              </div>
            </button>
          </h2>
          <div
            id="collapseSeven"
            class="accordion-collapse collapse"
            aria-labelledby="ContactUS"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h6>
                ok
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref, computed, onMounted, onBeforeUnmount } from "vue";

  const notifications = ref(false); // ON OFF BUTTON SAM POKVARIO!!!
  const collapseOne = ref(false);
  const collapseTwo = ref(false);

  // Lifecycle hooks
  onMounted(() => {
    // Code to run when the component is mounted
    // ...
  });

  onBeforeUnmount(() => {
    // Code to run before the component is unmounted
    // ...
  });

  // Computed properties
  const computedProperty = computed(() => {
    // Code for computed property
    // ...
  });

  // Export variables or functions
  export {
    notifications,
    collapseOne,
    collapseTwo,
    computedProperty,
    // ... other variables or functions to export
  };
</script>

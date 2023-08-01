<template>
  <div class="portfolio_wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="lastest_news">
            <h5>Latest news</h5>
            <!-- Your existing content goes here -->
            <div class="cryptohopper-web-widget" data-id="5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  created() {
    // Your created hook code goes here
  },
  mounted() {
    // Create a script element
    const script = document.createElement("script");
    
    // Set the src attribute to the URL of the external script
    script.src = "https://www.cryptohopper.com/widgets/js/script";
    
    // Append the script to the head of the HTML document
    document.head.appendChild(script);
  },
  methods: {
    
  }
};
</script>

<style>

  .pull-right {
    visibility: hidden;
  }
</style>
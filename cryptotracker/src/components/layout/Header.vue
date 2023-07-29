<template>
  <header class="nav_wrap">
    <div class="container">
      <div class="nav_inner">
        <div class="menu_icon d-lg-none" @click="layout.toggle_mobile_menu()">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <div class="form_group">
          
        </div>
        <div class="nav_profile" @click="goToProfile">
      <div class="d-flex align-items-center">
        <!-- Use the profilePictureUrl to display the profile picture -->
        <img v-if="profilePictureUrl" :src="profilePictureUrl" alt="" class="nav_pic" />
        <img v-else src="@/assets/img/nav_dp.png" alt="" class="nav_pic" />
        <div class="flex_align flex-column">
          <h6 class="fw_700">{{ userinfo.username }}</h6>
        </div>
      </div>
      <img src="@/assets/img/vertical_dots.svg" alt="" class="vertical_dots" />
    </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useLayoutStore } from "@/stores/layout";
import userinfo from '../../stores/userinfo';
import AuthenticationService from '../../services/authenticationService';

export default {
  name: "Header",
  data() {
    return {
      userinfo,
      profilePictureUrl: null,
    };
  },
  setup() {
    const layout = useLayoutStore();

    return {
      layout,
    };
  },
  methods: {
    async goToProfile() {
      this.$router.push('/profile');
    },
    async fetchProfilePicture() {
      try {
        const response = await AuthenticationService.getProfilePicture(this.userinfo.useremail);
        // Convert the blob response to a URL for displaying the image
        this.profilePictureUrl = URL.createObjectURL(response.data);
      } catch (error) {
        // Handle the error if the profile picture cannot be fetched
        console.error('Error fetching profile picture:', error);
      }
    },
  },
  created() {
    // Fetch the user's profile picture from the backend when the component is created
    this.fetchProfilePicture();
  },
};
</script>

<style>
/* Your existing styles for the Header component */
</style>

<style>
/* Your existing styles for the Header component */

/* Set a fixed width and height for the nav profile picture */
.nav_profile .nav_pic {
  width: 40px; /* Adjust the width as needed */
  height: 40px; /* Adjust the height as needed */
  border-radius: 50%; /* Display the image in a circular shape */
}
</style>
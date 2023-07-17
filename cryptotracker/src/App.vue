<template>
  <div>
    <LandingPage v-if="layout === 'auth'" />
    <AppLayout v-else />
  </div>
</template>

<script>
import { computed } from "vue";
import { useLayoutStore } from './stores/layout';
import AppLayout from './layout/app-layout.vue';
import LandingPage from './layout/landing_page.vue';
import userinfo from './stores/userinfo';
import axios from 'axios';

export default {
  components: {
    AppLayout,
    LandingPage
  },
  data(){
    return{
      userinfo
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
  console.log(userinfo);
},
methods: {
  userlog() {
    if (this.userinfo.useremail) {
      let email = this.userinfo.useremail;
      let password = this.userinfo.userpassword;
      const url = `http://localhost:8000/api/userss?email=${email}&password=${password}`;
      axios
        .get(url)
        .then((response) => {
          const userData = response.data;
          this.userinfo.username = userData.username; // Update the value of userinfo.username
          this.userinfo.usercurrency = userData.usercurrency;
          this.userinfo.usercurrencyfull = userData.usercurrencyfull;
          setTimeout(() => {
            console.log(this.userinfo.username); // Use "this.userinfo" to access the updated value
          }, 200);
        })
        .catch((error) => {
          console.error("Error retrieving user data:", error);
        });
    }
  }
}

}
</script>


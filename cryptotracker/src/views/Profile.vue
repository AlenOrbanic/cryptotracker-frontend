<template>
  <div class="container">
    <div class="hey_section">
      <img src="../assets/img/Waving_Hand.png" alt="" />
      <h5>Hey, {{userinfo.username}}!</h5>
    </div>
    <div class="profile_info">
      <h5>Profile information</h5>
      <div class="accordion" id="ProfileInfo">
        <div class="accordion-item">
          <h2 class="accordion-header" id="DisplayName">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <div class="info_line">
                <h6>Display name</h6>
                <input type="text" v-model="newname" :placeholder="userinfo.username" />
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="DisplayName"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="change_input flex_align">Change display name</div>
              <a href="" class="flex_align main_btn" @click.prevent="saveNewName">SAVE</a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="EmailAddress">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <div class="info_line">
                <h6>Email address</h6>
                <input type="text" v-model="newemail" :placeholder="userinfo.useremail" />
              </div>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="EmailAddress"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="change_input flex_align">Change email address</div>
              <a href="" class="flex_align main_btn" @click.prevent="saveNewEmail">SAVE</a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="PhoneNum">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <div class="info_line">
                <h6>Phone number</h6>
                <input type="text" :placeholder="'ex. ' + phonenum" v-model="phonenum" />
              </div>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="PhoneNum"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="change_input flex_align">Change phone number</div>
              <a href="#" class="flex_align main_btn" @click="updatePhoneNum(phonenum)" :disabled="!isValidPhoneNumber(phonenum)">SAVE</a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="ProfilePic">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <div class="info_line">
                <h6>Edit profile picture</h6>
                <h6>
                  <div class="profile-picture-container">
                    <img
                      v-if="profilePictureUrl"
                      :src="profilePictureUrl"
                      alt="Profile Picture"
                      class="profile-picture"
                    />
                    <img v-else src="../assets/img/nav_dp.png" alt="User Icon" class="profile-picture" />
                  </div>
                </h6>
              </div>
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="ProfilePic"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="change_input change__input flex_align">Change profile picture</div>
              <!-- Add the input element to select a new profile picture -->
              <input type="file" @change="handleImageUpload" />
              <!-- Add the @click event and prevent default behavior -->
              <a href="" class="flex_align main_btn" @click.prevent="saveProfilePicture">SAVE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import userinfo from '../stores/userinfo';
import AuthenticationService from '../services/authenticationService';

export default {
  data() {
    return {
      userinfo,
      selectedImage: null,
      profilePictureUrl: null,
      phonenum: userinfo.phonenum,
      newname: '',
      newemail: ''
    };
  },
  methods: {
    async updatePhoneNum(phonenumber) {
      const response = await AuthenticationService.updatePhoneNumber({
        email: this.userinfo.useremail,
        phonenum: phonenumber,
      });
      console.log(response);
    },
    handleImageUpload(event) {
      this.selectedImage = event.target.files[0];
    },
    saveProfilePicture() {
      console.log('User email:', this.userinfo.useremail);
      if (this.selectedImage) {
        const formData = new FormData();
        formData.append('image', this.selectedImage, `${this.userinfo.useremail}.jpg`);
        formData.append('useremail', this.userinfo.useremail);

        AuthenticationService.uploadProfilePicture(formData)
          .then(() => {
            console.log('Profile picture uploaded successfully!');
            // Wait for 500ms to allow the server to process the image
            setTimeout(() => {
              this.fetchProfilePicture();
              // Reload the whole website after the profile picture is saved
              //window.location.reload();
            }, 500);
          })
          .catch((error) => {
            console.error('Error uploading profile picture:', error);
          });
      } else {
        console.log('No image selected for upload.');
      }
    },
    fetchProfilePicture() {
      AuthenticationService.getProfilePicture(this.userinfo.useremail)
        .then((response) => {
          const url = URL.createObjectURL(new Blob([response.data]));
          this.profilePictureUrl = url;
        })
        .catch((error) => {
          console.error('Error fetching profile picture:', error);
        });
    },
    isValidPhoneNumber(phoneNumber) {
      // Your validation logic here
      const phoneNumberPattern = /^\+\d{1,4}\d{6,}$/; // Modify this pattern based on your desired format
      return phoneNumberPattern.test(phoneNumber);
    },
    saveNewName() {
      if (this.newname.trim() !== '') {
        AuthenticationService.updateUserName({
          email: this.userinfo.useremail,
          newname: this.newname
        })
          .then(() => {
            console.log('Username updated successfully!');
            this.userinfo.username = this.newname;
            this.newname = '';
          })
          .catch((error) => {
            console.error('Error updating username:', error);
          });
      }
    },
    saveNewEmail() {
      if (this.newemail.trim() !== '') {
        AuthenticationService.updateUserEmail({
          email: this.userinfo.useremail,
          newemail: this.newemail
        })
          .then(() => {
            console.log('Email updated successfully!');
            this.userinfo.useremail = this.newemail;
            this.newemail = '';
          })
          .catch((error) => {
            console.error('Error updating email:', error);
          });
      }
    },
  },
  name: "profile",
  mounted() {
    this.fetchProfilePicture();
  },
};
</script>

<style scoped>
/* Add styles to make the image circular */
.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover; /* Ensure the image fills the circle without stretching */
  border: 2px solid #fff; /* Add a white border to give a circle effect */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3); /* Add a subtle shadow for aesthetics */
}

/* Add styles to center the image and adjust its size on smaller screens */
.profile-picture-container {
  display: flex;
  justify-content: center; /* Horizontally center the image */
  align-items: center; /* Vertically center the image */
  width: 100px; /* Set the width to the desired circle size */
  height: 100px; /* Set the height to the desired circle size */
  border-radius: 50%; /* Create a circular container */
  border: 2px solid #fff; /* Add a white border to give a circle effect */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3); /* Add a subtle shadow for aesthetics */
  margin: auto; /* Center the container horizontally (optional) */
}

/* Add styles to adjust the image size on smaller screens */
@media (max-width: 768px) {
  .profile-picture {
    width: 60px;
    height: 60px;
  }
  .profile-picture-container {
    width: 60px;
    height: 60px;
  }
}
</style>

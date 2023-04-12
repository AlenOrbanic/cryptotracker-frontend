<template>
    <div class="container">
      <div class="hey_section">
        <img src="../assets/img/Waving_Hand.png" alt="" />
        <h5>Hey, Luka!</h5>
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
                  <h6>Luka Brodarič</h6>
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
                <a href="" class="flex_align main_btn">SAVE</a>
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
                  <h6>Email adress</h6>
                  <h6>lbrodaric@unipu.hr</h6>
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
                <div class="change_input flex_align">Change email adress</div>
                <a href="" class="flex_align main_btn">SAVE</a>
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
                  <h6>+385 xx xxx xx</h6>
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
                <a href="" class="flex_align main_btn">SAVE</a>
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
                  <h6><img src="../assets/img/nav_dp.png" alt="" /></h6>
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
                <div class="change_input change__input flex_align">
                  Change profile picture
                </div>
                <a href="" class="flex_align main_btn">SAVE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
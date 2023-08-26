<template>
    <body>
      <header>
      
      <a href="../" class="logo">CryptoTracker</a>
    
      <input type="checkbox" id="menu-bar">
      <label for="menu-bar" class="fas fa-bars"></label>
    
      <nav class="navbar">
          <a href='../'>Home</a>
          <a href="../#features">Features</a>
          <a href="../#about">About</a>
          <a href="../#review">Review</a>
          <a href="../#contact">Contact</a>
          <a></a>
          
      </nav>
    
    </header>
      
    
    
      
        <div class="container" :class="rightpanel" id="container">
          <div class="form-container sign-up-container">
            <div
              v-if="errorMessage !== ''"
              class="alert alert-danger position-absolute"
              role="alert"
            >
              {{ errorMessage }}
            </div>
            <div
              v-if="successMessage !== ''"
              class="alert alert-success"
              role="alert"
            >
              {{ successMessage }}
            </div>
            <form action="#" @submit.prevent="signupRequest" id="signup-form">
              <h1>Create Account</h1>
              
              <span>using your email for registration</span>
              <input type="text" v-model="username" placeholder="Username" />
              <input type="email" id="regmail" v-model="email" placeholder="Email" />
              <input
                type="password"
                id="regpassword"
                v-model="password"
                placeholder="Password"
              />
              <button
                v-bind:disabled="xhrRequest"
                v-bind:class="{ disabled: xhrRequest }"
                @click="register"
              >
                <span class="btn" v-if="!xhrRequest">Sign Up</span>
                <span v-if="xhrRequest">Please Wait...</span>
              </button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <div
              v-if="errorMessage !== ''"
              class="alert alert-danger position-absolute"
              role="alert"
            >
              {{ errorMessage }}
            </div>
            <div
              v-if="successMessage !== ''"
              class="alert alert-success"
              role="alert"
            >
              {{ successMessage }}
            </div>
            <form action="#" @submit.prevent="login" id="login-form">
              <h1>Sign in</h1>
             
              <span>using your account</span>
              <input type="email" placeholder="Email" v-model="email" id="email" />
              <input
                type="password"
                placeholder="Password"
                v-model="password"
                id="password"
              />
              <a href="#">Forgot your password?</a>
              <button
                v-bind:disabled="xhrRequest"
                v-bind:class="{ disabled: xhrRequest }"
                class="btn btn-lg btn-primary px-4"
              >
                <span v-if="!xhrRequest">Login</span>
                <span v-if="xhrRequest">Please Wait...</span>
              </button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep using CryptoTracker please login with your personal info
                </p>
                <button class="ghost" @click="removerightpanel" id="signIn">
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>
                  Enter your personal details and start journey with CryptoTracker
                </p>
                <button class="ghost" @click="addrightpanel" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      
      </body>
      </template>
      
      <style scoped>
    
     @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');
      * {
        box-sizing: border-box;
      }
      body {
       
        background: #f6f5f7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        /* margin: -20px 0 50px; */
        margin-top: 20px;
      }
      h1 {
        font-weight: bold;
        margin: 0;
      }
      p {
        font-size: 14px;
        font-weight: 100;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
      }
    
      a {
        color: #333;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
      }
      .container {
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
        position: relative;
        overflow: hidden;
        width: 768px;
        max-width: 100%;
        min-height: 640px;
        margin-top: 150px;
      }
      .form-container form {
        background: #fff;
        display: flex;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .social-container {
        margin: 20px 0;
      }
      .social-container a {
        border: 1px solid #ddd;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        height: 40px;
        width: 40px;
      }
      .form-container input {
        background: #eee;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
      }
      button {
        border-radius: 20px;
        border: 1px solid #0099ff;
        background: #0099ff;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
      }
      button:active {
        transform: scale(0.95);
      }
      button:focus {
        outline: none;
      }
      button.ghost {
        background: transparent;
        border-color: #fff;
      }
      .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
      }
      .sign-in-container {
        left: 0;
        width: 50%;
        z-index: 2;
      }
      .sign-up-container {
        left: 0;
        width: 50%;
        z-index: 1;
        opacity: 0;
      }
      .overlay-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.6s ease-in-out;
        z-index: 100;
      }
      .overlay {
        background: #0099ff;
        background: linear-gradient(to right, #0099ff, #8512bb) no-repeat 0 0 / cover;
        color: #fff;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateY(0);
        transition: transform 0.6s ease-in-out;
      }
      .overlay-panel {
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 40px;
        height: 100%;
        width: 50%;
        text-align: center;
        transform: translateY(0);
        transition: transform 0.6s ease-in-out;
      }
      .overlay-right {
        right: 0;
        transform: translateY(0);
      }
      .overlay-left {
        transform: translateY(-20%);
      }
      /* Move signin to right */
      .container.right-panel-active .sign-in-container {
        transform: translateY(100%);
      }
      /* Move overlay to left */
      .container.right-panel-active .overlay-container {
        transform: translateX(-100%);
      }
      /* Bring signup over signin */
      .container.right-panel-active .sign-up-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
      }
      /* Move overlay back to right */
      .container.right-panel-active .overlay {
        transform: translateX(50%);
      }
      /* Bring back the text to center */
      .container.right-panel-active .overlay-left {
        transform: translateY(0);
      }
      /* Same effect for right */
      .container.right-panel-active .overlay-right {
        transform: translateY(20%);
      }
      .footer {
        margin-top: 25px;
        text-align: center;
      }
      .icons {
        display: flex;
        width: 30px;
        height: 30px;
        letter-spacing: 15px;
        align-items: center;
      }
    
      .heading{
          text-align: center;
          background:var(--gradient);
          color:transparent;
          -webkit-background-clip: text;
          background-clip: text;
          font-size: 3.5rem;
          text-transform: uppercase;
          padding:1rem;
          padding-bottom: 4rem;
      }
      
      header{
          
          position: fixed;
          top:0; left:0;
          width:100%;
          background:#fff;
          box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
          padding:2rem 9%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 1000;
      }
      
      header .logo{
          font-size: 2rem;
          color:var(--purple);
      }
      
      header .logo span{
          color:var(--pink);
      }
      
      header .navbar  a{
          font-size: 1.7rem;
          margin-left: 2rem;
          color:var(--purple);
      }
      
      header .navbar a:hover{
          color:var(--pink);
      }
      
      header input{
          display: none;
      }
      
      header label{
          font-size: 3rem;
          color:var(--purple);
          cursor: pointer;
          visibility: hidden;
          opacity: 0;
      }
    
      *{
          font-family: 'Poppins', sans-serif;
          margin:0; padding:0;
          box-sizing: border-box;
          text-decoration: none;
          outline: none; border:none;
          
      }
      
      :root{
          --purple: #0E538C;
          --pink:#0B4870;
          --gradient:linear-gradient(90deg, var(--purple), var(--pink));
      }
      
      </style>
      <style >
      @import '../assets/css/landingPage.css';
      </style>
    
    <script>
    import axios from 'axios';
    import AuthenticationService from '../services/authenticationService';
    import userinfo from '../stores/userinfo';
    export default {
      name: 'Login',
      data() {
        return {
          rightpanel: '',
          email: '',
          password: '',
          xhrRequest: false,
          errorMessage: '',
          successMessage: ''
        };
      },
      methods: {
  async login() {
  this.xhrRequest = true;
  setTimeout(() => {
    this.xhrRequest = false;
  }, 4000);
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    const response = await AuthenticationService.login({
      email: this.email,
      password: this.password,
      config
    });
    
const url = `https://cryptotracker-872g.onrender.com/api/userss?email=${this.email}&password=${this.password}`;

axios.get(url)
  .then(response => { 
    const userData = response.data;
    userinfo.username = userData.username;
    userinfo.usercurrency = userData.usercurrency;
    userinfo.usercurrencyfull = userData.usercurrencyfull;
    userinfo.useremail = this.email;
    userinfo.userpassword = this.password;
  })
  .catch(error => {
    console.error('Error retrieving user data:', error);
  });

    // Ovo se vraca samo kad je uspjeh
    this.successMessage = 'Logged in successfully';
    // Napraviti da backend vraca informacije o korisniku nekako na frontend i onda ih spremiti u store!
    setTimeout(() => {
      this.$router.push('/dashboard');
    }, 700);
  } catch (error) {
    // Handle the error here
    console.error('Error during login:', error);
    this.errorMessage = 'THERE WAS AN ERROR DURING LOGIN';
    // You can set an error message or perform any other necessary actions
  }
},
    addrightpanel() {
          this.rightpanel = 'right-panel-active';
        },
        removerightpanel() {
          this.rightpanel = '';
        },
        async register() {
  this.xhrRequest = true;
  setTimeout(() => {
    this.xhrRequest = false;
  }, 4000);

  try {
    const response = await AuthenticationService.register({
      email: this.email,
      password: this.password,
      username: this.username
    });
    userinfo.useremail = this.email;
    userinfo.userpassword = this.password;
    userinfo.username = this.username;
    console.log(response.data);
    this.successMessage = 'SUCCESSFULLY REGISTERED';
    setTimeout(() => {
      this.$router.push('/dashboard');
    }, 700);
  } catch (error) {
    // Handle the error here
    this.errorMessage = 'THERE WAS AN ERROR DURING REGISTRATION';
    console.error('Error during registration:', error);
    // You can set an error message or perform any other necessary actions
  }
}

      }
  }
    </script>